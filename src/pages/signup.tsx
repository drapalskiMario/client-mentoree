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
import { useEffect, useState } from 'react'
import { User } from '../interfaces/User'

export default function Signup () {
  const [formUser, setFormUser] = useState<User>()
  const [display, setDisplay] = useState<'flex' | 'none'>('flex')
  const [displayPartOne, setDisplayPartOne] = useState<'block' | 'none'>('none')
  const [displayPartTwo, setDisplayPartTwo] = useState<'block' | 'none'>('none')
  const [displayPartThree, setDisplayPartThree] = useState<'block' | 'none'>('none')
  const [displayPartFour, setDisplayPartFour] = useState<'block' | 'none'>('none')
  const [displayPartFiveMentor, setDisplayPartFiveMentor] = useState<'block' | 'none'>('none')
  const [displayPartFiveMentored, setDisplayPartFiveMentored] = useState<'block' | 'none'>('none')

  useEffect(() => {
    console.log(formUser)
  }, [formUser])

  return (
    <>
      <NavBar />
      <SignupDesktop
        display={display}
        setFormUser={setFormUser}
        setDisplay={setDisplay}
        setDisplayPartOne={setDisplayPartOne}
      />
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