'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { MenuIcons, Navbar, Paragraph } from '..'

function Header() {
  const [state, setState] = useState(true)
  function changeState(state: boolean) {
    setState(!state)
  }

  const styles = {
    navbar: clsx('w-full z-30 fixed flex flex-col content-start gap-20 p-4 inset-y-0 left-0 transform translate-x-0 transition-transform duration-300 ease-in-out lg:relative lg:w-auto lg:translate-x-0 bg-white lg:p-0 lg:flex-row', !state && 'translate-x-[100%]')
  }

  return (
    <header className='wrapper lg:flex lg:justify-between'>
      <div className='flex justify-between items-center'>
        <Paragraph type='span' className='text-xl font-bold'>
          TeachIT
        </Paragraph>
        <div className='lg:hidden' onClick={() => changeState(state)}>
          <MenuIcons className='cursor-pointer' />
        </div>
      </div>
      <Navbar className={styles.navbar} state={state} changeState={changeState} />
    </header>
  )
}

export default Header
