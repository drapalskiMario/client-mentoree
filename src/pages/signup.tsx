import { NavBar } from '../components/NavBar/NavBar'
import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { SignupDesktop } from '../components/Signup/Desktop/SignupDesktop'
import { SignupMobile } from '../components/Signup/Mobile/SignupMobile'

export default function Signup () {
  return (
    <>
      <NavBar />
      <SignupDesktop />
      <SignupMobile />
      <FooterDesktop />
    </>
  )
}