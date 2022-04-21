// Kailh Choc PG1232
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible 
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint

module.exports = {
    nets: {
      from: undefined,
      to: undefined
    },
    params: {
      class: 'S',
		  side: 'F',
      keycaps: false
    },
    body: p => {
	    const standard = `
        (module lib:Kailh_PG1232 (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value Kailh_PG1232 (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* corner marks */}
        (fp_line (start -7.25 -6.75) (end -6.25 -6.75) (layer Dwgs.User) (width 0.15))
        (fp_line (start -7.25 -6.75) (end -7.25 -5.75) (layer Dwgs.User) (width 0.15))

        (fp_line (start -7.25 6.75) (end -6.25 6.75) (layer Dwgs.User) (width 0.15))
        (fp_line (start -7.25 6.75) (end -7.25 5.75) (layer Dwgs.User) (width 0.15))

        (fp_line (start 7.25 -6.75) (end 6.25 -6.75) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7.25 -6.75) (end 7.25 -5.75) (layer Dwgs.User) (width 0.15))

        (fp_line (start 7.25 6.75) (end 6.25 6.75) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7.25 6.75) (end 7.25 5.75) (layer Dwgs.User) (width 0.15))

        ${''/* diode box marker */}        	 
        (fp_line (start 2.8 -5.35) (end -2.8 -5.35) (layer Dwgs.User) (width 0.15))
        (fp_line (start -2.8 -3.2) (end 2.8 -3.2) (layer Dwgs.User) (width 0.15))
        (fp_line (start 2.8 -3.2) (end 2.8 -5.35) (layer Dwgs.User) (width 0.15))
        (fp_line (start -2.8 -3.2) (end -2.8 -5.35) (layer Dwgs.User) (width 0.15))

        ${''/* diode direction marker */}        	 
        (fp_line (start 0.35 -4.3) (end 0.35 -3.75) (layer "F.SilkS") (width 0.1))
        (fp_line (start -0.25 -3.9) (end -0.25 -4.7) (layer "F.SilkS") (width 0.1))
        (fp_line (start -0.25 -4.3) (end -0.75 -4.3) (layer "F.SilkS") (width 0.1))
        (fp_line (start 0.35 -4.3) (end 0.35 -4.85) (layer "F.SilkS") (width 0.1))
        (fp_line (start 0.75 -4.3) (end 0.35 -4.3) (layer "F.SilkS") (width 0.1))
        (fp_line (start 0.35 -4.3) (end -0.25 -3.9) (layer "F.SilkS") (width 0.1))
        (fp_line (start -0.25 -4.7) (end 0.35 -4.3) (layer "F.SilkS") (width 0.1))

        
        ${''/* middle shaft */}        	 
        (fp_line (start 2.25 2.6) (end 5.8 2.6) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -2.25 2.6) (end -5.8 2.6) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 2.25 3.6) (end 2.25 2.6) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -2.25 3.6) (end 2.25 3.6) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -2.25 2.6) (end -2.25 3.6) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -5.8 2.6) (end -5.8 -2.95) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 5.8 -2.95) (end 5.8 2.6) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -5.8 -2.95) (end 5.8 -2.95) (layer Edge.Cuts) (width 0.12))
        
        ${''/* stabilizers */}    
        (pad 3 thru_hole circle (at 5.3 -4.75) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) (clearance 0.2))
        (pad 4 thru_hole circle (at -5.3 -4.75) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) (clearance 0.2))

        ${''/* bottom-left switch pin */}
        (pad 1 thru_hole circle (at -4.58 5.1) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.from.str} (clearance 0.2))

        ${''/* bottom-right switch pin and trace */}
        (pad "" smd custom (at 2 5.4 ${ p.rot }) (size 1.6 1.6) (layers "F.Cu")
          (clearance 0.2)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -4 0) (width 0.13))
            (gr_line (start -4 0) (end -6 -2) (width 0.13))
            (gr_line (start -6 -2) (end -8 -2) (width 0.13))
            (gr_line (start -8.5 -2.5) (end -8.5 -8.35) (width 0.13))
            (gr_line (start -8 -8.85) (end -3.65 -8.85) (width 0.13))
            (gr_line (start -8.5 -8.35) (end -8 -8.85) (width 0.13) (fill yes))
            (gr_line (start -8.5 -2.5) (end -8 -2) (width 0.13) (fill yes))
          ))
        (pad "" thru_hole circle (at 2 5.4 22) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) (clearance 0.2))

        ${''/* diode pads */}
        (pad "" smd rect (at -1.65 -4.3 ${ p.rot }) (size 1.1 1.9) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "2" smd rect (at 1.65 -4.3 ${ p.rot }) (size 1.1 1.9) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.to.str})
      `
      const keycap = `
        ${'' /* keycap marks */}
        (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
        `

      return `
          ${standard}
          ${p.param.keycaps ? keycap : ''}
          )
          `
    }
  }