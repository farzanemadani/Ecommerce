module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      'postcss-preset-env': {
        stage: 1,
        features: {
          'nesting-rules': true
        }
      },
      autoprefixer: {},
    }
  };
  