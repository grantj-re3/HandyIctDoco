# Dual boot Windows 11 Home and MX Linux 23.3

## Purpose

The aims of this document are:

- so I have a record of what I did so I can repeat it in future
  (if needed)
- so others who have a similar laptop and wish to dual boot
  Windows 11 and Linux can avoid wasting as much time as me!


## Introduction

This is not a step by step guide, as many of the dual boot instructions
are documented elsewhere.  Instead, this document describes gotchas and
decisions made before or during the install / config process.

*I recommend you skim all of the section and sub-section headings before
starting* because some of those areas may not be in chronological order.
*Sorry!*

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
  * DVD drive
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


## 3. Create an MX Linux bootable USB

### 3.1 [Decision] Which media creation tool: Media Creation Tool or Rufus or Ventoy?

I suspect it doesn't really matter which media creation tool you use,
however I decided to use Ventoy because one can boot multiple ISOs
from a single USB memory stick! E.g. I put the Windows 11 ISO plus 3
live Linux distros on the same Ventoy 16GB USB stick.

*For me, the answer is Ventoy.*

The solution:

- Download Ventoy from the recommended link on SourceForge
- Verify it has the correct SHA-256
- Install Ventoy on a USB which is at least 16GB (which is adequate
  for both Windows 11 and MX Linux ISOs below)

References:

- [ventoy.net: longpanda | Start to use Ventoy](https://www.ventoy.net/en/doc_start.html)
- [ventoy.net: longpanda | How to download the binaries](https://www.ventoy.net/en/download.html)
- [Medium: Grepix | Ventoy: Revolutionizing The USB Game — An In-depth Review of a Hidden Gem in Open Source | 2023](https://grepix.medium.com/ventoy-revolutionizing-the-usb-game-an-in-depth-review-of-a-hidden-gem-in-open-source-842eb0ec616)
- [Lifewire: Tim Fisher | 2 Ways to Create a Windows 11 Bootable USB Drive | 2023](https://www.lifewire.com/create-windows-11-bootable-usb-7187331)
- [Dexerto: Sayem Ahmed | How to make a Windows 11 bootable USB: Where to get installation media & more | 2024](https://www.dexerto.com/tech/how-to-make-a-windows-11-bootable-usb-where-to-get-installation-media-more-2085688/)


### 3.2 Get the MX Linux ISO

- Navigate to [MX Linux | Download Links](https://mxlinux.org/download-links/)
- Download MX Linux 23.3 - Xfce
- Verify its checksum
- This ISO is both a live Linux version and installer


### 3.3 Make a bootable USB

- Simply copy the ISO to the Ventoy FAT partition (also used
  to store the Windows installer ISO as described later)
- Both ISOs can be booted from the same Ventoy USB


## 4. Verify that laptop hardware is Linux compatible

The solution:

Boot to a live Linux USB and verify that Linux can talk
to the hardware.

If you cannot boot to the live Linux USB, you may need to
disable Secure Boot in the BIOS or make other BIOS changes
as per *EFI BIOS changes: Preparation for dual booting*
section below.

I did a very quick test of each of the following features:

- wifi
- display 1920x1080 resolution
- display acceleration?: youtube video
- sound: youtube video
- bluetooth:
  * unable to pair with my speakers; didn't investigate at the
    time but suspect the speakers were paired with my phone!
  * paired with my speakers ok after installing MX Linux
- laptop touchpad
- laptop keyboard
- webcam: zoom test meeting (couldn't find cheese or other video recording app)
- microphone: used commands arecord & aplay
- earphone socket
- USB: mouse
- HDMI
- mounted Windows drive C **after** disabing BitLocker and
  preventing Windows from Sleep mode [and Fast Startup]

Aside: As an aid in deciding which Linux distro to install,
I booted into several linux distros and performed the
above tests in each one.

- Linux Mint 21.3 - Cinnamon Edition
- MX Linux 23.3 - Xfce
- MX Linux 23.3 AHS (Advanced Hardware Support) - Xfce


## 5. Windows 11 Home: Preparation for dual booting

Windows 11 Home was already activated once the above configuration
was completed. (I suspect it was activated before Dell shipped it
to me.)


### 5.1 [Gotcha] Applied all outstanding updates

After a couple of hours of applying updates, KB5039302 started updating
the system for a second time, so I cancelled the second occurence. When
I checked updates again, Windows claimed it was up-to-date.


### 5.2 [Info] Checked some system info

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


### 5.3 [Decision] Allow Windows drive C to continue to be encrypted with BitLocker?

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
In particular, I can try to mount drive C via a live Linux USB and
if it is successful/readable then it indicates that the Linux
storage driver knows how to read the storage format (in my case,
Intel Rapid Storage Technology).


### 5.4 [Decision] Allow Windows to sleep?

*For me, the answer is NO.*

It is recommended you do not permit either Windows or Linux to sleep if you
ever intend to mount the other filesystem. Since Windows cannot mount an
ext4 filesystem without third party tools, the problem is most likely to
be corrupting a Windows NTFS partition by mounting it in Linux.

Aside: I understand that allowing Windows *Fast Startup* has a similar
bad impact. However, it appears that my BIOS does not have a *Fast Startup*
setting.

The solution, part A:

- Control Panel > System & Security > Power Options: Choose what the power buttons do
- Change all settings in the *On battery* column to *Shutdown*
- Change all settings in the *Plugged in* column to *Shutdown*
- Save

The solution, part B:

- Control Panel > System & Security > Power Options: Choose what the power buttons do
- Change settings that are currently unavailable
- Uncheck *Sleep: Show in power menu*
- Save


### 5.5 [Decision] Should I allow Windows Fast Startup?

My understanding is that it is possible to allow it, but doing so
creates a risk of corrupting any Windows NTFS partition if you mount
it from Linux. This is similar to the above discussion re
"[Decision] Allow Windows to sleep?"

*For me, the answer is NO.*

The solution, part A:

- Control Panel > System & Security > Power Options: Choose what the power buttons do
- Change settings that are currently unavailable
- Uncheck *Turn on fast startup (recommended)*
- Save

The solution, part B:

See the "[Decision] Should I allow Windows Fast Startup?"
in the *EFI BIOS changes: Preparation for dual booting* section.


### 5.6 [Decision] I have Microsoft 365: 30-day trial; should I subscribe?

*For me, the answer is NO.*

I intend to use LibreOffice while running Linux.


### 5.7 [Decision] I have McAfee+ Premium: 30-day trial; should I subscribe?

*For me, the answer is NO.*

For me, the question boils down to: Is Microsoft Defender (which comes
pre-installed in Windows 11 Home):

- suitable for home use?
- suitable for someone who doesn't plan to use Windows for web
  browsing very often?
- suitable for someone who doesn't plan to visit risky web sites?

From my brief review of articles on the web, opinions vary but it
seems that most believe Microsoft Defender is suitable for home use.

In addition, I found the
[AV-TEST Institute](https://www.av-test.org/en/about-the-institute/)
gave both McAfee Total Protection and Microsoft Defender Antivirus
(Consumer) maximum points of 18/18 in their reviews. [Although
McAfee+ Premium is different from McAfee Total Protection, it could
not have scored higher than 18/18!]

- [AV-TEST Institute | The best Windows antivirus software for home users | 2024](https://www.av-test.org/en/antivirus/home-windows/)
- [AV-TEST Institute | AV-TEST Product Review and Certification Report – Mar-Apr/2024: McAfee Total Protection](https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2024/mcafee-total-protection-1.14--1.16-241211/)
- [AV-TEST Institute | AV-TEST Product Review and Certification Report – Mar-Apr/2024: Microsoft Defender Antivirus (Consumer)](https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2024/microsoft-defender-antivirus-consumer-4.18-241213/)

The solution:

- MS Security would not permit me to enable Real-time protection
  while McAfee was installed.
- Read: [McAfee | How to remove McAfee products from a Windows PC | 2022-2024](https://www.mcafee.com/support/?articleId=TS101331&page=shell&shell=article-view)
- Used *Option 1 — Remove using the standard Windows removal method*.
  That is: Start > Settings > Apps > Installed Apps > McAfee ... > Uninstall
- After reboot (required for uninstall) MS Security had automatically
  enabled Real-time protection and enabled all other features under Virus &
  threat protection settings (except for Controlled Folder Access which
  I will leave disabled).

Aside: [Computerworld: Susan Bradley | Think twice before deploying Windows’ Controlled Folder Access | 2022](https://www.computerworld.com/article/1612084/windows-controlled-folder-access-think-twice-before-deploying.html)


### 5.8 [Decision] Should I keep Dell SupportAssist?

*For me, the interim answer is YES.*

*What is Dell SupportAssist?* My understanding is that it is the
Dell OS Recovery Tool (a Windows 10 and 11 app) and BIOSConnect
(Attached, Hybrid or Embedded) together with a service partition
on the hard drive. These Windows and BIOS tools are capable of
restoring the Windows operating system via the service partition
and/or internet connection.

These tools appear to be a great recovery option for a computer
where the only operating system installed is Windows. The question
is, are they a good option for a computer which dual boots to both
Windows and Linux? The risk is that in the process of recovering
Windows (less important to me) it destroys Linux (which is very
important to me).

My interim decision is to keep Dell SupportAssist and the associated
service partition, BUT:

- remember to disable it in the BIOS if necessary
- prepare a Windows 11 bootable USB and prepare Intel Rapid Storage
  Technology (IRST) Windows drivers so they are available if
  something goes wrong during the dual boot install/config process


Dell SupportAssist references:

- [Dell | How to Create Windows Installation Media for Windows 11, Windows 10 and Windows 8.1 using the Media Creation Tool | 2024](https://www.dell.com/support/kbdoc/en-au/000132439/how-to-create-windows-installation-media-for-windows-8-1-and-windows-10-using-the-media-creation-tool?lang=en)
  * Note: Dell Technologies recommends using the Dell OS Recovery Tool to download the OEM version of Windows that was shipped with your device. Dell provided recovery images for your device contains supported drivers and Dell apps.

- [Dell | Reinstall Windows or Linux using the Dell OS Recovery Image | 2024](https://www.dell.com/support/kbdoc/en-au/000123667/how-to-download-and-use-the-dell-os-recovery-image-in-microsoft-windows)
  * Note: Windows 11 ONLY supports the Automated by SupportAssist option.
  * Note: The Dell operating system recovery image is available for the original operating system that was shipped with the Dell computer.
  * Note: A Windows 11 or Windows 10 device is required to download and install the Dell OS Recovery Tool.

- [Dell | SupportAssist OS Recovery](https://www.dell.com/support/home/en-au/product-support/product/support-assist-os-recovery/docs)
- [Dell | Dell SupportAssist OS Recovery Support Matrix](https://www.dell.com/support/manuals/en-au/support-assist-os-recovery/saosr_sm/introduction?guid=guid-9735e3d7-9e7a-40bc-83c7-c89d7ac1a12c&lang=en-us)
- [Dell | Dell SupportAssist OS Recovery Support Matrix: Supported Inspiron systems](https://www.dell.com/support/manuals/en-au/support-assist-os-recovery/saosr_sm/supported-inspiron-systems?guid=guid-5e61764e-a287-4732-a6dc-1c1d8ca9aecc&lang=en-us)
  * Inspiron 3520 Laptop
    + AVAILABILITY OF SUPPORTASSIST OS RECOVERY ON THE HARD DRIVE = Yes
    + SUPPORTS RESET AND UPDATE FEATURE = Yes
    + SUPPORT FOR BIOSCONNECT = Embedded


## 6. EFI BIOS changes: Preparation for dual booting

### 6.1 [Decision] Should I allow Secure Boot (SB)?

**Short term**

*In the short term, the answer is NO because SB must be disabled during
the Linux install process.*

**Long term**

In the long term, you can choose to enable SB if you run a Linux kernel
which has been signed/certified for Secure Boot.

*In the long term, my decision is to disable Secure Boot. (However
I might investigate the details later then change my mind!)*

The solution:

- Boot/reboot and press F2 to enter the BIOS
- Boot Configuration > Secure Boot > Enable Secure Boot: Off

Aside: I originally disabled the following 3 BIOS settings for the
MX Linux install, but did not keep a record of reference which
recommended it. After the Linux install I enabled them again.

- Security > TPM 2.0 Security > Attestation Enable: On
- Security > TPM 2.0 Security > Key Storage Enable: On
- Security > Absolute: Enable Absolute

References:

- [MX Linux Forum: Fehlix | MX-21 Secure Boot | 2021](https://forum.mxlinux.org/viewtopic.php?t=67022)
- [Debian wiki | Secure Boot | 2015-2024](https://wiki.debian.org/SecureBoot)


### 6.2 [Decision] Should I allow Windows Fast Startup?

*For me, the answer is NO.*

The solution:

My old HP laptop had a Fast Startup setting in the BIOS, however
I cannot find it in the BIOS of this Dell laptop. Hence no BIOS
action is needed.

However, there is a Windows change required as per
"[Decision] Should I allow Windows Fast Startup?" in the
*Windows 11 Home: Preparation for dual booting* section.


### 6.3 [Decision] Should I convert SATA mode from IRST to AHCI?

My laptop BIOS is configured for Intel Rapid Storage Technology (IRST).
My understanding is that the Linux kernel does not have an Intel
Rapid Storage Technology (IRST) driver (which is a deliberate decision).
So I originally assumed that I would need to convert the SATA mode
from IRST to AHCI (Advanced Host Controller Interface).

After reading references 1 and 2 below, my original plan was:

- use existing Windows 11 Home with IRST configured (or if something
  goes wrong and I need to re-install Windows, do so with IRST configured)
- convert SATA mode from IRST to AHCI as per reference 2
- install Linux with AHCI

However, in reference 3, oldfred says that the Linux VMD (Intel Volume
Management Device) driver should work for NVMe drives. While keeping
IRST enabled in the BIOS (and after disabling BitLocker, Windows
sleep mode and Windows fast startup) I ran the MX live Linux USB
and confirmed that I was able to successfully mount drive C read
only (for safety).

```
mount -o ro /dev/nvme0n1p3 /mnt/win11  # As root
```

So (rightly or wrongly) I assumed this meant that MX Linux has
storage drivers which can read an existing partition (Windows 11
drive C, NTFS) even with IRST. Hence, based on oldfred's comment
and the above test, I decided to try my luck installing MX Linux
with IRST configured.

*For me, the answer is NO.*

The solution:

No BIOS, Windows or Linux changes required.

IRST and AHCI references:

1. [Tom's Hardware forum | Windows 11 Installation - AHCI v Intel RST | 2021](https://forums.tomshardware.com/threads/windows-11-installation-ahci-v-intel-rst.3729378/)
   - OP is unable to install Windows 11 Pro when BIOS set to AHCI
   - OP found a [messy] workaround
1. [Intel Community forum | Windows 11 - Changed RST to AHCI | 2023](https://community.intel.com/t5/Rapid-Storage-Technology/Windows-11-Changed-RST-to-AHCI/m-p/1562614#M12704)
   - LeonWaksman provides instructions to change SATA mode from RST to AHCI 
1. [Stack Overflow: Unix & Linux | Intel Rapid Storage alongside with Linux | 2022](https://unix.stackexchange.com/questions/717660/intel-rapid-storage-alongside-with-linux)
   - oldfred says: Linux uses the vmd driver for NVMe drives. I have used NVMe for over a year. My new Dell with Secure Boot on & RAID mode with one drive, just works.


## 7. Create a Windows 11 bootable USB

This was an insurance policy in case something went wrong!
Because my MX Linux install went smoothly and dual boot worked ok,
*I did not actually need to re-install Windows or use the ISO or drivers*.


### 7.1 Where to get the Windows 11 ISO?

The solution:

- Navigate to:
  * [Microsoft | Download Windows 11 | 2023](https://www.microsoft.com/software-download/windows11)
    Current release: Windows 11 2023 Update l Version 23H2
  * Third section: Download Windows 11 Disk Image (ISO) for x64 devices
  * Select download: Windows 11 (multi-edition ISO for x64 devices)
- Expand and read the instructions *Before you begin downloading an ISO*.
  (Actually, I think the instructions in the previous expand-section
  *Before you begin using the media creation tool* are similar but better.)
- Click *Download Now* to download the Windows 11 multi-edition ISO
- After downloading, use PowerShell to verify the SHA-256 hash is correct:
```
    Get-FileHash .\Win11_23H2_English_x64v2.iso
```
- Copy the ISO to the FAT parition of the Ventoy USB (discussed earlier)

Notes:

- I verified that Ventoy booted ok into this Windows 11 install ISO
- I understand that it will install the *correct* version of Windows 11
  (in my case, the Home edition) by detecting the Windows Product Key
  which resides on the motherboard.


### 7.2 Where to get the Windows 11 IRST drivers?

I understand that a Windows 11 install USB will not be capable of
recognising the SSD when the SATA mode is Intel Rapid Storage Technology
unless suitable drivers are made available at install time.

The solution:

- Navigate to:
  * [Dell | Drivers & Downloads](https://www.dell.com/support/home/en-au?app=drivers)
  * Browse all products > Computers > Laptops > Inspiron > 3000 Series > Inspiron 15 3520 > Select this product
  * Find a driver for your Inspiron 15 3520
    + Keyword: -
    + Operating system: Windows 11
    + Download Type: All
    + Category: Storage
    + Show All
    + Intel Rapid Storage Technology | 07 Nov 2023 [Latest]
    + Download
- After downloading, use PowerShell to verify the SHA-256 hash is correct:
```
    Get-FileHash .\Intel-Rapid-Storage-Technology-Driver_38GC0_WIN64_19.5.7.1058_A04_01.EXE
```
- Unzip the IRST driver exe file
- Navigate to the Drivers folder:
  * production > Windows10-x64 > 15063 > Drivers
- Ensure you have the Drivers folder available if a Windows 11
  re-install is needed... perhaps on the Ventoy USB memory stick
  or another USB memory stick
  
Notes:

- I understand that early during the Windows 11 install, the
  installer will be unable to see the SSD. Then you should:
  * insert the USB containing the drivers
  * click *Browse*
  * navigate to Drivers > VMD folder
  * highlight all the driver files in the VMD folder
  * click Next
  * proceed with the Windows install
- I stole the above method from the Dell reference below.

References:

- [Dell: Philip Yip | Creating a Windows Bootable USB on Ubuntu | 2023](https://www.dell.com/community/en/conversations/windows-general-wiki/creating-a-windows-bootable-usb-on-ubuntu/65683fa3913536036a01db7b)
  * This is an excellent article covering all aspects from downloading
    Windows 11 to installing it.
  * The section of interest to us is *Intel Rapid Storage Technology Driver*


## 8. Partition the Solid State Drive (SSD)


### 8.1 [Decision] Plan the partitioning of the SSD

The solution:

Most people will want a partitioning scheme to suit their own
needs. This describes the partition scheme that I want.

**Windows 11:** I want the Windows partition to be as small as
possible while allowing space for:

- Drive C: Paging file (14GB as determined above)
- Drive C: About 15GB free for future use
- Drive D: A separate 20GB FAT32 partition to be shared between
  Windows and Linux. I want this to immediately follow drive C
  so that if I find (in future) that drive C is too small, I can
  delete drive D and use the unallocated space to grow drive C
  by 20GB.

**Linux:**

- Allow for 2 simultaneous Linux operating systems:
  * Initially I plan to install MX Linux 23.3.
  * After a couple of years I am likely to migrate to a newer MX
    Linux or other distro and I wish to do so while MX Linux 23.3
    remains operational. I can use the partition reserved for the
    second Linux OS for this purpose.
  * After a few years of using my second Linux OS, I can use the same
    principle to install my third Linux OS but this time I can delete
    and re-use the oldest OS (which would be MX Linux 23.3) while my
    second Linux OS remains operational.
  * I can repeat the migration of one Linux to the next using this
    principle for the lifetime of the laptop.
  * Allow 80GB for the root partition "/" of each Linux OS.
- Allow 1GB (to include multiple kernels) for *each* Linux EFI system
  partition (ESP) at /boot/efi as per section 2 of
  [this ArchLinux article](https://wiki.archlinux.org/title/EFI_system_partition#Create_the_partition)
- Allow 16GB for a single Linux Swap partition. Share between the 2
  Linux OSes (instead of each OS having its own Linux swap file).
- All the remaining space to be allocated to an ext4 partition,
  /mnt/road; my place for Linux home directories to store data.


**Partition table after Windows 11 pre-install process**

This is my best guess of how the partition table looked (since I didn't
capture an *fdisk -l* copy at the time.

Device         |  Size | Type                         | Comment
---------------|-------|------------------------------|----------------
/dev/nvme0n1p1 |  400M | EFI System                   | Win11 EFI
/dev/nvme0n1p2 |  128M | Microsoft reserved           | -
/dev/nvme0n1p3 | ~930G | Microsoft basic data         | Win11 drive C [NTFS]
/dev/nvme0n1p5 |  1.2G | Windows recovery environment | Win11 recovery partition
/dev/nvme0n1p6 | 19.7G | Windows recovery environment | Win11 recovery partition
/dev/nvme0n1p7 |  1.5G | Windows recovery environment | Win11 recovery partition


**Partition table after applying the above changes**

I have listed the partitions in order of *physical* location (not by partition number).

Device          |   Size | Type                         | Comment
----------------|--------|------------------------------|----------------
/dev/nvme0n1p1  |   400M | EFI System                   | Win11 EFI
/dev/nvme0n1p2  |   128M | Microsoft reserved           | -
/dev/nvme0n1p3  | 112.3G | Microsoft basic data         | Win11 drive C [NTFS]
/dev/nvme0n1p4  |  19.5G | Microsoft basic data         | Win11 drive D [FAT32] (shared between Win & Linux)
             -  |        |                              |
/dev/nvme0n1p8  |  80.1G | Linux filesystem             | / [ext4] (MX Linux 23.3)
/dev/nvme0n1p9  |  1000M | EFI System                   | /boot/efi [vfat] (Linux EFI)
/dev/nvme0n1p10 |  80.1G | Linux filesystem             | Reserved for another Linux: /
/dev/nvme0n1p11 |  1000M | Microsoft basic data         | Reserved for another Linux: /boot/efi
/dev/nvme0n1p12 |    16G | Linux swap                   | Linux swap (shared between all Linux OSes)
/dev/nvme0n1p13 | 621.1G | Linux filesystem             | /mnt/road [ext4] (shared between all Linux OSes)
             -  |        |                              |
/dev/nvme0n1p5  |   1.2G | Windows recovery environment | Win11 recovery partition
/dev/nvme0n1p6  |  19.7G | Windows recovery environment | Win11 recovery partition
/dev/nvme0n1p7  |   1.5G | Windows recovery environment | Win11 recovery partition


...

