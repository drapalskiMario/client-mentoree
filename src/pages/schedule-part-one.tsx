import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { useState } from 'react'
import { SchedulePartOneDestktop } from '../components/Schedule/Desktop/SchedulePartOneDesktop'
import { SchedulePartOneMobile } from '../components/Schedule/Mobile/SchedulePartOneMobile'
import { NavBarResponsive } from '../components/NavBarResponsive/NavBarResponsive'
import { NavMobileResponsive } from '../components/NavBarResponsive/NavMobileResponsive'

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
      <SchedulePartOneDestktop />
      <SchedulePartOneMobile displayActive={displayActive} />
      <FooterDesktop />
    </>
  )
}
