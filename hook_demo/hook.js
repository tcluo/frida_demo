'use strict';

rpc.exports = {
	init: function () {
		Interceptor.attach(Module.findExportByName(null, 'open'), {
			onEnter: function (args) {
				var path = Memory.readUtf8String(args[0]);
				console.warn('open("' + path + '")');
			}
		});
	}
};
