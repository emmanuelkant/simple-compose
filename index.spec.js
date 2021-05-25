const { compose } = require('./');

describe('Simple Compose tests', () => {
  it('should always return a function', () => {
    const result = compose();
    expect(typeof result).toBe('function');
  });

  it('should throw any error if you pass some param that is not a function', () => {
    expect(function() {compose({ name: 'foo' })}).toThrow('One of the params of compose is not a function');
  });

  it('should return undefined on the second call if any params was given', () => {
    const result = compose()();
    expect(result).toBe(undefined);
  });

  it('should execute the received functions', () => {
    let num = 1;
  
    function fn1() {
      num = num + 1;
    }
  
    compose(fn1)();
    expect(num).toBe(2);
  });

  it('should receive and execute as many function as the user wants', () => {
    let num = 1;
  
    function fn1() {
      num = num + 1;
    }

    function fn2() {
      num = num + 1;
    }

    function fn3() {
      num = num + 1;
    }
  
    compose(fn1, fn2, fn3)();
    expect(num).toBe(4);
  });

  it('should execute the last function first, and the first as last', () => {
    let pharse = 'Start with one';
  
    function fn1() {
      pharse = pharse + ' then four.';
    }

    function fn2() {
      pharse = pharse + ' then three';
    }

    function fn3() {
      pharse = pharse + ' then two';
    }
  
    compose(fn1, fn2, fn3)();
    expect(pharse).toBe('Start with one then two then three then four.');
  });

  it('should return what the user want', () => {
    function fn1() {
      return 'foo';
    }

    const result = compose(fn1)();
    expect(result).toBe('foo');
  });

  it('should pass the return to the next function as argument', () => {
    function fn1(param) {
      return param + ' foo';
    }

    function fn2() {
      return 'bar';
    }

    const result = compose(fn1, fn2)();
    expect(result).toBe('bar foo');
  });
  
  it('should accept params on when executed, these params will be passed to the first function', () => {
    function fn1(param) {
      return param + ' Duarte';
    }

    function fn2(str1) {
      return str1;
    }

    const result = compose(fn1, fn2)('Emmanuel Kant');
    expect(result).toBe('Emmanuel Kant Duarte');
  });

  it('should receive only one param in all functions except the on the first one', () => {
    function fn1(param, otherParam) {
      return param + ' Duarte ' + otherParam;
    }

    function fn2(str1, str2) {
      return str1 + str2;
    }

    const result = compose(fn1, fn2)('My name', ' is Emmanuel Kant');
    expect(result).toBe('My name is Emmanuel Kant Duarte undefined');
  });
})