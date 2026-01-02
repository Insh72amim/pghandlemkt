module.exports = {
  apps: [
    {
      name: 'pghandle-mkt',
      script: 'npm',
      args: 'run dev -- --port 5175',
      interpreter: 'none',
      cwd: './',
      env: {
        NODE_ENV: 'development',
      },
      instances: 1,
      autorestart: true,
      watch: false, // Vite handles HMR
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      combine_logs: true,
      merge_logs: true,
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
    },
  ],
};
