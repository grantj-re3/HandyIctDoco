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

I intend to use LibreOffice while running Linux.


### 3.6 [Decision] I have McAfee+ Premium: 30-day trial; should I subscribe?

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


### 3.7 [Decision] Should I keep Dell SupportAssist?

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

*My interim decision is to keep Dell SupportAssist and the associated
service partition, BUT:

- remember to disable it in the BIOS if necessary
- prepare a Windows 11 bootable USB and prepare Intel Rapid Storage
  Technology Windows drivers so it is available if something goes
  wrong during the dual boot install/config process*


Dell SupportAssist references:

- [Dell | How to Create Windows Installation Media for Windows 11, Windows 10 and Windows 8.1 using the Media Creation Tool | 2024](https://www.dell.com/support/kbdoc/en-au/000132439/how-to-create-windows-installation-media-for-windows-8-1-and-windows-10-using-the-media-creation-tool?lang=en)
  * Note: Dell Technologies recommends using the Dell OS Recovery Tool to download the OEM version of Windows that was shipped with your device. Dell provided recovery images for your device contains supported drivers and Dell apps. Learn How to Download and Use the Dell Operating System Recovery Image.

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


## 4. EFI BIOS changes

...
