function flow(arrOfFns) {
  let argLen = arrOfFns.length;

  while (--argLen) {
    if (typeof arrOfFns[argLen] !== 'function') {
      throw new TypeError('Expected indexes in flow array to be of type function');
    }
  }

  return function receiver() {
    let value = arrOfFns[0].apply(this, arguments);
    let len = 0;

    while (++len < arrOfFns.length) {
      const func = arrOfFns[len];

      value = func.call(this, value);
    }

    return value;
  };
}

export default flow;
