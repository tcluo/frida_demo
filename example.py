import frida
session = frida.attach("Spotify")
print([x.name for x in session.enumerate_modules()])
