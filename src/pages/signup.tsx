import { NavBar } from '../components/NavBar/NavBar'
import { FooterDesktop } from '../components/Footer/FooterDesktop'
import { SignupDesktop } from '../components/Signup/Desktop/SignupDesktop'
import { SignupMobile } from '../components/Signup/Mobile/SignupMobile'
import { SignupDesktopPartOne } from '../components/Signup/Desktop/SignupDesktopPartOne'
import { SignupDesktopPartTwo } from '../components/Signup/Desktop/SignupDesktopPartTwo'
import { SignupDesktopPartThree } from '../components/Signup/Desktop/SignupDesktopPartThree'
import { SignupDesktopPartFour } from '../components/Signup/Desktop/SignupDesktopPartFour'
import { SignupDesktopPartFiveMentor } from '../components/Signup/Desktop/SignupDesktopPartFiveMentor'
import { SignupDesktopPartFiveMentored } from '../components/Signup/Desktop/SignupDesktopPartFiveMentored'

export default function Signup () {
  return (
    <>
      <NavBar />
      <SignupDesktop />
      <SignupDesktopPartOne />
      <SignupDesktopPartTwo />
      <SignupDesktopPartThree />
      <SignupDesktopPartFour />
      <SignupDesktopPartFiveMentor />
      <SignupDesktopPartFiveMentored />
      <SignupMobile />
      <FooterDesktop />
    </>
  )
}