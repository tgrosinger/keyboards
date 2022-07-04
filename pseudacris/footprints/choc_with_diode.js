// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
// 
// note: hotswap and reverse can be used simultaneously

module.exports = {
  nets: {
    from: undefined,
    to: undefined
  },
  params: {
    class: 'S',
    hotswap: false,
    reverse: false,
    keycaps: false
  },
  body: p => {
    const standard = `
      (module PG1350 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* diode box marker */}        	 
      (fp_line (start 2.868 3.326) (end 2.868 5.476) (layer "Dwgs.User") (width 0.15))
      (fp_line (start -2.732 5.476) (end 2.868 5.476) (layer "Dwgs.User") (width 0.15))
      (fp_line (start 2.868 3.326) (end -2.732 3.326) (layer "Dwgs.User") (width 0.15))
      (fp_line (start -2.732 3.326) (end -2.732 5.476) (layer "Dwgs.User") (width 0.15))

      ${''/* diode direction marker */}        	 
      (fp_line (start -0.282 4.426) (end 0.318 4.026) (layer "F.SilkS") (width 0.1))
      (fp_line (start 0.318 4.826) (end -0.282 4.426) (layer "F.SilkS") (width 0.1))
      (fp_line (start -0.282 4.426) (end -0.282 3.876) (layer "F.SilkS") (width 0.1))
      (fp_line (start -0.282 4.426) (end -0.282 4.976) (layer "F.SilkS") (width 0.1))
      (fp_line (start -0.682 4.426) (end -0.282 4.426) (layer "F.SilkS") (width 0.1))
      (fp_line (start 0.318 4.426) (end 0.818 4.426) (layer "F.SilkS") (width 0.1))
      (fp_line (start 0.318 4.026) (end 0.318 4.826) (layer "F.SilkS") (width 0.1))

      ${''/* diode pads */}
      (pad "" smd rect (at 1.776 4.401 ${ p.rot }) (size 1.1 1.9) (layers "B.Cu" "B.Paste" "B.Mask"))
      (pad 2 smd rect (at -1.524 4.401 ${ p.rot }) (size 1.1 1.9) (layers "B.Cu" "B.Paste" "B.Mask") ${p.net.to.str})

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))      
      
      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))
        
      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))

      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `
    function pins(def_neg, def_pos, def_side) {
      if(p.param.hotswap) {
        return `
          ${'' /* holes */}
          (pad "" np_thru_hole circle (at ${def_pos}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      
          ${'' /* net pads (other pad is with diode) */}
          (pad 1 smd rect (at ${def_neg}3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.net.from.str})

          ${''/* right hotswap pad and trace to diode */}
          (pad "" smd custom (at 8.275 -3.75 ${ p.rot }) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)
            (clearance 0.2)
            (options (clearance outline) (anchor rect))
            (primitives
              (gr_line (start -0.5 1) (end -0.5 4.6) (width 0.2))
              (gr_line (start -3.3284 7.4284) (end -6.5 7.4284) (width 0.2))
              (gr_line (start -0.499981 4.599974) (end -3.328408 7.428401) (width 0.2))
            ))
        `
      } else {
          return `
            ${''/* pins (other pad is with diode) */}
            (pad 1 thru_hole circle (at ${def_pos}5 -3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.net.from.str})
          `
      }
    }
    if(p.param.reverse) {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${pins('-', '', 'B')}
        ${pins('', '-', 'F')})
        `
    } else {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${pins('-', '', 'B')})
        `
    }
  }
}