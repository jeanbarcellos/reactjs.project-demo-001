import { styled } from '@mui/material'
import MuiToolbar from '@mui/material/Toolbar'
import AppDialog from 'components/dialog/AppDialog'
import AppLoadingDialog from 'components/dialog/AppLoadingDialog'
import Loading from 'components/loading/Loading'
import AppMessage from 'components/message/AppMessage'
import layoutConfig from 'config/layoutConfig'
import routesConfig from 'config/routesConfig'
import React from 'react'
import { Suspense } from 'react'
import { useRoutes } from 'react-router'

const Content = styled('main')(({ theme, config }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
  paddingBottom: `${layoutConfig.footer.height}px`
}))

const AppBarSpacer = styled(MuiToolbar)(({ theme, config }) => ({
  ...theme.mixins.toolbar
}))

const Main = () => {
  return (
    <Content id='layout-main'>
      {layoutConfig.toolbar.display && <AppBarSpacer id='layout-toolbar-space' />}
      <AppDialog />
      <AppLoadingDialog />
      <AppMessage />

      <Suspense fallback={<Loading />}>{useRoutes(routesConfig)}</Suspense>
    </Content>
  )
}

export default Main
