import { styled } from '@mui/material'
import MuiToolbar from '@mui/material/Toolbar'
import AppDialog from 'components/dialog/AppDialog'
import AppLoadingDialog from 'components/dialog/AppLoadingDialog'
import Loading from 'components/loading/Loading'
import AppMessage from 'components/message/AppMessage'
import routesConfig from 'config/routesConfig'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router'
import { selectLayoutConfig } from 'store/app/layoutSlice'

const Content = styled('main')(({ theme, config }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
  paddingBottom: `${config.footer.height}px`
}))

const AppBarSpacer = styled(MuiToolbar)(({ theme, config }) => ({
  ...theme.mixins.toolbar
}))

const Main = () => {
  const layoutConfig = useSelector(selectLayoutConfig)

  return (
    <Content id='layout-main' config={layoutConfig}>
      {layoutConfig.toolbar.display && <AppBarSpacer id='layout-toolbar-space' />}
      <AppDialog />
      <AppLoadingDialog />
      <AppMessage />

      <Suspense fallback={<Loading />}>{useRoutes(routesConfig)}</Suspense>
    </Content>
  )
}

export default Main
