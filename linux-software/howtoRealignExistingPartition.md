How to realign/resize an existing partition in linux
====================================================

## Objective

We have a multi-boot PC with a 2TB hard disk containing 13 partitions
sdc1 to sdc13.  We wanted to install Linux Mint 17.2 from a LiveCD onto
a spare partition sdc9.

During the installation (after partitioning and before installing
packages) the installer issued a warning to the effect that partition 9
does not start on physical sector boundary and that this may result in
Linux having poor performance.

It was important that all of the other partitions (both above and below
sdc9) remain unaffected as many of them are used for other Linux operating
systems - as the "/" mount point or some other mount point for /home,
shared data or backups.

So I stopped performing the installation in order to resolve this issue.
(Some people claim this is unneccessary as the performance impact is not
noticable.)

The objectives were to:
- have no affect on partitions sdc1-sdc8 and sdc10-sdc13
- realign the start block of sdc9 so that it starts on a
  physical sector boundary


## Warning

The use of fdisk, gparted and LiveCD disk partitioning and formatting
tools will not only cause the loss of all files and information on
the intended target partition, but the incorrect use may also cause
**loss of all files and information on all or some other partitions or
some other disks**. Hence:
- make backups of important files and information
- do not perform an action which you do not understand
- use with extreme care

## Solution using gparted

All commands below are assumed to be run as the root user on a
LiveCD (in my case Linux Mint 17.2 LiveCD).
```
# Boot to the LiveCD. Start a terminal/xterm.
# Become the root user.
sudo su -
```

### Preparation

- Make a backup of of your partition table as below.
```
fdisk -l > fdisk_Myhost_YYYYMMDDa.txt  # Where YYYYMMDD is the date
```
- Save the backup to a USB drive or via a network to another machine.
- Consider printing the partition table backup.

My output looked like this.
```
Disk /dev/sdc: 2000.4 GB, 2000398934016 bytes
255 heads, 63 sectors/track, 243201 cylinders, total 3907029168 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disk identifier: 0x000a2010

   Device Boot      Start         End      Blocks   Id  System
/dev/sdc1             ...
...
/dev/sdc8       454719888   554740514    50010313+  83  Linux
/dev/sdc9       554740578   654761204    50010313+  83  Linux
Partition 9 does not start on physical sector boundary.
/dev/sdc10      654761268  1283930864   314584798+   8  AIX
...
/dev/sdc13     2542270248  3907024064   682376908+  83  Linux
```

### Using gparted

Note 1: Typically gparted allows you to configure an operation and inspect
the result before doing (applying) it.

Note 2: After applying an operation, it appears that gparted changes the
selected partition from the one being processed to the last one. **This
might have disasterous consequences if you do not notice and apply an
operation to the wrong partition.**

- Start gparted from the menu or command line
```
# In my case, the target partition was on physical disk /dev/sdc.
# You should use your own device, /dev/sdX (where X= a or b or c or...
gparted /dev/sdc &
```
- Click on the target partition row (in my case /dev/sdc9) to select it.
- Right click the row then select properties and confirm that the Start
  and End block numbers agree with those shown in your fdisk backup.
  (E.g., in my case Start = 554740578 and End = 654761204)
  This confirms that you have selected the correct partition.
- If your target partition is not already formatted, you will not be able
  to resize it. In this case:
  * Right click the row then select Format
  * Choose "ext4"
  * Format to ext4 is now a pending operation for the target partition.
    Perform the format by clicking Edit > Apply All Operations. **This
    step will delete everything on your target partition.** (This took
    15 seconds or so on my PC.)
- The Resize/Move should now be enabled. Re-align/resize your target
  partition as follows.
  * If required, click on the target partition row again (as a
    different partition may now be selected following the "Apply
    All Operations" step above.
  * If required, re-confirm that the Start and End block numbers agree
    with those shown in your fdisk backup.
  * Right click the row then select Resize/Move
    - Free space preceding (MiB): 1 [not 0]
    - New size (MiB): Leave as default [in my case approx 50GB]
    - Free space following (MiB): 0
    - Align to: MiB [not Cylinder]
    - Click the Resize/Move button
    - Examining properties should show that the start block number is
      now a little larger than before (and the end block number is now
      probably a little smaller than before). This shows that the
      resized partition fits into the space occupied by the old
      partition.
    - Resize/Move is now a pending operation for the target partition.
      Perform the resize by clicking Edit > Apply All Operations.
      (This took 15 minutes or so on my PC.)

### Checking

- Make another copy of of your partition table as below.
```
fdisk -l > fdisk_Myhost_YYYYMMDDb.txt  # Where YYYYMMDD is the date
```

...

## Alternative solution using fdisk

## Unsuccessful attempt using LiveCD

## Unsuccessful attempt using fdisk

