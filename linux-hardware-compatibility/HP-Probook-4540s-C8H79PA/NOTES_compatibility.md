HP Probook 4540s C8H79PA
========================

Linux hardware compatibility
----------------------------

In January 2014 I purchased an HP Probook 4540s model C8H79PA with
Windows 8 (win8).

Before purchasing I found that other models of this notebook were
compatible with SUSE Linux Enterprise Desktop 11, see
http://www8.hp.com/au/en/products/laptops/product-detail.html?oid=5229455#!tab=specs

However I could not find adequate specifications on this machine to
confirm this was so for this model. An HP pre-sales rep was able to
confirm that this model was also compatible with SUSE Linux Enterprise
Desktop 11.

My own test results with Fedora 20 (FC20) Linux Live Desktop 64 bit x86
are very positive and are given below. Also, the output for
lspci and a few other commands are given in this directory for
those who are interested.

FC20 results:
* Graphics card ok
* Touchpad ok
* Monitor ok
* Ethernet ok
* Wifi ok
* Bluetooth untested
* Suspend does not appear to work with FC20 live DVD
* Webcam ok
* Webcam microphone ok
* DVD reading/booting ok
* DVD burning ok
* USB mouse, keyboard ok
* Fingerprint scanner untested

Note:
Dual booting Win8 & FC20 seems much more difficult with UEFI systems (especially if your only
recovery options live on your hard disk rather than external media eg. DVD/USB drive). This
is a challenge I am yet to resolve! I intend to document this later on this site.

