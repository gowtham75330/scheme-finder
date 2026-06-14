import fs from 'fs';
import { exec } from 'child_process';
import path from 'path';

// Read tunnel log
const log = fs.readFileSync('tunnel.log', 'utf16le');
const match = log.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);

if (match) {
  const url = match[0];
  console.log('✅ Found Cloudflare URL:', url);
  
  // Update frontend files
  const frontendPath = path.join(process.cwd(), 'frontend', 'src');
  
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
  
  const files = walkSync(frontendPath);
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('https://scholarship-backend-27q7.onrender.com')) {
      content = content.replace(/https:\/\/scholarship-backend-27q7\.onrender\.com/g, url);
      fs.writeFileSync(file, content);
    }
  });

  console.log('✅ Updated all frontend URLs!');
  
  // Trigger Vite Build
  console.log('⏳ Building frontend...');
  exec('npm run build', { cwd: path.join(process.cwd(), 'frontend') }, (err, stdout) => {
    if (err) console.error(err);
    else console.log('🟢 Frontend Build completed successfully!');
  });
} else {
  console.log('❌ Cloudflare URL not found in log.');
}
