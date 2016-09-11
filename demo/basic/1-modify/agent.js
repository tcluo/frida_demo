'use strict';

Interceptor.attach(Module.findExportByName(null, "f"), {
  onEnter(args) {
    args[0] = ptr("1337");
  }
});
