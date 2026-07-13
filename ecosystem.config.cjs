module.exports = {
  apps: [
    {
      name: 'simplify',
      script: 'npm',
      args: 'run start',
      cwd: '/var/www/800-simplify.com',
      env: {
        PORT: 3002,
        NODE_ENV: 'production',
      },
    },
  ],
}
