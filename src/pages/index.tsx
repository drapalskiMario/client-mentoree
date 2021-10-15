import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { NavMobileResponsive } from '../components/NavBarResponsive/NavMobileResponsive'
import { NavBarResponsive } from '../components/NavBarResponsive/NavBarResponsive'
import { HomeMobileOne } from '../components/Home/Mobile/HomeMobileOne'
import { HomeMobileTwo } from '../components/Home/Mobile/HomeMobileTwo'
import { HomeMobileThree } from '../components/Home/Mobile/HomeMobileThree'
import { FooterMobile } from '../components/Footer/FooterMobile'
import { HomeDeskTopOne } from '../components/Home/Desktop/HomeDesktopOne'
import { HomeDesktopTwo } from '../components/Home/Desktop/HomeDesktopTwo'
import { HomeDesktopThree } from '../components/Home/Desktop/HomeDesktopThree'
import { FooterDesktop } from '../components/Footer/FooterDesktop'

export default function Home() {
  const [displayActive, changeDisplayActive] = useState('flex')
  const [displayNavMobile, changeDisplayNavMobile] = useState('none')

  return (
    <Box>
      <NavBarResponsive
        displayActive={displayActive}
        changeDisplayActive={changeDisplayActive}
        changeDisplayNavMobile={changeDisplayNavMobile}
      />
      <NavMobileResponsive
        displayNavMobile={displayNavMobile}
        setDisplayNavMobile={changeDisplayNavMobile}
        setdisplayActive={changeDisplayActive}
      />
      <HomeMobileOne displayActive={displayActive} />
      <HomeMobileTwo displayActive={displayActive} />
      <HomeMobileThree displayActive={displayActive} />
      <FooterMobile displayActive={displayActive} />
      <HomeDeskTopOne />
      <HomeDesktopTwo />
      <HomeDesktopThree />
      <FooterDesktop />
    </Box>
  )
}
