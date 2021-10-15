import { useState } from "react"
import { LoginDesktop } from "../components/Login/LoginDesktop"
import { LoginMobile } from "../components/Login/LoginMobile"
import { NavBarResponsive } from '../components/NavBarResponsive/NavBarResponsive'
import { NavMobileResponsive } from '../components/NavBarResponsive/NavMobileResponsive'

export default function Login () {
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
      <LoginDesktop />
      <LoginMobile displayActive={displayActive} />
    </>
  )
}