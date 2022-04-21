module.exports = {
    nets: {
        neg: undefined,
        pos: undefined,
    },
    body: p => `
    (module BatteryPads
        (layer "F.Cu")

        ${p.at /* parametric position */}

        ${'' /* TODO: Does not yet support rotation */}


        (fp_text reference "BT1" (at 0 0.5) (layer "F.SilkS") hide (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "Battery_Cell" (at 0 -0.5) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "Battery_Cell" (at 0 -0.5) (layer "B.Fab") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
        (fp_text user "BT01" (at 0 0.5) (layer "B.SilkS") hide (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
        (fp_text user "Battery" (at 3.175 0.79375 90) (layer "F.SilkS") hide (effects (font (size 0.8 0.8) (thickness 0.1))))
        (fp_text user "Battery" (at 3.175 0.79375 90) (layer "B.SilkS") hide (effects (font (size 0.8 0.8) (thickness 0.1)) (justify mirror)))
        (fp_text user "(+)" (at -1.1 -2.286) (layer "F.SilkS") (effects (font (size 0.8 0.8) (thickness 0.1))))
        (fp_text user "(+)" (at -1.1 -2.286) (layer "B.SilkS") (effects (font (size 0.8 0.8) (thickness 0.1)) (justify mirror)))
        (fp_text user "(-)" (at 1.1 -2.286) (layer "F.SilkS") (effects (font (size 0.8 0.8) (thickness 0.1))))
        (fp_text user "(-)" (at 1.1 -2.286) (layer "B.SilkS") (effects (font (size 0.8 0.8) (thickness 0.1)) (justify mirror)))

        (fp_poly (pts
            (xy 0.4 -1)
            (xy 0.4 1)
            (xy 1.8 1)
            (xy 1.8 -1)
            ) (layer "B.Mask") (width 0.1) (fill solid))
        (fp_poly (pts
            (xy -1.8 -1)
            (xy -1.8 1)
            (xy -0.4 1)
            (xy -0.4 -1)
            ) (layer "B.Mask") (width 0.1) (fill solid))
        (fp_poly (pts
            (xy -0.401442 -1)
            (xy -0.401442 1)
            (xy -1.801442 1)
            (xy -1.801442 -1)
            ) (layer "F.Mask") (width 0.1) (fill solid))
        (fp_poly (pts
            (xy 1.8 -1)
            (xy 1.8 1)
            (xy 0.4 1)
            (xy 0.4 -1)
            ) (layer "F.Mask") (width 0.1) (fill solid))

        (pad "1" thru_hole circle (at -1.1004 -1.3416) (size 0.4572 0.4572) (drill 0.3048) (layers *.Cu) ${p.net.pos.str})
        (pad "1" smd custom (at -1.1 0 180) (size 1.5 2.1) (layers "F.Cu")
            (options (clearance outline) (anchor rect))
            (primitives
            (gr_poly (pts
                (xy 0.179 1.3352)
                (xy -0.1766 1.3352)
                (xy -0.1766 0.762)
                (xy 0.179 0.762)
                ) (width 0.1) (fill yes))
            ))
        (pad "1" smd custom (at -1.1 0) (size 1.5 2.1) (layers "B.Cu")
            (options (clearance outline) (anchor rect))
            (primitives
            (gr_poly (pts
                (xy 0.176556 -0.7618)
                (xy -0.179044 -0.7618)
                (xy -0.179044 -1.335)
                (xy 0.176556 -1.335)
                ) (width 0.1) (fill yes))
            ))
        (pad "2" thru_hole circle (at 1.1 -1.3416) (size 0.4572 0.4572) (drill 0.3048) (layers *.Cu) ${p.net.neg.str})
        (pad "2" smd custom (at 1.1 0 180) (size 1.5 2.1) (layers "F.Cu")
            (options (clearance outline) (anchor rect))
            (primitives
            (gr_poly (pts
                (xy 0.1786 1.3352)
                (xy -0.177 1.3352)
                (xy -0.177 0.762)
                (xy 0.1786 0.762)
                ) (width 0.1) (fill yes))
            ))
        (pad "2" smd custom (at 1.1 0) (size 1.5 2.1) (layers "B.Cu")
            (options (clearance outline) (anchor rect))
            (primitives
            (gr_poly (pts
                (xy 0.1766 -0.7618)
                (xy -0.179 -0.7618)
                (xy -0.179 -1.335)
                (xy 0.1766 -1.335)
                ) (width 0.1) (fill yes))
            ))
    )
    `
}
