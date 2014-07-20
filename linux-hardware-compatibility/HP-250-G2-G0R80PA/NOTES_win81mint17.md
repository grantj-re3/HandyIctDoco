HP 250 G2 G0R80PA notebook
==========================

**Work in progress...**

# Dual boot Windows 8.1 and Linux Mint 17 under UEFI

## Introduction

My environment was as follows.
- I was installing to an HP 250 G2 G0R80PA notebook
- I did not re-install Windows but left the pre-installed Windows 8.1
  operating system in place
- I used a Linux Mint 17 (http://www.linuxmint.com/) Cinnamon 64bit
  LiveDVD/install disk downloaded from my local mirror site

The instructions assume:
- you are familiar with Linux
- you will take great care when partitioning, formatting and installing
  (as these tasks typically delete whole operating systems including
  programs and data from the hard disk)

Of course, I built on the info provided by others. My rough steps were:

1. Register Win8.1 with Microsoft as per the wizard
2. Verify that your new laptop works ok under Win8.1
3. Verify that laptop is compatible with Linux by booting to various
   LiveDVDs and testing the operation of the display, keyboard, mouse,
   touchpad, ethernet, wifi, USB storage, webcam, etc.
4. Configure UEFI firmware/BIOS
5. Disable Windows 8.1 Fast Boot
6. Perform backups of the Windows 8.1 operating system
7. Shrink the Windows 8.1 partition
8. Install Linux Mint 17 as per
   http://www.linuxbsdos.com/2014/06/11/how-to-dual-boot-linux-mint-17-and-windows-8-on-a-pc-with-uefi-firmware/
9. Configure UEFI so that the notebook boots into grub by default as per
   http://www.coreyford.name/2013/10/05/linuxmint-uefi.html

## Configure UEFI firmware

I chose to disable Secure Boot and enable CSM (Compatibility Support
Module) in the firmware as I had success with this method in the past
(on another HP UEFI notebook with Windows 8 and Fedora 20). However,
the result is that Windows (and Linux) will boot into an "insecure"
mode and Windows 8.1 clearly displays its dislike of such behaviour
by showing a warning on your desktop! :(

Configure by:
- Hitting the F10 key several times early in the notebook boot
  process (ie. shortly after applying power) to enter the UEFI
  firmware configuration menu
- Navigate to ...
- Change *Legacy Support* (ie. CSM) option to *Enable*. As a
  result you should see the *Secure Boot* option change to
  *Disable*


## Shrink the Windows partition

Use gparted on Linux Mint 17 LiveDVD...

