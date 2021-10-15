import { ProfileMobile } from '../components/Profile/ProfileMobile'
import { useState } from 'react'
import { NavBarResponsive } from '../components/NavBarResponsive/NavBarResponsive'
import { NavMobileResponsive } from '../components/NavBarResponsive/NavMobileResponsive'
import { ProfileDesktop } from '../components/Profile/ProfileDesktop'
import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { FooterMobile } from '../components/Footer/FooterMobile'

export default function Profile() {
  const [displayActive, changeDisplayActive] = useState('flex')
  const [displayNavMobile, changeDisplayNavMobile] = useState('none')

  return (
    <>
      <NavBarResponsive
        displayActive={displayActive}
        changeDisplayActive={changeDisplayActive}
        changeDisplayNavMobile={changeDisplayNavMobile}
      />
      <NavMobileResponsive
        displayNavMobile={displayNavMobile}
        setDisplayNavMobile={changeDisplayNavMobile}
        setdisplayActive={changeDisplayActive}
      />
      <ProfileDesktop />
      <ProfileMobile 
        displayActive={displayActive}
      />
      <FooterDesktop />
      <FooterMobile 
        displayActive={displayActive}
      />
    </>
  )
}
