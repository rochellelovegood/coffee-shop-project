export default {
    base: '/',
    build: {
      rollupOptions: {
        input: {
          main: './index.html',
          'add-member': './src/add-member.html',
          'all-coffee': './src/allcoffee.html',
          members: './src/member.html',
        },
      },
    },
  };