import { NavBar } from '../components/NavBar/NavBar'
import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { SignupDesktopPartTwo } from '../components/Signup/Desktop/SignupDesktopPartTwo'
import { SignupMobilePartTwo } from '../components/Signup/Mobile/SignupMobilePartTwo'

export default function Signup () {  
  return (
    <>
    <NavBar/>
    <SignupDesktopPartTwo/>
    <SignupMobilePartTwo />
    <FooterDesktop />
    </>
  )
}