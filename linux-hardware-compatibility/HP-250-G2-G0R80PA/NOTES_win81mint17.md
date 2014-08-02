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

My rough steps were:

1. Register Win8.1 with Microsoft as per the wizard
2. Verify that your new laptop works ok under Win8.1
3. Verify that laptop is compatible with Linux by booting to various
   LiveDVDs and testing the operation of the display, keyboard,
   touchpad, ethernet, wifi, webcam, USB mouse, USB storage, etc.
4. Configure UEFI firmware/BIOS (see below)
5. Disable Windows 8.1 Fast Boot as per http://www.typicaltips.com/2013/02/disable-fast-startup-in-windows-8.html
6. Perform backups of the Windows 8.1 operating system (but since I didn't use them I cannot vouch for their usefulness)
   * Created a USB bootable Windows 8.x recovery disk
   * Created a Windows 8.x system image
7. Shrink the Windows 8.1 partition
8. Install Linux Mint 17 (see below)
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

I want to shrink the Windows 8.1 drive-C partition to be about 100GB and
allocate the space which has been freed up to Linux. Windows will permit
shrinking of drive-C but only seems to allow it to become about half the
size (ie. 220GB) without going to a lot of effort. Hence I used the
gparted tool on the Linux Mint 17 LiveDVD to do this.

The disk drive on this notebook was nominally 500GB.
Before shrinking, the partition table looked something like this.

Partition | Filesystem | Size       | Type                 | Comment
----------|------------|------------|----------------------|---------
/dev/sda1 | NTFS       | 400MB      | Recovery Partition   |
/dev/sda2 | FAT        | 260MB      | EFI System Partition | ESP
/dev/sda3 | Unknown    | 128MB      | -                    | Flags: msftres (I didn't notice this partition in Win8.1)
/dev/sda4 | NTFS       | 446GB      | Windows 8.1 (C:)     | 
/dev/sda5 | NTFS       | 18GB       | OEM Partition (D:)   | Recovery

I used the recommended "Align to" setting for modern operating systems of "MiB".
Everything else in using the gparted tool looked fairly straight forward.

Although not relevant for this scenario (where the Windows 8.x
operating system is pre-installed on a UEFI system) one of the gparted
features which I needed to set on a previous occasion (when installing
both Windows 8.x and Linux) was that "Partition table" must be set for
"gpt". I'm not certain where this setting was but I suspect it was under:

  Device > Create Partition Table

After successfully shrinking, gparted showed that /dev/sda4 was 100GB
and about 346GB was unallocated. (Also, booting into Windows confirmed
that Windows was still working ok.)


## Install Linux Mint 17

I referenced
http://www.linuxbsdos.com/2014/06/11/how-to-dual-boot-linux-mint-17-and-windows-8-on-a-pc-with-uefi-firmware/
to install Linux Mint 17.

### Partitioning

When creating my custom partition table (ie. Installation Type of
"Something Else") I chose the following arrangement of the
unallocated space (created in the shrink step above).

Partition | Filesystem | Mount point | Size       | Comment
----------|------------|-------------|------------|---------
/dev/sda6 | Ext4       | /           | 50GB       | Allow space to upgrade to a future/larger Linux
/dev/sda7 | Ext4       | /mnt/road   | 314GB      | A place for home directories to store data
/dev/sda8 | Swap       | -           | 9GB        | Larger than twice my RAM size

These partition sizes and mount points are mostly personal preference
(provided you include the mandatory / partition and exceed the minimum
size required). Most people will prefer to create a /home partition
rather than /mnt/road above (or even omit a /home partition completely).

Here is the reasoning behind my Linux partitioning. (Skip this if you
already know your requirements.)

- The notebook has 4GB of RAM. Perhaps in future I will upgrade to 8GB.
  I would like to store all of RAM in the swap area in such a future
  scenario. Hence I configured swap size to be larger than:
    1024 x 1024 x 1024 x 8 = approx 8,600,000,000
- For a home system or notebook, I don't want lots of partitions which
  limit how many files I can store on /var, /tmp, /usr, etc. Hence I
  follow the fairly common convention for home systems of having:
  * the mandatory / partition
  * another partition for storage under home directories
- I like to have plenty of room on my / partition to install future
  software and upgrade linux by (perhaps) reinstalling a future
  version of linux which is likely to be larger than my current
  Linux OS. In addition, my / partition will contain home directories
  (ie. /home) hence probably all of the default storage used by some
  applications (eg. thumbnails and web browser cache). Therefore I
  want more space than discussed in the article and have chosen
  50GB.
- Many people like to configure their personal system with a
  /home partition. I suspect the main reasons are:
  * growth in disk space used in home directories cannot affect
    the operation of the whole operating system when the
    /home partition gets full
  * when you update from one Linux operating sytem to the next
    you can delete/replace (almost) everything under the root
    filesystem / but still keep all the users' home directories.

  However I've had trouble with the second of these ideas in the
  past. In particular, when I've had several Linux operating
  systems which share /home/myhomedir I've found that different
  versions of applications (or perhaps different configurations
  of the same application versions) use the same files/directories
  in different ways. This might apply to say Gnome desktop
  (~/.cache, ~/.config, ~/.local) or Firefox (~/.mozilla) or Gimp
  (~/.gimp-X.Y) or other apps. Instead, I use a slightly
  different principle which achieves a similar result (but does
  not fully and formally address bullet one (growth in /home).
  Here is an example.

  We have 3 users with home directories under /home.
```
ls -l /home
drwx------. 19 user1     user1     4096 Jun  8 15:44 user1
drwx------. 19 user2     user2     4096 Jun  8 15:44 user2
drwx------. 19 user3     user3     4096 Jun  8 15:44 user3
```

We have a partition /mnt/road. As root, we create within it similar
looking directories and permissions.
```
sudo su -
cd /mnt/road
mkdir user1 user2 user3
chmod 700 user1 user2 user3
chown user1: user1
chown user2: user2
chown user3: user3

ls -l
drwx------.  2 root      root     16384 Mar 16 21:17 lost+found
drwx------. 19 user1     user1     4096 Jun  8 15:44 user1
drwx------. 19 user2     user2     4096 Jun  8 15:44 user2
drwx------. 19 user3     user3     4096 Jun  8 15:44 user3
```

Create a symlink in each user's home directory which points to this new
space.
```
su - user1			# Become user; land in home dir
ln -s /mnt/road/user1 myhome	# Link to private storage
control-D			# Go back to root user

su - user2			# Become user; land in home dir
ln -s /mnt/road/user2 myhome	# Link to private storage
control-D			# Go back to root user

su - user3			# Become user; land in home dir
ln -s /mnt/road/user3 myhome	# Link to private storage
control-D			# Go back to root user

```

Now each user has a place to store their files directly
under their home directory. These directory trees will remain
in place even if you re-install the Linux / partition.
Linux apps can still store their configs, cache,
data, etc (eg. ~/.mozilla) in /home (which is part of the
/ partition). However note that if you install a new
Linux under / these files and configs will be deleted
(so you will need to backup anything important).

### Grub boot loader

The other important thing to do is ensure that grub2 and linux EFI
files are installed into the EFI System Partition (ESP). The Windows
Boot Manager and Windows 8.1 EFI files already exist on this
partition. ***(This is not necessarily the ideal option because
updates or upgrades to Windows might adversely affect your
ability to boot to both Windows and Linux!)***

Do this by setting "Device for boot loader installation" to /dev/sda2
(or whatever partition your pre-installed EFI System Partiton lives on).

