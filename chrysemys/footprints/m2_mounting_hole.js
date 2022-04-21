module.exports = {
    body: p => `
    (module M2MountingHole
        (layer "F.Cu")

        ${p.at /* parametric position */}

        (fp_text reference "HOLE1" (at 0 -3.2 22) (layer "F.SilkS") hide
            (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "Val**" (at 0 0) (layer "F.SilkS") hide
            (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_circle (center 0 0) (end 2 0) (layer "F.CrtYd") (width 0.05) (fill none))
        (pad "1" thru_hole circle (at 0 0 22) (size 3.6 3.6) (drill 2.2) (layers *.Cu *.Mask))
    )
    `
}
