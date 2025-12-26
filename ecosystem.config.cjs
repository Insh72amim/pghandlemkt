module.exports = {
  apps: [
    {
      name: 'pghandle-mkt',
      script: 'npm',
      args: 'run dev',
      interpreter: 'none',
      cwd: './',
      env: {
        NODE_ENV: 'development',
      },
      watch: false,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
    },
  ],
};
