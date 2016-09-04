import frida
import sys
rdev = frida.get_usb_device()
session = rdev.attach("com.trendmicro.poc.apptamperdetection")
scr = """
Interceptor.attach(Module.findExportByName("liblog.so" , "__android_log_print"), {
    onEnter: function(args) {
        send("__android_log_print(" + "hooked" + ")");
    },
    onLeave:function(retval){

    }
});
"""
script = session.create_script(scr)
def on_message(message ,data):
    print message
script.on("message" , on_message)
script.load()
sys.stdin.read()
