'use strict';

let addr

Interceptor.attach(ptr(addr), {
  onEnter(args) {
    args[0] = ptr("1337");
  }
});
