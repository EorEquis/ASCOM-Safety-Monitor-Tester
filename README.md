# Safety Monitor Tester

A simple little ASCOM Safety Monitor that only looks for the presence of a text file to determine Safe or Unsafe.

It currently does not work with NINA 3.  I'll get around to writing a proper ASCOM server version some day.

---

## Purpose

The driver's general purpose is to allow testing of various sequencing or imaging applications, to see how they will respond in safe or unsafe conditions.

E.G. Perhaps you have created a new N.I.N.A. sequence, using new loops or plugins to manage how the sequence acts when conditions become unsafe.  You'd like to test the sequence, to make sure things happen when and as they should.  This driver will allow for that.

## Usage

Install the driver, select it in your client's Safety Monitor chooser, and open the driver's settings.

It takes a single argument : File Path.  It will expect to find (or not) a file named isSafe (no extension) in that folder.  If it finds it, it returns Safe, if it doesn't, it returns Unsafe.  That simple.

## Considerations

This could, in theory, be used as a "real" safety monitor, if you wanted to create some service or script to create and/or delete the isSafe file from the target folder.  There are, however, certainly easier ways to go about such things.
