module.exports = {
  apps: [
    {
      name: 'simplify',
      script: 'npm',
      args: 'run start',
      cwd: '/var/www/simplify.excellenceauditing.net',
      env: {
        PORT: 3002,
        NODE_ENV: 'production',
      },
    },
  ],
}
