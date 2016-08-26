CC = clang

client: client.o
	${CC} $< -O3 -Wall -o $@

hi: hi.o
	${CC} $< -O3 -Wall -o $@

hello: hello.o
	${CC} $< -O3 -Wall -o $@

%.o: %.c
	${CC} -c $< -o $@

.PHONY: all clean
.DEFAULT_GOAL := all

all: client hi hello
clean:
	rm -f *.o
	rm -f client
	rm -f hi
	rm -f hello
