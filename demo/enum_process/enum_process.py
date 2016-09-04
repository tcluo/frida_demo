import frida
rdev = frida.get_usb_device()
processes = rdev.enumerate_processes()
for process in processes:
    print process
