module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/auth',
        destination: '/api/auth/page',
      },
    ];
  },
};