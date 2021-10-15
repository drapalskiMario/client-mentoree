import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { useState } from 'react'
import { SchedulePartTwoDestktop } from '../components/Schedule/Desktop/SchedulePartTwoDesktop'
import { SchedulePartTwoMobile } from '../components/Schedule/Mobile/SchedulePartTwoMobile'
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
      <SchedulePartTwoDestktop />
      <SchedulePartTwoMobile displayActive={displayActive} />
      <FooterDesktop />
    </>
  )
}
