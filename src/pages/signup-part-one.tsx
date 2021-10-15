import { NavBar } from '../components/NavBar/NavBar'
import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { SignupDesktopPartOne } from '../components/Signup/Desktop/SignupDesktopPartOne'
import { SignupMobilePartOne } from '../components/Signup/Mobile/SignupMobilePartOne'

export default function Signup () {
  return (
    <>
    <NavBar />
    <SignupDesktopPartOne/>
    <SignupMobilePartOne />
    <FooterDesktop />
    </>
  )
}