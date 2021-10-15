import { useState } from "react"
import { FooterDesktop } from "../components/Footer/FooterDesktop"
import { FooterMobile } from "../components/Footer/FooterMobile"
import { NavBarResponsive } from "../components/NavBarResponsive/NavBarResponsive"
import { NavMobileResponsive } from "../components/NavBarResponsive/NavMobileResponsive"
import { ProfileDesktop } from "../components/Profile/ProfileDesktop"
import { ProfileMobile } from "../components/Profile/ProfileMobile"

export default function ProfileUpdate() {
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
      <FooterMobile 
        displayActive={displayActive}
      />
      <FooterDesktop />
    </>
  )
}