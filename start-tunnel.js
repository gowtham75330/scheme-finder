import localtunnel from 'localtunnel';
import { exec } from 'child_process';

const start = async () => {
  // Check if port is available or already bound
  console.log('Starting backend server and tunnel...');
  
  // Start the actual backend server ignoring errors if already running
  exec('cd backend && node server.js', (err) => {
    if (err && !err.message.includes('EADDRINUSE')) {
      console.error('Backend failed to start:', err);
    }
  });

  // Create tunnel
  const tunnel = await localtunnel({ port: 5000, subdomain: 'gowtham-scholarship-api-99' });
  console.log('Backend public URL:', tunnel.url);
  
  tunnel.on('error', err => {
    console.error('Tunnel error:', err);
  });
};

start();
