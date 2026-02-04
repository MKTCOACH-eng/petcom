#!/usr/bin/env node

const { spawn } = require('child_process');
const net = require('net');

const PORT_RANGE = {
  start: 3000,
  end: 3006
};

function checkPort(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false); // Port is in use
      } else {
        reject(err);
      }
    });
    
    server.once('listening', () => {
      server.close();
      resolve(true); // Port is available
    });
    
    server.listen(port, '0.0.0.0');
  });
}

async function findAvailablePort() {
  for (let port = PORT_RANGE.start; port <= PORT_RANGE.end; port++) {
    try {
      const isAvailable = await checkPort(port);
      if (isAvailable) {
        return port;
      }
    } catch (err) {
      console.log(`Error checking port ${port}:`, err.message);
    }
  }
  
  throw new Error(`No available ports found in range ${PORT_RANGE.start}-${PORT_RANGE.end}`);
}

function startNextDev(port) {
  console.log(`🚀 Starting Next.js development server on port ${port}...`);
  
  const child = spawn('npx', ['next', 'dev', '-p', port], {
    stdio: 'inherit',
    shell: true
  });
  
  child.on('error', (err) => {
    console.error('Failed to start Next.js:', err);
    process.exit(1);
  });
  
  child.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Next.js exited with code ${code}`);
      process.exit(code);
    }
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n👋 Shutting down development server...');
    child.kill('SIGINT');
  });
  
  process.on('SIGTERM', () => {
    console.log('\n👋 Shutting down development server...');
    child.kill('SIGTERM');
  });
}

async function main() {
  try {
    const availablePort = await findAvailablePort();
    startNextDev(availablePort);
  } catch (err) {
    console.error('❌ Error starting development server:', err.message);
    console.error('Please close other development servers or use a different port range.');
    process.exit(1);
  }
}

main();