module.exports = {
  apps: [
    {
      name: "auth-jwt",
      script: "index.js",
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 6080,
      },
      error_file: "logs/err.log",
      out_file: "logs/out.log",
      time: true,
      // Restart app if it reaches memory threshold
      max_memory_restart: "400M",
      // Restart on error
      exp_backoff_restart_delay: 100,
    },
  ],
};
