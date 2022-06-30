module.exports = {
    nets: {
        from: undefined,
        to: undefined,
    },
    body: p => `
    (module TwoLeadButton
        (layer "F.Cu")

        ${p.at /* parametric position */}

        (fp_text reference "B1" (at 0 0 unlocked) (layer "F.SilkS") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "Button" (at 0 2.54 unlocked) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "Button" (at 0 0 unlocked) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (pad "1" smd roundrect (at -2.2 0) (size 1 2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) ${p.net.from.str})
        (pad "2" smd roundrect (at 2.2 0) (size 1 2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) ${p.net.to.str})
    )
    `
}
