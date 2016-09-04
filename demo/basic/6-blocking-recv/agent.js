'use strict';

let addr

Interceptor.attach(ptr(addr), {
  onEnter(args) {
    send({ number: args[0].toInt32() });
    const op = recv(reply => {
      args[0] = ptr(reply.number);
    });
    op.wait();
  }
});
