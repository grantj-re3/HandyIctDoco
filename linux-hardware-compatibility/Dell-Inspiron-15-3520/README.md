# Dual boot Windows 11 Home and MX Linux 23.3

## Introduction

This is not a step by step guide, as many of the dual boot instructions
are documented elsewhere.  Instead, this document describes gotchas and
decisions made before or during the install / config process.

I purchased a Dell Inspiron 15, 3520. It has the following features:

- i7-1255U CPU
- Intel Iris Xe Graphics
- 16GB RAM
- 1TB, M.2 PCIe NVMe, SSD
- 15.6" FHD display
- Windows 11 Home pre-installed, with:
  * McAfee+ Premium: 30-day trial
  * Microsoft 365: 30-day trial
- Does **not** include:
  * RJ45 ethernet port
  * USB-C port
  * Touch screen
  * Finger print reader
  * Backlit [keyboard]
  * Operating System media

I wanted to install MX Linux 23.3 Libretto. (I have not used MX Linux
before.) This guide shows roughly the way it did it.


## Questions and gotchas

Many of the decisions below are personal preferences, so I recommend you
investigate yourself and make your own decisions. However, if you decide
to copy mine then you might need to know what sort of computer user I am.

- Linux is my main OS. I can go for 6 or 12 months without booting into
  Windows. (I am not a Windows user who is just experimenting with Linux.)

- I am comfortable installing Windows [although a little rusty] and Linux
  so don't feel the need to solely rely on manufacturer's auto-repair tools,
  etc. I am certainly *not* a Windows expert, but I am pretty familiar with
  Linux.

- I value privacy. I want to give the least amount to info to the least
  number of organisations as possible. So I wish to avoid signing up
  for accounts that I don't need or want.

If your background is different to mine, then you might make different choices.


## 1. Dell boot-time function keys

- F2: BIOS Setup
- F12: Boot Menu


## 2. Pre-installed Windows 11 Home: Configuration

### 2.1 [Decision] Do you want to create a Microsoft account?

*For me, the answer is NO.*

During the configuration of the pre-installed Windows 11 Home, I was prompted to
*Sign in with your Microsoft account and create the experience you want...*.
However, I am not interested in any of the features or products which they list.

The problem is that the only options were to either sign in or to create an account.

The solution:

- I followed the info [here](https://www.tomshardware.com/how-to/install-windows-11-without-microsoft-account)
- [Gotcha] I don't have an ethernet port, and I had already entered my wifi
  credentials, so I needed to switch off my home wifi router where the
  instructions say to "cut off the Internet". (I needed to do this at
  a time which didn't disrupt others in my household.)
- [Gotcha] Shift + F10 (2 simultaneous keys) did not work for me. Because
  my laptop keyboard has two operations assigned to each function key, I
  used shift + fn + F10 (3 simultaneous keys).


## 3. Windows 11 Home: Preparation for dual booting

Windows 11 Home was already activated once the above configuration
was completed. (I suspect it was activated before Dell shipped it
to me.)


### 3.1 [Gotcha] Applied all outstanding updates

After a couple of hours of applying updates, KB5039302 started updating
the system for a second time, so I cancelled the second occurence. When
I checked updates again, Windows claimed it was up-to-date.


### 3.2 [Info] Checked some system info

Paste the following info somewhere for future reference.

- System > About > Device specifications
- System > About > Windows specifications
- Virtual memory (paging file) size: System > About >
  Advanced System Settings > Advanced tab > Performance Settings >
  Advanced tab > Total paging file size: 14GB

- Product Key
```
wmic path softwarelicensingservice get OA3xOriginalProductKey
```

- Service Tag
```
wmic bios get serialnumber
```


### 3.3 [Decision] Allow Windows drive C to continue to be encrypted with BitLocker?

What does full disk encryption (such as BitLocker) do?

- If your laptop is lost or stolen, and if a person who has possession
  of your laptop does not know your login and cannot discover your login
  by "brute force" then that person will be unable to read (decrypt)
  the information on your laptop.

What does full disk encryption **not** do?

- It does not prevent someone from reading the content of your disk if
  they can login with your password... or if you were already logged in
  when your laptop was stolen.
- It does not prevent remote access to your files via internet
  vulnerabilities, scams, phishing, etc.

Disadvantages of full disk encryption

- If you lose your key, then you lose access to your disk and *all* of its
  content. [If you backup your key, do you trust the location, organisation,
  etc. where your backup is stored?]
- Encrypting disk writes and decrypting disk reads reduces the 
  performance of your storage devices. [This article](https://www.easeus.com/computer-instruction/does-bitlocker-slow-down-ssd.html)
  claims that BitLocker can slow down your SSD by up to 45%.

So the question boils down to:
- Is the information on the encrypted drive valuable enough to
  encrypt?
- Am I comfortable with the risks regarding possible loss of my
  encryption key?
- Is my laptop "likely" to be stolen?  E.g. Do I take it to work,
  school, university everyday or is it always left in a secure home?

*For me, the answers are NO, NO and NO.*

The solution:

- Remove BitLocker encryption from drive C as described in [this article](https://www.asus.com/au/support/faq/1047461/)

Aside: This also has an advantage that I can perform a test later.
In particular, I can try to mount drive C via a Linux live-USB and
if it is successful/readable then it indicates that the Linux
storage driver knows how to read the storage format (in my case,
Intel Rapid Storage Technology).


### 3.4 [Decision] Allow Windows to sleep?

*For me, the answer is NO.*

It is recommended you do not permit either Windows or Linux to sleep if you
ever intend to mount the other filesystem. Since Windows cannot mount an
ext4 filesystem without third party tools, the problem is most likely to
be corrupting a Windows NTFS partition by mounting it in Linux.

Aside: I understand that allowing Windows *Fast Startup* has a similar
bad impact. However, it appears that my BIOS does not have a *Fast Startup*
setting.

The solution:

- Control Panel > Power Options > Choose what the power buttons do
- Change all settings in the *On battery* column to *Shutdown*
- Change all settings in the *Plugged in* column to *Shutdown*
- Uncheck *Sleep: Show in power menu*


### 3.5 [Decision] I have Microsoft 365: 30-day trial; should I subscribe?

*For me, the answer is NO.*


### 3.6 [Decision] I have McAfee+ Premium: 30-day trial; should I subscribe?

*For me, the answer is NO.*

...

