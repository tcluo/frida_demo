import frida
import sys

session = frida.attach("firefox.exe")
script = session.create_script("""
        "use strict";
        const PR_Write = Module.findExportByName("nss3.dll", "PR_Write");

        Interceptor.attach(PR_Write, {
            onEnter: function (args) {
                    let length = args[2].toInt32();
                            let buffer = Memory.readByteArray(args[1], length - 1);
                                    console.log(buffer);
                                        }
                                        });
                                        """)

script.load()
sys.stdin.read()

