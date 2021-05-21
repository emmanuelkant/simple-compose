function compose() {
  var funcs = [];

  for (var i = 0; i < arguments.length; i++) {
    funcs[i] = arguments[i];
  }

  funcs = funcs.reverse();
	return function() {
    return funcs.reduce(function(args, fn, i) {
      if (i === 0) return fn.apply(this, args);
      return fn(args);
    }, arguments);
  }
}