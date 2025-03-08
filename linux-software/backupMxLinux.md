# MX Linux backup

Consider:

- Use MX Snapshot to backup system (and optionally home) to an ISO
- Use MX Live USB Maker to install the ISO on a USB stick for recovery purposes
- Use Luckybackup or tar/dar to backup information on other partitions/disks
- [MX Linux Forum | Can I use snapshots as a backup? | 2019](https://forum.mxlinux.org/viewtopic.php?t=49790) -- Paul says:
  * I use a separate partition... for Data and back that up using LuckyBackup
  * The installation on my main nvme drive, I backup with Snapshot
    + I exclude all the /home folders since I consider anything in those folders as not important
    + Anything important related to documents, etc., I store on the separate Data partition


## Tutorials

1. [Dedoimedo | MX Snapshot - Superb system imaging and backup tool | 2023](https://www.dedoimedo.com/computers/mx-snapshot.html) -- how to use MX Snapshot + MX Live USB Maker
1. [Robin's Rants and Raves | MX Tools, Backup, and Systemback | 2018](https://technophobeconfessions.wordpress.com/2018/05/06/mx-tools-backup-and-systemback/) -- how to use Luckybackup + MX Live USB Maker

1. [The Linux Cast | Create Your Own ISO With MX Linux (video) | 2021](https://www.youtube.com/watch?v=ABi4ZnP8zPE) -- how to use MX Snapshot
1. [runwiththedolphin | MX-16 - Make a snapshot of an installed system (video) | 2016](https://www.youtube.com/watch?v=ExVkxXcVDAw) -- how to use MX Snapshot + MX Live USB Maker


## Documentation

1. MX Linux GitHub repository
   - https://github.com/MX-Linux/mx-snapshot
   - https://github.com/MX-Linux/mx-live-usb-maker

1. MX Linux site
   - https://mxlinux.org/manuals/
   - https://mxlinux.org/wiki/help-files/help-mx-save-system-to-iso-snapshot/
   - https://mxlinux.org/wiki/help-files/help-mx-live-usb-maker/
   - https://mxlinux.org/wiki/applications/luckybackup/
   - https://mxlinux.org/wiki/applications/timeshift/

1. DAR: Disk ARchive
   - http://dar.linux.free.fr/doc/presentation.html
   - http://dar.linux.free.fr/doc/Tutorial.html
   - http://dar.linux.free.fr/doc/usage_notes.html


## When to backup?

1. [Lenovo | What is backup? | How often should I back up my data? | 2025](https://www.lenovo.com/us/en/glossary/backup/)
1. [Reader's Digest: Jeff Bogle | This Is How Often You Need to Back up Your Computer | 2021](https://www.rd.com/article/how-often-back-up-computer/)
1. Before applying significant or large-scale updates (e.g. [iOS](https://discussions.apple.com/thread/254516885?sortBy=rank) or [windows](https://askleo.com/back-up-my-computer-before-an-operating-system-upgrade/)
   - [FOSS Linux: Nitish S. | Updating MX Linux: Command-line & All You Need to Know | 2020](https://www.fosslinux.com/35838/updating-mx-linux-command-line-all-you-need-to-know.htm)

