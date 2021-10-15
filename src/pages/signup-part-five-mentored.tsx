import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { NavBar } from '../components/NavBar/NavBar'
import { SignupDesktopPartFiveMentored } from '../components/Signup/Desktop/SignupDesktopPartFiveMentored'
import { SignupMobilePartFiveMentored } from '../components/Signup/Mobile/SignupMobilePartFiveMentored'

export default function Signup () {
  return (
    <>
      <NavBar />
      <SignupDesktopPartFiveMentored />
      <SignupMobilePartFiveMentored />
      <FooterDesktop />
    </>
  )
}