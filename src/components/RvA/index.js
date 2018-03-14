import React from 'react'

import Person from 'components/Person'

import zAlArs from 'assets/speakers/z_al_ars.jpg'
import mKeijzer from 'assets/speakers/m_keijzer.jpg'
import gJongbloed from 'assets/speakers/g_jongbloed.jpg'
import pBosman from 'assets/speakers/p_bosman.jpg'

const rva = [
  {
    img: zAlArs,
    name: 'Dr.ir. Z. Al-Ars',
    title: 'Associate professor in Bioinformatics',
    faculty: 'Faculty of EEMCS TU Delft'
  },
  {
    img: mKeijzer,
    name: 'Dr.ir. M. Keijzer',
    title: 'Assistant Professor in Applied Mathematics',
    faculty: 'Faculty of EEMCS TU Delft'
  },
  {
    revealed: false,
    img: gJongbloed,
    name: 'Prof.dr.ir. G. Jongbloed',
    title: 'Professor of Statistics',
    faculty: 'Faculty of EEMCS TU Delft'
  },
  {
    revealed: false,
    img: pBosman,
    name: 'Dr. P. Bosman',
    title: 'Head of Medical informatics group',
    faculty: 'Life Sciences and Health CWI'
  },
]

const RvA = () => (
  <div className="RvA">
    {rva.map(({ title, faculty, ...rest }, i) =>
      <Person key={i} title={`${title} | ${faculty}`} small {...rest} />
    )}
  </div>
)

export default RvA
