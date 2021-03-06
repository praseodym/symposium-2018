import React from 'react'
import './styles.css'

import Person from 'components/Person'

import cj from 'assets/commissioners/cor-jan_heijlema.jpg'
import hoef from 'assets/commissioners/emiel_hoefkens.jpg'
import arie from 'assets/commissioners/arianne_schiereck.jpg'
import wouter from 'assets/commissioners/wouter_raateland.jpg'
import ilo from 'assets/commissioners/ilona_post.jpg'
import hillie from 'assets/commissioners/hilco_van_der_wilk.jpg'
import ireen from 'assets/commissioners/irene_vooijs.jpg'

const commissioners = [
  {
    img: cj,
    name: 'Cor-Jan Heijlema',
    title: 'Chairman',
    link: 'https://www.linkedin.com/in/cor-jan-heijlema-2609bb12b/',
  },
  {
    img: hoef,
    name: 'Emiel Hoefkens',
    title: 'Secretary',
    link: 'https://www.linkedin.com/in/emiel-hoefkens-b86b0912b/',
  },
  {
    img: arie,
    name: 'Arianne Schiereck',
    title: 'Treasurer',
    link: 'https://www.linkedin.com/in/arianne-schiereck-b34b96137/',
  },
  {
    img: wouter,
    name: 'Wouter Raateland',
    title: 'Commissioner promotion',
    link: 'https://www.linkedin.com/in/wouterraateland/',
  },
  {
    img: ilo,
    name: 'Ilona Post',
    title: 'Commissioner speakers',
    link: 'https://www.linkedin.com/in/ilona-post-9b31a0134/',
  },
  {
    img: hillie,
    name: 'Hilco van der Wilk',
    title: 'Commissioner speakers',
    link: 'https://www.linkedin.com/in/hilco-van-der-wilk-3a668713b/',
  },
  {
    img: ireen,
    name: 'Irene Vooijs',
    title: 'Supervisor',
    link: 'https://www.linkedin.com/in/irene-vooijs-870b19137/',
  },
]

const Committee = () => (
  <div className="Committee row">
    {commissioners.map(({ title, ...rest }, i) =>
      <Person
        key={i}
        revealed={true}
        title={title}
        vertical
        small
        className="Commissioner"
        {...rest}
      />
    )}
  </div>
)

export default Committee
