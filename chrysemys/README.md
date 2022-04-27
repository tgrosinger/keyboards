# Chrysemys

A 34-key single-board keyboard created with [Ergogen](https://ergogen.xyz).

## Design Goals

- Bluetooth connectivity.
- Single board, with an outward rotation between the two halves for ergonomic comfort.
- Using the ZMK firmware, as it has the best bluetooth support at the moment.
- A focus on keeping the entire keyboard as thin as possible.

## Bill of Materials

- 36 [Kailh Low-Profile Mini Choc Switches (CPG1232)](https://www.aliexpress.com/item/4000277394324.html)
  - Note: These are the "mini" swtiches, which are not compatible with the normal Choc layout.
- 1 package [Kailh Low-Profile Keycaps](https://www.aliexpress.com/item/32979973961.html)
  - Alternatively, the [MBK Choc Keycaps](https://mkultra.click/mbk-choc-keycaps)
- 1 Pro-Micro compatible microcontroller. I recommend one with Bluetooth and an integrated battery charger, such as the [nice!nano](https://nicekeyboards.com/nice-nano/).
- 1 surface mount SPDT sliding switch for the power switch. [LCSC #C128955](https://lcsc.com/product-detail/Slide-Switches_Korean-Hroparts-Elec-K3-1296S-E1_C128955.html) fits the footprint. Alternatively, you can jump the pins on the board and depend on the software standby features.
- 1 surface mount button for the reset switch. [LCSC #C2888943](https://lcsc.com/product-detail/Tactile-Switches_BZCN-TSA010A2010A02_C2888943.html) fits the footprint. This part is optional. You can also jump the reset pin on the MCU with tweezers or bind to a key in QMK.
- 1 301230 LiPo battery such as [this one](https://keyhive.xyz/shop/nicenano)
- Adhesive rubber dome feet

## Center Cover

Work in progress

## Inspiration

### GergoPlex

The [GergoPlex](https://www.gboards.ca/product/gergoplex) is a 36 key keyboard which I purchased as a partialy assembled board. The key layout is excellent, however the thumb keys are slightly too far in towards the hands, and the split design results in my keyboard halves wandering away from me, or hard to use on uneven surfaces. I worked around some of these problems by creating a board in which the two halves are nestled in just the right orientation, however that does not help the thumb key issue.

### Hummingbird

The [Hummingbird layout](https://github.com/PJE66/hummingbird), and [Rufous, the Ergogen recreation](https://github.com/jcmkk3/trochilidae/tree/main/rufous) have been a big help in getting me started with Ergogen and building the layout I'm looking for.

## Credits

### Footprints

- Several footprints used in this project were borrowed from [jcmkk3's Trochildae collection](https://github.com/jcmkk3/trochilidae/tree/main/trochilidae.pretty)
