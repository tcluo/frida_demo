import frida
session = frida.attach("cat")
#print([x.name for x in session.enumerate_modules()])
#print(session.enumerate_modules())
#print(session.enumerate_ranges('rw-'))
print session.read_bytes(4468781056, 10).encode("hex")
#print session.write_bytes(4468781056, "frida")
