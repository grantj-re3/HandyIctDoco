# Extra info

## Source

- Alex Mux | Go Project: Let's Make a PONG Game in Golang! | 2024
- https://www.youtube.com/watch?v=V_OGeYj6p00
- An excellent introductory video


## My environment

- MX Linux 23.3
- go version go1.23.3 linux/amd64


## Instructions

```
$ cd MYPATH/go_pong					# Use your own project path
$ go mod init github.com/avukadin/go_pong
$ go get github.com/hajimehoshi/ebiten/v2		# Missing from video?
$ go get github.com/hajimehoshi/ebiten/v2/text@v2.8.5	# Missing from video?

$ go run main.go
```

If you get an error similar to:

```
# github.com/hajimehoshi/ebiten/v2/internal/glfw
In file included from .../go/pkg/mod/github.com/hajimehoshi/ebiten/v2@v2.8.5/internal/glfw/native_linbsd.go:14:
./glfw3native_unix.h:105:12: fatal error: X11/Xlib.h: No such file or directory
  105 |   #include <X11/Xlib.h>
      |            ^~~~~~~~~~~~
```

Then you may be missing the Xorg/X11 development library. On MX Linux I installed with:

```
$ sudo apt update
$ sudo apt-get install xorg-dev
```

