/**
 * The targets foldr is targeting for compatibility.
 * See https://babeljs.io/docs/en/babel-preset-env#targets for more info.
 * @type {Object}
 */
const targets = {
  node: '6.9.0', // LTS Boron.
  browsers: [
    'last 2 versions',
    'ie 11',
  ],
};

module.exports = {
  compact: true,
  comments: false,
  presets: [
    ['@babel/preset-env', {
      targets,
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
    cjs: {
      presets: [
        ['@babel/preset-env', {
          modules: false,
          targets,
        }],
      ],
      plugins: [
        // Allows users to do require('foo') or require('foo').default.
        // See scripts/cjs-modify-default-export.js for more info.
        './scripts/cjs-fn-as-default.js',
        // Using custom @babel/plugin-transform-modules-commonjs options.
        // Hence `modules: false` is set on the env preset.
        ['@babel/plugin-transform-modules-commonjs', {
          noInterop: true,
          loose: true,
          lazy: false,
          strict: true,
        }],
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
