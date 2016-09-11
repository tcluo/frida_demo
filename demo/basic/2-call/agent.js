'use strict';

let addr

const f = new NativeFunction(
    ptr(addr), 'void', ['int']);
f(1911);
f(1911);
f(1911);
