How to boot Linux if you cannot boot by the normal method
=========================================================

## Scenario

HP 250 G2 G0R80PA notebook configured for dual boot under UEFI.
- Windows 8.1
- Linux Mint 17

After booting into Windows, "something happened" and now the notebook
will only boot into Windows. I suspect the Linux filesystems are still
intact, but one or more of the UEFI boot files for Linux has been
overwritten by Windows. (I cannot easily verify this because I am not
in the same city/country as the notebook!)

## Solution attempt 1

Attempt to boot all/most EFI files one by one. For me, the steps were:
- Apply power.
- At message "Press ESC key for Startup Menu", press the ESC key.
- Press F9 for "Boot Device Options".
- At the Boot Options screen, select "Boot from EFI file".
- Navigate to and attempt to boot from almost any filename with
  an extension of ".efi". There are often many options so you may
  need to keep a record of those which you have attempted. When you
  find one which boots into Linux ok, remember or record how to
  navigate to it. First try those containing words such as "grub",
  "mint" or "shim" within the filename or a folder name leading to
  the file. Eg.
  * \efi\mint\gcdx64.efi
  * \efi\mint\grubx64.efi
  * \efi\mint\shim.efi
  * \efi\microsoft\boot\grub\bootmgfw.efi

## Solution attempt 2

If a UEFI boot file for Linux still exists, I suspect we may still be able to
boot into Linux using [Super GRUB2 Disk](http://www.supergrubdisk.org/super-grub2-disk/)

The web site says:

> Super GRUB2 Disk helps you to boot into most any Operating System (OS)
> even if you cannot boot into it by normal means.

### Download and burn ISO image to CDROM or DVD

- Do not click on the wrong download button! Click "Download" menu (near
  top, on the menu line starting with "Donate"), then "Super Grub2 Disk"
  submenu. Then you should arrive at
  [Super Grub2 Disk 2.02s4 downloads](http://www.supergrubdisk.org/category/download/supergrub2diskdownload/super-grub2-disk-stable/)
  or similar version.
- Download from the section which says *Recommended download (Floppy, CD &
  USB in one) (Valid for i386, x86_64, and x86_64-efi)*. At the time of
  writing this was *Super Grub2 Disk (CD & USB in one) 2.02s4 (ISO)[Mirror #1]*
- Burn the ISO to a CDROM or DVD. Either:
  * Use your favourite Linux app such as wodim/cdrecord (or growisofs).
  * Use your favourite Windows app.
- You can also try your luck "burning" the ISO image to a USB flash drive
  but although the resulting flash drive was able to boot to the
  Super GRUB2 Disk itself, grub2 was unable to successfully boot into
  Linux (because the hard drive which was previously hd0 was moved to
  hd1 and the USB drive became hd0). Under Windows 8 I downloaded and
  used [Rufus](https://rufus.akeo.ie/) 2.11 to "burn" the ISO image to DVD.
  ***WARNING***: Burning/copying an ISO image to a USB drive will
  overwrite (ie. delete) all data previously stored on the USB drive!

### Use the Super GRUB2 CDROM (or DVD)

- Insert the CDROM into your CDROM/DVD optical drive.
  Since you generally need to do this with power applied your options include:
  * Hit the Escape or Delete (or other) key before booting to stop the boot
    process; then insert disk; or
  * Insert disk quickly before booting; or
  * Boot into your (Windows) operating system; then insert disk
- Get the computer to boot from UEFI/EFI CDROM device. This may involve an
  additional reboot (using Windows restart or BIOS Ctrl-Alt-Del) after the
  previous step. It may also involve entering the BIOS and configuring the
  boot order. For me the steps were:
  * Apply power.
  * Press ESC at the message "Press ESC key for Startup Menu". You probably
    only have a second or two so be prepared!
  * Press F9 for "Boot Device Options".
  * At the Boot Options screen, select "Optical Disk Drive". Alternatively,
    select "Boot from EFI file" then select ".../CDROM(...)".
  * ...

