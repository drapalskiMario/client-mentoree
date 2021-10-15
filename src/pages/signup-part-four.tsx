import { NavBar } from '../components/NavBar/NavBar'
import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { SignupDesktopPartFour } from '../components/Signup/Desktop/SignupDesktopPartFour'
import { SignupMobilePartFour } from '../components/Signup/Mobile/SignupMobilePartFour'

export default function Signup () {  
  return (
    <>
    <NavBar />
    <SignupDesktopPartFour/>
    <SignupMobilePartFour />
    <FooterDesktop />
    </>
  )
}