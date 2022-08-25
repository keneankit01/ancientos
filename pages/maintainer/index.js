import React from 'react'
import { Box } from '@mui/material'
import { Heading, GoBack, ButtonBox } from '@/components'

const Donation = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 5,
        dispay: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Heading pri="Welcome to Maintainer" sub="Build AncientOS for your Device" />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1>Will be opened soon...</h1>
        {/* <ButtonBox
					link="/maintainer/maintainer-form"
					title="Apply for Maintainer"
				/> */}
        {/* <ButtonBox link="" title="maintainer Form Status" />
				<ButtonBox link="" title="Complete Your from" />
				<ButtonBox link="" title="Publish New Build" />
				<ButtonBox link="" title="Request for New Device" />
				<ButtonBox link="" title="Manage your builds" /> */}
      </Box>
      <GoBack props="/" />
    </Box>
  )
}

export default Donation
