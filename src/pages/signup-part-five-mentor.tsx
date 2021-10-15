import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { NavBar } from '../components/NavBar/NavBar'
import { SignupDesktopPartFiveMentor } from '../components/Signup/Desktop/SignupDesktopPartFiveMentor'
import { SignupMobilePartFiveMentor } from '../components/Signup/Mobile/SignupMobilePartFiveMentor'

export default function Signup () {
  
  return (
    <>
      <NavBar/>
      <SignupDesktopPartFiveMentor />
      <SignupMobilePartFiveMentor />
      <FooterDesktop />
    </>
  )
}