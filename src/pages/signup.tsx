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
import { ChangeEvent, useEffect, useState } from 'react'
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

  function handleFormUser(event: ChangeEvent<HTMLInputElement>) {
    formUser[event.target.name] = event.target.value
    setFormUser(formUser)
  }

  return (
    <>
      <NavBar />
      <SignupDesktop
        display={display}
        setFormUser={setFormUser}
        setDisplay={setDisplay}
        setDisplayPartOne={setDisplayPartOne}
      />
      <SignupDesktopPartOne
        displayPartOne={displayPartOne}
        handleFormUser={handleFormUser}
        setDisplayPartOne={setDisplayPartOne}
        setDisplayPartTwo={setDisplayPartTwo}
        setDisplay={setDisplay}
      />
      <SignupDesktopPartTwo
        displayPartTwo={displayPartTwo}
        handleFormUser={handleFormUser}
        setDisplayPartTwo={setDisplayPartTwo}
        setDisplayPartThree={setDisplayPartThree}
        setDisplayPartOne={setDisplayPartOne}
      />
      <SignupDesktopPartThree
        displayPartThree={displayPartThree}
        handleFormUser={handleFormUser}
        setDisplayPartThree={setDisplayPartThree}
        setDisplayPartFour={setDisplayPartFour}
        setDisplayPartTwo={setDisplayPartTwo}
      />
      <SignupDesktopPartFour
        displayPartFour={displayPartFour}
        handleFormUser={handleFormUser}
        formUser={formUser}
        setDisplayPartFour={setDisplayPartFour}
        setDisplayPartFiveMentor={setDisplayPartFiveMentor}
        setDisplayPartFiveMentored={setDisplayPartFiveMentored}
        setDisplayPartThree={setDisplayPartThree}
      />
      <SignupDesktopPartFiveMentor
        displayPartFiveMentor={displayPartFiveMentor}
        setFormUser={setFormUser}
        formUser={formUser}
        setDisplayPartFiveMentor={setDisplayPartFiveMentor}
        setDisplayPartFour={setDisplayPartFour}
      />
      <SignupDesktopPartFiveMentored
        displayPartFiveMentored={displayPartFiveMentored}
        setFormUser={setFormUser}
        formUser={formUser}
        setDisplayPartFiveMentored={setDisplayPartFiveMentored}
        setDisplayPartFour={setDisplayPartFour}
      />
      <SignupMobile />
      <FooterDesktop />
    </>
  )
}