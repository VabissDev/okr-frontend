import { Page } from '@shopify/polaris'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const MainLayout = () => {
  return (
    <Page >
        <Header/>
        <Outlet/>
    </Page>
  )
}
