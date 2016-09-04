#! /bin/sh

DYLD_INSERT_LIBRARIES=/Users/tcluo/WorkSpace/frida_demo/lib/osx/FridaGadget.dylib \
FRIDA_GADGET_SCRIPT=/Users/tcluo/WorkSpace/frida_demo/hook_demo/hook.js \
cat /etc/hosts
