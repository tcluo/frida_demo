'use strict';

let addr

Interceptor.attach(ptr(addr), {
  onEnter(args) {
    send(args[0].toInt32());
  }
});
