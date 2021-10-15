import { NavBar } from '../components/NavBar/NavBar'
import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { SignupDesktopPartThree } from '../components/Signup/Desktop/SignupDesktopPartThree'
import { SignupMobilePartThree } from '../components/Signup/Mobile/SignupMobilePartThree'

export default function Signup () {
  return (
    <>
    <NavBar />
    <SignupDesktopPartThree/>
    <SignupMobilePartThree />
    <FooterDesktop />
    </>
  )
}