module.exports = {
  comments: false,
  compact: true,
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: '6.9.0',
        browsers: [
          'last 2 versions',
          'ie 11',
        ],
      },
    }],
    ['minify', {
      simplify: false,
    }],
  ],
  env: {
    test: {
      plugins: [
        // This fixes an issue with import resolution and babel-jest.
        // Prior to adding this plugin we were getting syntax errors with `import` statements.
        // See https://github.com/facebook/jest/issues/6913#issuecomment-421618932.
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
    esm: {
      presets: [
        ['@babel/preset-env', {
          modules: false,
          targets: {
            esmodules: true,
          },
        }],
      ],
    },
  },
};
