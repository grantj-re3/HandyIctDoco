
## Microsoft Windows 8 Product Key

It seems that for EFI BIOS systems, the Microsoft Windows
Product Key can be stored within the EFI BIOS. I guess
this makes re-installing Windows easier in many scenarios.
However I can imagine that it may be inconvenient or
expensive if your system is out of warranty and your EFI
firmware and settings get corrupted resulting in the
loss of your product key.

I have read a number of articles suggesting how you can
extract your product key by installing and running a
particular Windows app. However below are a couple of
methods which I have found work ok ___under certain
conditions___. They involve booting into a Linux
operating system (eg. Ubuntu or Fedora LiveCD) then
mounting the Windows drive-C partition.

___Warning___: The instructions below assume you have a
reasonable knowledge of Linux. They also assume that you
take great care when performing commands as root,
especially the partition commands parted, fdisk and gdisk.

### Look in the paging file

Assuming you have a page file configured, and you have
recently performed some action which required (probably
behind-the-scenes) use of your Windows 8 product key
(eg. Windows 8 activation or perhaps windows updates)
then you may have a copy of the key in your page file.

The steps for me were:
- Boot to your Linux LiveCD

- Become the root user. Eg.
```
# Perhaps this
su -
# or this
sudo su -
```

- Figure out on which partition your Windows drive-C
  resides. Some of the commands which may help you
  identify the partition (eg. which should be NTFS
  and of the size of your drive-C) are:
```
parted -l
fdisk -l
gdisk -l /dev/sda
```

- Mount drive-C. Mine was /dev/sda4 (but yours may be different).
```
mkdir /mnt/win8
mount /dev/sda4 /mnt/win8
```

- Search for the product key within the page file.
```
strings /mnt/win8/pagefile.sys |egrep -A3 "<ProductKey>"
```
The output should look something like this (but with
"YOUR-WINDOWS-PRODUCT-KEY-HERE" replaced with your key).
```
    <ProductKey>
        <Key>YOUR-WINDOWS-PRODUCT-KEY-HERE</Key>
        <WillShowUI>Never</WillShowUI>
    </ProductKey>
```

### Look at the filesystem mid-way through the Windows 8 install

This worked for me while installing from an "HP Windows 8 Single
Language DVD".  The steps for me were:

- Boot the Windows 8 Single Language DVD
  * select language, OS, license and partition scheme
  * wait while Windows 8 is installed from DVD

- Be alert at the __first__ reboot to interrupt/prevent booting
  into Windows (by hitting F9 or ESC).

- Instead, remove the Windows 8 DVD and replace with your
  Linux LiveCD.

- Boot to your Linux LiveCD

- Become the root user. Eg.
```
# Perhaps this
su -
# or this
sudo su -
```

- Figure out on which partition your Windows drive-C
  resides. Some of the commands which may help you
  identify the partition (eg. which should be NTFS
  and of the size of your drive-C) are:
```
parted -l
fdisk -l
gdisk -l /dev/sda
```

- Mount drive-C. Mine was /dev/sda4 (but yours may be different).
```
mkdir /mnt/win8
mount /dev/sda4 /mnt/win8
```

- Search for the product key within unattend.xml.
```
egrep -A3 "<ProductKey>" /mnt/win8/\$WINDOWS.~BT/Sources/Panther/unattend.xml
```
The output should look something like this (but with
"YOUR-WINDOWS-PRODUCT-KEY-HERE" replaced with your key).
```
    <ProductKey>
        <Key>YOUR-WINDOWS-PRODUCT-KEY-HERE</Key>
        <WillShowUI>Never</WillShowUI>
    </ProductKey>
```

