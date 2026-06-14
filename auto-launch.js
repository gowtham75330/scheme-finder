import { spawn, execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🌟 Cloudflare Tunnel & Build Script Starting...');

// 1. Ensure backend dependencies and start it
console.log('📦 Setting up backend...');
try {
  execSync('npm install', { cwd: path.join(__dirname, 'backend'), stdio: 'ignore' });
} catch(e) {}

// Start backend
const backend = spawn('node', ['server.js'], { cwd: path.join(__dirname, 'backend'), shell: true });

// 2. Start Cloudflare Tunnel
console.log('🌐 Requesting Public URL from Cloudflare...');
const tunnel = spawn('npx', ['-y', 'cloudflared', 'tunnel', '--url', 'http://localhost:5000'], { cwd: __dirname, shell: true });

let urlFound = false;

tunnel.stderr.on('data', (data) => {
  const output = data.toString();
  const match = output.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);
  
  if (match && !urlFound) {
    urlFound = true;
    const url = match[0];
    console.log('\n======================================');
    console.log('✅ YOUR SECURE BACKEND URL:');
    console.log('👉', url);
    console.log('======================================\n');
    
    // 3. Update Frontend Files
    console.log('🔄 Connecting Frontend to new URL...');
    const frontendSrc = path.join(__dirname, 'frontend', 'src');
    
    const walkSync = (dir, filelist = []) => {
      fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        if (fs.statSync(dirFile).isDirectory()) {
          filelist = walkSync(dirFile, filelist);
        } else if (dirFile.endsWith('.jsx')) {
          filelist.push(dirFile);
        }
      });
      return filelist;
    };
    
    try {
      const files = walkSync(frontendSrc);
      files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        // Replace all kinds of possible previous urls
        content = content.replace(/https:\/\/scholarship-backend-[a-zA-Z0-9-]+\.onrender\.com/g, url);
        content = content.replace(/https:\/\/scholarship-backend-27q7\.onrender\.com/g, url);
        content = content.replace(/https:\/\/[a-zA-Z0-9-]+\.loca\.lt/g, url);
        content = content.replace(/http:\/\/localhost:5000/g, url);
        fs.writeFileSync(file, content);
      });
      console.log('✅ Frontend hooked up successfully.');
    } catch(e) {
      console.log('Warning updating files:', e.message);
    }
    
    // 4. Build Frontend
    console.log('⏳ Building Final Frontend (This takes ~15 seconds)...');
    try {
      execSync('npm run build', { cwd: path.join(__dirname, 'frontend'), stdio: 'inherit' });
      console.log('\n🎉 ALL DONE! 🎉');
      console.log('Drop the frontend/dist folder into app.netlify.com/drop NOW!');
      console.log('⚠️ IMPORTANT: Keep this terminal OPEN while showing the demo! ⚠️');
    } catch(e) {
      console.log('❌ Build failed', e.message);
    }
  }
});

tunnel.on('error', (err) => {
  console.log('Failed to start tunnel:', err);
});

process.on('SIGINT', () => {
  backend.kill();
  tunnel.kill();
  process.exit();
});
