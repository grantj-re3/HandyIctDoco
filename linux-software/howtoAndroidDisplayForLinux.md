How to configure an Android device to be a display for Linux
============================================================

## Objective

## Options considered

## The selected option

The principle when setting up a connection from an Android device to Linux
(or Mac) will be:
- Install and configure a VNC server on the Linux box.
- If required configure the VNC server to share your desktop screen
  (eg. using x11vnc). This step is often not needed as many VNC servers
  seem to do this by default.
- Install an SSH server on the Linux box
- Add a firewall rule on the Linux box to permit incoming *encrypted* traffic
  to SSH (on port 22). Except for testing, you should not require a rule to
  permit incoming *unencrypted* traffic on the VNC server (port 5900).
- Set up an SSH tunnel (to Linux port 5900) on your Android device using
  ConnectBot
- Use androidVNC on your Android device to connect to the Linux VNC server
  through your encrypted SSH tunnel


## Environment

There should be many Linux, Unix and Mac environments where a similar
configuration should work ok. However my environment is given below.


### Linux - VNC server end

- Fedora release 20 (Heisenbug)
  * Linux 3.11.10-301.fc20.x86_64 #1 SMP Thu Dec 5 14:01:17 UTC 2013 x86_64 GNU/Linux
- Xorg:
  * xorg-x11-server-Xorg-1.14.4-5.fc20.x86_64
  * gnome-desktop3-3.10.2-2.fc20.x86_64
- Virtual Network Computing (VNC) server:
  * tigervnc-server-1.3.0-14.fc20.x86_64
- x11vnc - allow VNC connections to real X11 displays
  * x11vnc-0.9.13-11.fc20.x86_64
- SSH server:
  * openssh-server-6.3p1-5.fc20.x86_64

Although my example uses Fedora's default desktop (the unpleasant Gnome 3), the
principle should work fine for all other desktops (eg. Mint's Cinnamon or MATE,
Ubuntu's Unity and Debian's Xfce or Gnome 3).


### Android - VNC client end

Eventually, the Android device is intended to be:
- Onyx BOOX N96 9.7 inch E-Ink Pearl Display Dual Touch E-book Reader
  * Android 4.0
  * Wifi 802.11b/g

However, these instructions were tested with the following environment.

- Samsung GT-S7580L phone
- Android version 4.2.2
- Baseband version S7580LDOUBOA1
- Kernel version 3.4.5-2779701; dpi@SWDB4810 #1; Tue Jan 6 18:43:23 KST 2015
- VNC Viewer for Android (androidVNC) v0.5.0
  * https://play.google.com/store/apps/details?id=android.androidVNC
- ConnectBot (ssh-agent-patch) v1.8.6
  * https://play.google.com/store/apps/details?id=org.connectbot&hl=en


### Linux - VNC client (optional)

You may find it convenient to do some initial testing of the VNC server
configuration by using a Linux/Unix/Mac VNC client instead of the
Android VNC client. I did some basic testing using:

- Linux Mint ...
- openssh client ...
- vncviewer ...


## Assumptions

I assume that your Linux computer has a Local Area Network (LAN) connection
via wifi, ethernet cable, etc to a local network switch or hub. In my
case I was using a laptop connected via wifi to my home ADSL router with
built in ethernet/wifi switch. The Linux computer has IP address 192.168.10.6

I assume that your Android device has a wifi connection to the same
local network switch or hub. I assume that via this wifi or other
connection it also has access to the internet in order to download
apps from Google Play.

I assume that your network switch, hub or other network infrastructure
does not put any firewall between the above Linux and Android devices
on your **local** network.


## Reading material

I read these references:

- https://docs.fedoraproject.org/en-US/Fedora/21/html/System_Administrators_Guide/ch-TigerVNC.html
- https://docs.fedoraproject.org/en-US/Fedora/21/html/System_Administrators_Guide/s6-connecting-vnc-viewer.html
- https://stufs4u.wordpress.com/2014/02/25/install-and-configure-vnc-server-in-fedora-20/
- https://coderwall.com/p/3mpszw/setting-up-a-vnc-server-in-fedora-20
- https://bluehatrecord.wordpress.com/2015/04/27/configuring-the-tigervnc-server-on-fedora-21/
- http://askubuntu.com/questions/361617/does-gnome-fallback-desktop-require-accelerated-graphics-in-13-10


## Instructions

Aside: The instructions below work ok using "vncserver" within the
tigervnc-server package plus "x11vnc". However I realise after the
event that within the tigervnc-server package is also "x0vncserver"
(which connects directly to a real XWindows DISPLAY) so is equivalent
to "vncserver" plus "x11vnc". In retrospect x0vncserver would probably
have been a better choice.

All instructions below are carried out as the root user unless
otherwise specified.

### Install Linux server apps, as root user

Xorg and Gnome3 desktop were already installed with the Fedora 20
Linux operating system so I did not have to install these.

```
$ yum -y install tigervnc-server
$ yum -y install x11vnc
$ yum -y install openssh-server		# Actually, OpenSSH server was also already installed
```

Copy the configuration into the systemd config, update it and start it.

I believe these steps are only needed if you perform the
"Optional intermediate testing" detailed below.

```
# As root user:

# Copy the systemd config to the usable location
$ cp /lib/systemd/system/vncserver@.service /etc/systemd/system/vncserver@.service

# Update user and geometry (substitute your real username for VNC_USER):
# In my scenario, I want VNC_USER to be my own Linux login.
$ vim /etc/systemd/system/vncserver@.service	# Edit the file

$ diff /etc/systemd/system/vncserver@.service /lib/systemd/system/vncserver@.service
40,41c40,41
< ExecStart=/sbin/runuser -l VNC_USER -c "/usr/bin/vncserver %i -geometry 1280x1024"
< PIDFile=/home/VNC_USER/.vnc/%H%i.pid
---
> ExecStart=/sbin/runuser -l <USER> -c "/usr/bin/vncserver %i"
> PIDFile=/home/<USER>/.vnc/%H%i.pid

# [Only required for optional intermediate testing]
# Reload systemd manager config
$ systemctl daemon-reload

# [Only required for optional intermediate testing]
# Start service. Enable start of service at boot time
# Use DISPLAY :1 for VNC as DISPLAY :0 is already used for Gnome 3 Desktop
$ systemctl start vncserver@:1.service	# For DISPLAY :1
$ systemctl enable vncserver@:1.service	# For DISPLAY :1
```

As the VNC user, VNC_USER:

```
# Configure password for the VNC user.
# This creates the file /home/VNC_USER/.vnc/passwd (used later).
$ vncpasswd     # Enter a password for VNC; remember it
```

### Install Android device apps

Use Google Play on your Android device to install the following apps.

- VNC Viewer for Android (androidVNC) v0.5.0
- ConnectBot (ssh-agent-patch) v1.8.6


## Optional intermediate testing of VNC connection

At this point you can test to see if your connection from a VNC client
(ie. vncviewer) on Android or Linux (or Windows) will connect to the
above Linux VNC server. Feel free to skip these tests.

### Linux - VNC server end

My (optional) VNC connection test would not work until I made two changes.

#### I needed to **temporarily** allow the VNC protocol to pass through the firewall

I needed to **temporarily** switch off the firewall to allow for
connections on VNC port 5900 for DISPLAY :0 or 5901 for DISPLAY :1.
I felt safe doing this because:
- my computer is on my home LAN
- my home LAN is already protected by a firewall and WPA2
- I rarely use this computer on any other LAN
- I switched the firewall back on immediately after my testing

Unless similar conditions apply to you, you might feel better adding
a specific firewall rule to allow access to ports 5900 and 5901.
(Read your own firewall doco for details.)

I did:

```
$ systemctl stop firewalld	# Switch off firewall for testing
$ systemctl start firewalld	# After testing, immediately switch back on
```


#### I needed to fix the VNC xstartup script

Starting the VNC service above creates the script /home/VNC_USER/.vnc/xstartup.
It relies on twm (not initially installed on my system) and did not
work for me using Fedora 20. The symptom at the vncviewer was a black
screen (with a dot for a mouse pointer). Instead I copied a Gnome-3-Desktop
friendly script from the link below.

```
#!/bin/sh
# See http://askubuntu.com/questions/361617/does-gnome-fallback-desktop-require-accelerated-graphics-in-13-10

export XKL_XMODMAP_DISABLE=1
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS

gnome-panel &
gnome-settings-daemon &
metacity &
nautilus &
gnome-terminal &
```

### Android - VNC client end

You should now be able to connect to the VNC server using your
VNC client (ie. vncviewer) on the same local network.

For the configuration and assumptions given above, connect to:
- VNC server IP address of 192.168.10.6 
- VNC XWindows DISPLAY of :1
- Enter your VNC password (as configured above with the
  "vncpasswd" command)

The equivalent command on a remote Linux computer would be:

```
$ vncviewer 192.168.10.6:1
```

With the server /home/VNC_USER/.vnc/xstartup script above, this
will *not* display the (Gnome 3) desktop of the person logged
into the server (on DISPLAY :0), but instead it will display
a special screen containing gnome-terminal (ie. an xterm),
the nautilus file manager and a few other windows.


## Configure an encrypted VNC connection to the VNC server's desktop

The above connection is not encrypted so may be unsuitable
for use at work, at school/university, internet cafe or
even someone else's home LAN. We will address this issue
by running the VNC network protocol through an SSH Tunnel.

Also it does not achieve our initial objective - it does not
allow vncviewer to connect to the VNC server's desktop (which
in my case is the Gnome 3 desktop). We will address this
issue by using the server-side application, x11vnc.

### Firewall

If you switched off your firewall for optional intermediate testing
above, then switch it back on now. You need to read your firewall
documentation to know how to do this on your system. For me the 
command was:

```
$ systemctl start firewalld
```

You will need a firewall rule on your VNC server to allow incoming
SSH connections from a remote client (an Android device in my case).
I didn't need to configure one as it was already present. You need
to read your firewall documentation to know how to do this on your
system.

I tested this by using an SSH client on a different Linux system
(Mint) and making a network connection to the VNC server Linux system.
The test command was:

```
# VNC server's IP address is 192.168.10.6 
# VNC server's user is VNC_USER
ssh VNC_USER@192.168.10.6
```

You should also use the ConnectBot SSH client (installed earlier)
on your Android device to perform an equivalent test.

## Configure connection to the VNC server's desktop

We are going to use x11vnc (installed earlier) on the VNC server to
connect to DISPLAY :0 (ie. the VNC server's desktop).

On the VNC server as user VNC_USER, create the file
/home/VNC_USER/bin/x11vnc_start.sh having the contents:

```
#!/bin/sh
# x11vnc_start.sh
#
# Expected usage is to:
# - allow VNC connection to a real X11 display
# - allow remote (possibly Android) VNC client to encrypt network
#   traffic via ssh-tunnel
#
# For example, at VNC client end:
#  1/ Android app "ConnectBot (ssh-agent)"
#     ssh -t -L 5900:localhost:5900 VNC_USER@192.168.10.6 x11vnc_start.sh
#  2/ Android app "Android-VNC"
#     vncviewer localhost:0  # On port 5900
##############################################################################
PATH=/bin:/usr/bin:/usr/local/bin; export PATH

# x11vnc - allow VNC connections to real X11 displays
x11vnc -localhost -display :0 -rfbauth ~/.vnc/passwd
```

Make the script executable:

```
$ chmod 755 /home/VNC_USER/bin/x11vnc_start.sh
```

I tested this initially using a different Linux system (Mint) as below:

```
# In xterm 1 on VNC client device:
$ ssh -t -L 5900:localhost:5900 VNC_USER@192.168.10.6 ~/bin/x11vnc_start.sh
# or the command:
# $ ssh -t -L 5900:localhost:5900 VNC_USER@192.168.10.6 'x11vnc -localhost -display :0 -rfbauth ~/.vnc/passwd'

# In xterm 2 on VNC client device:
$ vncviewer localhost:0
```

Where:
- "-L 5900:localhost:5900" means packets which enter port 5900 at the SSH
  client-side will be sent to "localhost:5900" at the SSH server-side
- "VNC_USER@192.168.10.6" is the user and server IP address of the SSH
  server-side
- "~/bin/x11vnc_start.sh" or "'x11vnc -localhost -display :0 -rfbauth ~/.vnc/passwd'"
  is the command to be executed at the SSH server-side after successful
  SSH connection. This starts the XWindows VNC service for DISPLAY :0.
- "vncviewer localhost:0" says to start the VNC client and connect to
  localhost DISPLAY :0 (on default port 5900). So in effect:
  * after the SSH connection is established, the x11vnc app is 
    started (with appropriate parameters)
  * vncviewer connects to localhost port 5900 on the client-side
  * any TCP/IP packets enter the SSH tunnel at port 5900 and are
    encrypted
  * the same packets pop-out of the tunnel of the VNC server-side at
    IP address 192.168.10.6 now decrypted (ie. plain VNC protocol)
  * on the server-side, those packets are sent to "localhost:5900"
    where they arrive at the x11vnc app (which will allow them
    to talk to the VNC server DISPLAY :0).

Note:
- When the SSH command is run, the default behaviour is to prompt
  for the Linux password of user, VNC_USER. You should be able to
  bypass manual entry of the Linux password by setting up SSH
  key-based authentication.
- When vncviewer is run, the app will prompt for your VNC
  password (as configured above with the "vncpasswd" command) -
  not your Linux password.
- When vncviewer disconnects from the x11vnc app, the x11vnc stops. Hence
  you cannot make another connection until you start x11vnc again.
  When connecting from your Android device, it might be easier
  to restart the SSH tunnel to restart x11vnc.

Repeat the equivalent steps on your Android device. It will be much
easier if you have written the script x11vnc_start.sh so you do
not have to type all those x11vnc parameters on your Android
device.

Celebrate!

## Conclusion

Now you should be able to use VNC to allow your Android device to
remotely control your desktop on your VNC server.

But in my case, I wish to have a slightly different scenario. I
want to use the Android device only as a display/monitor sitting
right next to the VNC server computer, and I want to use the
keyboard and mouse of the VNC server computer as usual. This
works fine for me too. The only quirk I've noticed is that
auto-repeat on the keyboard (eg. repetition of say letter "x"
when I hold down the "x" key) no longer works. I haven't
investigated this yet.

---

# But wait, there's more...

## Linux Mint 17.3 differences

You should be able to achieve a similar result to above by using other
Linux distros. I have also used Linux Mint 17.3 with Cinnamon desktop.
I highlight the main differences below.

Mint 17 comes pre-installed with Desktop Sharing. Desktop Sharing
uses the Vino VNC server which is very similar to Tiger VNC
described above in the Fedora Linux section. The main difference
is that by default it shares the desktop (what a surprise for
a Desktop Sharing service) on DISPLAY :0 rather than sharing
a logical XWindows display as configured by a custom script
(xstartup) on DISPLAY :1. Hence Vino VNC server on Mint 17 is equivalent to
Tiger VNC server plus the x11vnc app on Fedora 20.

### Mint VNC references:
- http://ask.xmodulo.com/enable-configure-desktop-sharing-linux-mint-cinnamon-desktop.html

### High-level instructions

You need to install the dconf Editor to enable and configure
Vino VNC server.

As root, install the dconf Editor
```
$ apt-get install dconf-editor
```

Start the dconf Editor as the user who will share the desktop (not root)
```
$ dconf-editor
```

Navigate to org > gnome > desktop > remote-access then configue Vino VNC.
When you click on a setting, a description appears in the bottom pane.
The important settings are:
- set authentication-methods to 'vnc'
- check: enabled
- check: notify-on-connect (if this is what you want)
- check: prompt-enabled (if this is what you want)
- un-check: require-encryption (as we will use an SSH tunnel for encryption)
- set a vnc-password (using base64 encoding as described below)
- The VNC server at the Linux end needs to listen on port 5900. Vino VNC does
  this by default. You can achieve this by either:
  * setting alternative-port to 5900; checking use-alternative-port, or
  * unchecking: use-alternative-port

The VNC password entered into the dconf Editor above must be base64 encoded.
This should not be the same as your Linux shell login password. Use the
command described below to produce the encoded password then paste it into
the vnc-password field above.

```
$ echo 'Your_VNC_password' | base64
```

Vino VNC server should now be running. You should be able to see it in
your process list with command:

```
ps auxww |egrep vino
```


### Optional intermediate testing of VNC connection

If you want to make a test connection to Vino VNC server from a vncviewer
you will need to either add a firewall rule or **temporarily** switch off
your firewall. I chose to do the latter (but see my notes re safety under
"Optional intermediate testing of VNC connection" in the first/Fedora
instructions above).

```
# As root
$ ufw status		# Check if firewall rules are enabled/disabled
$ ufw disable		# Disable firewall rules

# Later
$ ufw enable		# Enable firewall rules immediately after you have finished testing
```

Test the (unencrypted) VNC connection from either an Android or Linux VNC
client. The equivalent command on a remote Linux computer would be:

```
$ vncviewer 192.168.10.6:0		# DISPLAY :0
# or the command:
$ vncviewer 192.168.10.6::5900		# Port 5900 (for DISPLAY :0)
```


### Configure an encrypted VNC connection to the VNC server's desktop

On the Linux Mint computer, install sshd.
```
# As root
$ apt-get install openssh-server
```

On the Linux Mint computer, add a firewall rule for sshd (after reinstating firewall rules).
```
# As root
$ ufw enable		# Re-enable firewall rules (after testing above)
$ ufw allow 22/tcp	# Add a rule to allow connection to the Linux SSH service
```

Connect from your Android (or other Linux) client. The equivalent
Linux commands are:
```
# In xterm 1 on VNC client device:
$ ssh -t -L 5900:localhost:5900 VNC_USER@192.168.10.6  # No need to run a remote x11vnc command

# In xterm 2 on VNC client device:
$ vncviewer localhost:0			# DISPLAY :0 on localhost
# or the command:
$ vncviewer localhost::5900		# Port 5900 (for DISPLAY :0) on localhost
```

Celebrate!

---

# But wait, there's even more...

## Will this idea work on a Mac?

I don't own or have access to a Mac, but I'm pretty sure the answer is yes.
Below I give a few clues regarding ideas which I think are most likely to
work.  **But** this is all **second hand information** based on unofficial
opinions on the internet (no first hand experience here).

## Introduction

What are the possibilities for Mac OS X VNC-like server apps?

1. Apparently Mac OS X comes preinstalled with a Screen Sharing server
   (and client) app based on VNC. My impression is that it has some
   additional authentication features which makes it incompatible or
   unreliable with some/most "ordinary" (non-Mac) VNC clients.

2. Apparently Mac OS X 10.7 (Lion) comes preinstalled with a "normal" VNC
   server app (but it is nicely hidden away in a location which is not
   obvious to many users). My impression is that this server is compatible
   with many ordinary VNC clients. The question (for me) is: Does Mac OS X
   10.10 (Yosemite) and 10.11 (El Capitan) also have this preinstalled VNC
   server?

3. Install your own open-source VNC server app.

4. Install your own commercial VNC-like server app.


## Potential solution: Preinstalled general VNC server

The instructions at the link below are five years old (2011) and written
for a general VNC Server using Mac OS X 10.7 (Lion). However, I feel
this might be a good option if still available in Mac OS X 10.10 or
10.11.

The principle I would try when setting up the connection from an Android
device would be similar to that described for Mint 17 above. That is:
- Enable the general VNC server on the Mac
- Install an SSH server on the Mac
- Add a firewall rule on the Mac to permit incoming connections to SSH
  (on port 22).
- Set up an SSH tunnel (to Mac port 5900) on your Android device using
  ConnectBot
- Use androidVNC on your Android device to connect to the Mac VNC server
  through your encrypted SSH tunnel

References:
https://www.dssw.co.uk/blog/2011-08-03-setting-up-the-vnc-server-in-mac-os-x-10-7-aka-lion/


## Potential solution: Use RealVNC viewer to connect to Mac Screen Sharing

The section "Connecting to a Mac from a Windows PC" in the article
referenced below describes how to use a free MS Windows client called
RealVNC viewer to connect to a Mac with Screen Sharing enabled. The client
is freely supplied by a commercial company (RealVNC Limited). They also
supply a free Android client. I feel this has a good chance of working.

The main problem with these instructions is that I don't know
what encryption (if any) is being used because they chose the encryption
option "Let the VNC server choose". However we might be able to force
an encryption method in which case things should work without an SSH
tunnel. Alternatively, if we are still unsure if the traffic is encrypted
or not, perhaps we could just force the protocol through
an SSH tunnel anyway (even if it is already encrypted).

http://www.howtogeek.com/214220/how-to-access-your-macs-screen-from-windows-and-vice-versa/


## Potential solution: Use Mocha Lite viewer to connect to Mac Screen Sharing

The article below says that the Mocha Lite android app will connect to
Mac Desktop Sharing. Mocha Lite is an Android VNC viewer supplied by a
commercial company (MochaSoft Communication). It is not free but it is
cheap (US$5.55). I feel this has a good chance of working.

I have the same concerns and potential solution regarding traffic
encryption as for the RealVNC viewer app above.

http://www.hongkiat.com/blog/remote-access-mac-from-ios-android-tablets/
https://play.google.com/store/apps/details?id=dk.mochsoft.vncpaid&hl=en


### Practical Mocha Lite solution under Mac OS X 10.10 (Yosemite)

I have been informed that the following Mocha Lite solution works ok,
however unless the Mac Desktop Sharing is providing encryption this
configuration is **not encrypting network traffic** between the
Android device and the Mac. I understand the e-ink ereader (Onyx BOOX
N96) refresh rate makes it unacceptable for many use cases but adequate
for writing software (eg. using R) for this user who has a dry eye
medical condition with normal LCD screens. Some of the comments are:
- It still does freeze sometimes, but it's very easy to reconnect.
- Seems laggy
- I'm now reasonably happy with it (and it's better than the AndroidVNC
  because it's portrait not landscape, which is easier to fit coding
  windows into)

Here are the instructions:

Go to the Mac System Preferences:
- Go to Sharing, make sure Screen Sharing is on.
  You can set the VNC password under "Computer Settings".
- Make sure remote login is on.
- Make sure your user is added to those who can have access.

Mocha Lite settings:
- Port should be 5900.
- Tick the "Mac OS X User" sign in (but that's probably optional).
- Type the VNC server password previously set in Mac Computer Settings.
- Typed in the username and password of the Mac user.


## Potential solution: Jump Desktop (RDP/VNC)

Jump Desktop (by PhaseFive Systems LLC) is
a commercial option and one of the more expensive solutions.
However, you do get a free trial period for the Mac server end.
The same organisation has written both the server and client so I
would expect good compatibility. I understand an SSH tunnel is not
needed because the protocol has its own encryption.

I suspect this has a good chance of working well. At the time of
writing (June 2016) the Android app has 4.6 (of 5) stars based on
2,664 reviews so it appears to be popular and well received.
However some of the recent reviews in March-May 2016 say that
the most recent update (to 7.0?) has broken previously working
connectivity.

Instead of VNC-server + VNC-client + SSH tunnel, use:
- Jump Desktop for Mac (RDP / VNC) $29.99 AUD [Free trial]
- Jump Desktop (RDP & VNC) $9.99 USD

References:
- https://community.spiceworks.com/topic/603622-how-to-vnc-over-ssh-from-win7-to-os-x-mavericks
- https://jumpdesktop.com/
- https://sites.fastspring.com/jumpdesktop/instant/jumpdesktopmac
- https://play.google.com/store/apps/details?id=com.p5sys.android.jump


## Potential solution: x11vnc for Mac OS X plus some "normal" VNC server

x11vnc (used in the Fedora 20 instructions above) is also available for
Mac OS X. So the challenge here would be to find a good VNC server to
run on the Mac. At the Android end you could use ConnectBot and androidVNC
as previously described.

References:
http://www.karlrunge.com/x11vnc/
http://www.karlrunge.com/x11vnc/faq.html#faq-macosx

