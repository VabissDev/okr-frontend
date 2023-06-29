import React from 'react'
import {LegacyCard} from '@shopify/polaris';
import {Bleed, Box, Text, HorizontalStack} from '@shopify/polaris';


export const Workspace = () => {
  return (

    <Box
    background="bg"
    borderWidth="1"
    borderColor="border-subdued"
    padding="8"
  >
    <Bleed marginInline="8">
      <Placeholder label="Organization name" />
    </Bleed>
  </Box>
);
}

const Placeholder = ({label = '', height = 'auto', width = 'auto'}) => {
return (
  <>

  <div
    style={{
      background: 'var(--p-color-text-info)',
      padding: '14px var(--p-space-2)',
      height: height,
      width: width,
    }}
  >
    <HorizontalStack gap="4" align="center">
      <div
        style={{
          color: 'var(--p-color-text-on-color)',
        }}
      >
        <Text as="h2" variant="bodyMd" fontWeight="regular">
          {label}
        </Text>
      </div>
    </HorizontalStack>
  </div>
    
    <LegacyCard title="Online store dashboard" sectioned>
    <p>View a summary of your online store’s performance.</p>
  </LegacyCard>
  
  </>
)
}

