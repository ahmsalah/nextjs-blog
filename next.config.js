module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/posts/1',
        permanent: true,
      },
      {
        source: '/posts',
        destination: '/posts/1',
        permanent: true,
      },
    ];
  },
};
