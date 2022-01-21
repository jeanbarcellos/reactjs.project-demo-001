import { styled } from '@mui/material'
import MuiToolbar from '@mui/material/Toolbar'
import AppDialog from 'components/dialog/AppDialog'
import AppLoadingDialog from 'components/dialog/AppLoadingDialog'
import Loading from 'components/loading/Loading'
import AppMessage from 'components/message/AppMessage'
import layoutConfig from 'config/layoutConfig'
import routesConfig from 'config/routesConfig'
import * as React from 'react'
import { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import Footer from './Footer'

const Content = styled('main')(({ theme, config }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
  paddingBottom: `${layoutConfig.footer.height}px`
}))

const Toolbar = styled(MuiToolbar)(({ theme, config }) => ({
  ...theme.mixins.toolbar
}))

const Main = () => {
  return (
    <Content id='layout-main'>
      <Toolbar id='asdasd' />
      <AppDialog />
      <AppLoadingDialog />
      <AppMessage />

      <Suspense fallback={<Loading />}>{renderRoutes(routesConfig)}</Suspense>

      <Footer id='layout-footer' />
    </Content>
  )
}

export default Main
