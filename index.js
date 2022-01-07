function compose() {
  var funcs = [];

  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'function') {
      funcs[i] = arguments[i];
    } else {
      throw new Error('One of the params of compose is not a function');
    }
  }

  funcs = funcs.reverse();

  return function innerCompose() {
    if (!funcs.length) {
      return undefined;
    }

    return funcs.reduce(function (args, fn, i) {
      if (i === 0) {
        return fn.apply(this, args)
      };

      return fn(args);
    }, arguments);
  }
}

module.exports = {
  compose
}