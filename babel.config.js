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

/**
 * These are plugins we're excluding as they cause performance
 * issues. Just be aware of why they're being excluded so you can
 * guard for it in the code.
 * @type {Array<string>}
 */
const exclude = [
  // Excluding this as it kills performance where typeof === 'object' is
  // concerned by adding the `_typeof` helper.

  // BE AWARE THAT IN SOME OLDER BROWSER VERSIONS THAT TYPEOF SYMBOL
  // IS ACTUALLY `object` (HENCE THE HELPER).
  'babel-plugin-transform-typeof-symbol',
];

module.exports = {
  compact: true,
  comments: false,
  presets: [
    ['@babel/preset-env', {
      targets,
      exclude,
    }],
    ['minify', {
      simplify: false,
      builtIns: false,
    }],
  ],
  env: {
    webpack: {
      presets: [
        ['@babel/preset-env', {
          modules: false,
          targets,
          exclude,
        }],
      ],
    },
    commonjs: {
      // So IDE's will pickup using IntelliSense.
      comments: true,
      presets: [
        ['@babel/preset-env', {
          modules: 'commonjs',
          targets,
          exclude,
        }],
      ],
    },
    esm: {
      // So IDE's will pickup using IntelliSense.
      comments: true,
      presets: [
        ['@babel/preset-env', {
          modules: false,
          exclude,
        }],
      ],
    },
  },
};
