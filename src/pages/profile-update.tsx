import { useState } from "react"
import { FooterDesktop } from "../components/Footer/FooterDesktop"
import { FooterMobile } from "../components/Footer/FooterMobile"
import { NavBarResponsive } from "../components/NavBarResponsive/NavBarResponsive"
import { NavMobileResponsive } from "../components/NavBarResponsive/NavMobileResponsive"
import { ProfileUpdateDesktop } from "../components/ProfileUpdate/ProfileUpdateDesktop"
import { ProfileUpdateMobile } from "../components/ProfileUpdate/ProfileMobile"

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
      <ProfileUpdateDesktop />
      <ProfileUpdateMobile 
        displayActive={displayActive} 
      />
      <FooterMobile 
        displayActive={displayActive}
      />
      <FooterDesktop />
    </>
  )
}