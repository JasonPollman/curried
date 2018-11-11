function flow(arrOfFns) {
  return function receiver() {
    if (!arrOfFns || !arrOfFns.length) return undefined;
    let value;
    let len = -1;

    while (++len < arrOfFns.length) {
      const func = arrOfFns[len];

      if (typeof func === 'function') {
        value = (len === 0)
          ? func.apply(this, arguments)
          : func.call(this, value);
      }
    }

    return value;
  };
}

// function a(one, two) {
//   return one + two;
// }

// function m(v) {
//   return v * v;
// }

// const test = flow([a, m]);

// console.log('here', test(1, 2));

export default flow;
