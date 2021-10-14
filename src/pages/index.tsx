import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { NavMobile } from '../components/NavBar/NavMobile'
import { NavBar } from '../components/NavBar/NavBar'
import { HomeMobileOne } from '../components/Home/Mobile/HomeMobileOne'
import { HomeMobileTwo } from '../components/Home/Mobile/HomeMobileTwo'
import { HomeMobileThree } from '../components/Home/Mobile/HomeMobileThree'
import { FooterMobile } from '../components/Footer/FooterMobile'
import { HomeDeskTopOne } from '../components/Home/Desktop/HomeDesktopOne'
import { HomeDesktopTwo } from '../components/Home/Desktop/HomeDesktopTwo'

export default function Home() {
  const [displayActive, changeDisplayActive] = useState('flex')
  const [displayNavMobile, changeDisplayNavMobile] = useState('none')

  return (
    <Box>
      <NavBar
        displayActive={displayActive}
        changeDisplayActive={changeDisplayActive}
        changeDisplayNavMobile={changeDisplayNavMobile}
      />
      <NavMobile
        displayNavMobile={displayNavMobile}
        setDisplayNavMobile={changeDisplayNavMobile}
        setdisplayActive={changeDisplayActive}
        />
      <HomeMobileOne displayActive={displayActive} />
      <HomeMobileTwo displayActive={displayActive} />
      <HomeMobileThree displayActive={displayActive} />
      <FooterMobile displayActive={displayActive} />
      <HomeDeskTopOne/>
      <HomeDesktopTwo/>
    </Box>
  )
}
