"use strict";

/* Check if a Java/Dalvik/ART VM is available */
if (Java.available) {
	/* enumerate loaded classes */
	Java.enumerateLoadedClasses({
		/* when a class is found send it to the client */
		onMatch: function(className) {
			send(className);
		},
		/* when we are done enumerating classes send "done" to the client */
		onComplete: function() {
			send("done");
		}
	});
	/* if a Java/Dalvik/ART VM is not available */
} else {
	send("Java not available in this process");
}
