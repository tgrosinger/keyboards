# Pseudacris

A 34-key single-board keyboard created with [Ergogen](https://ergogen.xyz).

This keyboard is materially extremely similar to Chrysemys, with the intention to change the following:

- Change from Kailh Choc Mini to the normal Kailh Choc switches.
  - I have not been happy with how the mini switches feel to type on. They feels as though they are going to bind up too often and especially make chords more difficult.
  - This will reduce manufacturing costs because the extra cutouts needed for the mini switches requires excess milling time.
- Use hotswap sockets for the switches.
- Move the switches closer together, so there is less of a gap between key caps.
- Use an integrated MCU, based on the nRFMicro rather than a nice!nano.

## Building Firmware

The firmware for this keyboard can be found on my [ZMK fork](https://github.com/tgrosinger/zmk/tree/tgrosinger-keyboards/app/boards/arm/pseudacris). Instructions for building can be found in the readme in that directory.

If you would like to build your own key layout for this keyboard, follow the instruction for [Building from `zmk-config` folder](https://zmk.dev/docs/development/build-flash#building-from-zmk-config-folder).
