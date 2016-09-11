from __future__ import print_function
import frida
import sys

session = frida.attach("client")
script = session.create_script("""
send("Allocating memory and writing bytes...");
var st = Memory.alloc(16);
Memory.writeByteArray(st,[0x02, 0x00, 0x13, 0x89, 0x7F, 0x00, 0x00, 0x01, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30]);
Interceptor.attach(Module.findExportByName(null, "connect"), {
    onEnter: function(args) {
        send("Injecting malicious byte array:");
        args[1] = st;
    }
    //, onLeave: function(retval) {
    //   retval.replace(0); // Use this to manipulate the return value
    //}
});
""")

# Here's some message handling..
# [ It's a little bit more meaningful to read as output :-D
#   Errors get [!] and messages get [i] prefixes. ]
def on_message(message, data):
    if message['type'] == 'error':
        print("[!] " + message['stack'])
    elif message['type'] == 'send':
        print("[i] " + message['payload'])
    else:
        print(message)
script.on('message', on_message)
script.load()
sys.stdin.read()
