import { Page } from '@shopify/polaris'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import {Frame, Navigation} from '@shopify/polaris';
import {HomeMinor} from '@shopify/polaris-icons';
import React from 'react';

export const MainLayout = () => {

  return (
    <Page >
        <Header/>
       <Frame>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: '',
              label: 'Workspace Management',
              icon: HomeMinor,
            },
            {
              url: '/profile/:id',
              excludePaths: ['/'],
              label: 'Profile',
            
          
            },
            {
              url: '/',
              excludePaths: ['/'],
              label: 'Edit Profile',
            
          
            },
            {
              url: '/workspace/create',
              excludePaths: ['/'],
              label: 'Create Workspace',
            
          
            },
           
          ]}
        />
      </Navigation>
    </Frame>
        <Outlet/>
    </Page>
  )
}
