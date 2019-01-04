module.exports = ({ foldr, fp, ramda }) => {
  const tests = {
    foldr: x => foldr.cloneDepthFx(0, x),
    ramda: x => ramda.clone(x),
    lodash: x => fp.clone(x),
  };

  const testsDeep = {
    foldr: x => foldr.cloneDepthFx(Infinity, x),
    ramda: x => ramda.clone(x),
    lodash: x => fp.cloneDeep(x),
  };

  const circular = {
    a: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: 100,
              },
            },
          },
        },
      },
    },
  };

  circular.a.b.c.d.e.a = circular.a;
  circular.a.b.c.d.e.a = circular.a;
  circular.circular = circular;

  const superdeep = {
    a: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: 5,
                  },
                },
              },
            },
          },
        },
      },
    },
    b: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: 5,
                  },
                },
              },
            },
          },
        },
      },
    },
    c: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: 5,
                  },
                },
              },
            },
          },
        },
      },
    },
    d: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: 5,
                  },
                },
              },
            },
          },
        },
      },
    },
    e: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: 5,
                  },
                },
              },
            },
          },
        },
      },
    },
    f: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: 5,
                  },
                },
              },
            },
          },
        },
      },
    },
    g: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: 5,
                  },
                },
              },
            },
          },
        },
      },
    },
    h: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: 5,
                  },
                },
              },
            },
          },
        },
      },
    },
    i: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: 5,
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  return [
    {
      name: 'Clone Depth (Null)',
      expect: (result, assert) => assert(result === null),
      setup: () => null,
      tests,
    },
    {
      name: 'Clone Depth (Literal Value)',
      expect: (result, assert) => assert(result === 5),
      setup: () => 5,
      tests,
    },
    {
      name: 'Clone Depth (Object)',
      expect: (result, { deepEqual }) => deepEqual(result, { foo: 'bar', baz: 'quxx' }),
      setup: () => ({ foo: 'bar', baz: 'quxx' }),
      tests,
    },
    {
      name: 'Clone Depth (Array)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      setup: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tests,
    },
    {
      name: 'Clone Depth (Array, Large)',
      expect: (result, { deepEqual }) => deepEqual(result, Array(10000).fill(1)),
      setup: () => Array(10000).fill(1),
      tests,
    },
    {
      name: 'Clone Depth (2 Levels)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        bar: {
          a: 1,
          b: 2,
          c: 3,
        },
      }),
      setup: () => ({
        bar: {
          a: 1,
          b: 2,
          c: 3,
        },
      }),
      tests: testsDeep,
    },
    {
      name: 'Clone Depth (Deep)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        foo: {
          bar: {
            baz: {
              quxx: 100,
              string: 'string',
              regexp: /100/,
            },
          },
        },
        foo2: {
          bar: {
            baz: {
              quxx: 100,
              string: 'string',
              regexp: /100/,
            },
          },
        },
      }),
      setup: () => ({
        foo: {
          bar: {
            baz: {
              quxx: 100,
              string: 'string',
              regexp: /100/,
            },
          },
        },
        foo2: {
          bar: {
            baz: {
              quxx: 100,
              string: 'string',
              regexp: /100/,
            },
          },
        },
      }),
      tests: testsDeep,
    },
    {
      name: 'Clone Depth (Super Deep)',
      expect: (result, { deepEqual }) => deepEqual(result, superdeep),
      setup: () => superdeep,
      tests: testsDeep,
    },
    {
      name: 'Clone Depth (Deep, Circular)',
      expect: (result, { deepEqual }) => deepEqual(result, circular),
      setup: () => circular,
      tests: testsDeep,
    },
  ];
};
