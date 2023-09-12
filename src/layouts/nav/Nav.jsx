import React from 'react'
import './styles.css'
import Logo from './Logo'
import Menu from './Menu'
import Access from './Access'


const Nav = () => {
  return (
    <section id='main'>
        <article>
            <Logo />
            <Menu />
            <Access />
        </article>
    </section>
  )
}

export default Nav