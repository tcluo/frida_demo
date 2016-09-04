'use strict';

const co = require('co');
const frida = require('frida');
const load = require('frida-load');

let session, script;
co(function *() {
	session = yield frida.attach('hello');
	const source = yield load(
			require.resolve('./agent.js'));
	script = yield session.createScript(source);
	script.events.listen('message', message => {
		console.log(message);
	});
	yield script.load();
});
Address of f() goes here
'use strict';

Interceptor.attach(ptr('0x106a81ec0'), {
	onEnter(args) {
		send(args[0].toInt32());
	}
});
