var sendMessage = ObjC.classes.MessageViewController["- sendMessageWithText:"];

Interceptor.attach(sendMessage.implementation, {
  onEnter: function(args) {
    // args[0] is self
    // args[1] is selector (SEL "sendMessageWithText:")
    // args[2] holds the first function argument, an NSString
    var message = ObjC.Object(args[2]);
    console.log("\n[MessageViewController sendMessageWithText:@\""
        + message.toString() + "\"]");
  }
});
