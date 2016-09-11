'use strict';

let addr

const f = new NativeFunction(
    Module.findExportByName(null, "f"), 'void', ['int']);
f(1911);
f(1911);
f(1911);
