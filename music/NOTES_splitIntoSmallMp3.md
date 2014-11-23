How to divide one large MP3 file into smaller MP3 files/tracks
==============================================================

This method uses Audacity running under Linux (Fedora 20) but the gist
should be similar for Audacity running under Windows or Mac OS X.

Note: I'm a newbie when it comes to Audacity, so you will not find any
advanced Audacity info in this document!

## Download Audacity
Under Fedora 20, get Audacity (eg. version 2.0.6-1) and documentation
via the yum package manager.

```
yum -y install audacity audacity-manual
```

This package was not compiled with support with MP3 import, but MP3
export works fine. Under Fedora you will probably need to compile from
source if you need MP3-import (or use Lame as I have done below). I 
magine many other Linux distros will support MP3-import.

## Convert your source MP3 file to WAV

You can always attempt to load your source MP3 into Audacity to see if
it is supported. Otherwise, lame can convert your MP3 file to WAV format.
Install with:

```
yum -y install lame
```

Now convert your MP3 file to WAV using lame (eg. version 3.99.5-2)
and your favourite set of switches if you don't like the defaults.

```
lame --decode SRC_FILE.mp3 DEST_FILE.wav
```

## Audacity
123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789

### Load your source file into Audacity
- Start Audacity via your OS menu or from the command line.
- Load your SRC_FILE.mp3 or DEST_FILE.wav file. If this is your original
  file and you don't have a backup you should load a copy so changes
  are not written back to your original file. (Of course, if it is
  valuable then I'm sure you've already copied a __backup__ to a
  separate disk or device.) Navigate to:
    File > Open > Make a copy of the files before editing (safer) > OK
- At regular intervals during the steps below, save your work as
  a project with something like:
    File > Save project > FILE.aup > Save

### Perform any processing common to all output tracks

My source file was a recording of an amateur concert. The recording levels
were too low (as I was unfamiliar with the digital recorder being used).
I wanted to amplify the whole recording before dividing it into tracks. I
followed these steps.

- Select the whole recording with Cntl-A or Edit > Select > All.
- Amplify the selection as given below. If the amplification will
  introduce clipping (distortion due to exceeding the maximum digital
  level), the OK button will be disabled unless you check the "Allow
  clipping" option. This may be acceptable to you if, for example,
  the distortion is only introduced during applause and the applause
  will be removed from all the tracks. To amplify by 15dB, use:
    Effect > Amplify > Amplification (dB): 15 > Check "Allow clipping" if applicable > OK
- If you are not happy with the result, then undo (with Edit > Undo
  Amplify or Cntl-Z) then repeat with a different amplification.
- Save the project (using instructions above) when you are happy
  with the result.

### Useful navigation tips
- Ensure the Selection Tool ("I" icon) is enabled.
- When zooming in/out:
  * Your mouse pointer must be placed over the waveform
  * Zoom by holding the Cntl key and moving the mouse scroll-wheel
  * The zoom will be centered about your mouse pointer (not your cursor
    within the waveform)
  * You might like to click near the spot where you are zooming-in
    (so if you lose your spot it is easy to find by zooming out)
- When zoomed-in, you can move left and right along the waveform
  (ie. backward and forward in time) by placing your mouse pointer over
  the horizontal slider and using the scroll-wheel.
- Cursor position:
  * You can place your cursor at a particular horizontal spot (ie.
    point in time ) by clicking on the waveform.
  * You can move the cursor by using the left/right arrow keys on
    your keyboard. The amount moved is smaller if you are zoomed-in
    and larger if zoomed-out.

### Select and save an individual MP3 file/track

Using the above navigation tips do the following.
- Mark the beginning of your track by:
  * Positioning the cursor at the desired position
  * Clicking Cntl-I (or navigating to Edit > Clip Boundaries > Split)
- Mark the end of your track in the same manner
- Select the region by double-clicking between the 2 markers
- If required, zoom out to confirm the selection is as expected
- Save the selection as an MP3 file with: File > Export Selected Audio >
  MP3 Files > Click Options if required > YOUR_TRACK_FILENAME.mp3 >
  Save > Edit metadata if required > OK
- If desired, remove markers by clicking on each one
- Repeat these steps for each file/track

