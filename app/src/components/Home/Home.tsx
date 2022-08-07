import { Box, Text } from '@chakra-ui/react';

import Logo from '../../../assets/icons/1024x1024.png';
import { Onboarding } from './Onboarding';

export function Home({ onInitialize }: { onInitialize: () => void }) {
  return (
    <Box
      p={{
        base: '24px 24px',
        sm: '24px 24px',
        lg: '48px 64px',
      }}
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{ width: 80, height: 80, marginBottom: 24 }}
          />
          <Text
            bgGradient={['linear(to-r, blue.400, green.400)']}
            bgClip="text"
            fontSize={{ md: 'xl', lg: '2xl', xl: '3xl' }}
            fontWeight="bold"
            style={{
              width: 'fit-content',
            }}
          >
            WELCOME TO
          </Text>
          <Text
            bgGradient={['linear(to-r, purple.400, purple.300)']}
            bgClip="text"
            fontSize={{ md: '4xl', lg: '5xl', xl: '6xl' }}
            fontWeight="bold"
            style={{ marginTop: -10, width: 'fit-content' }}
          >
            LEFT ON READ
          </Text>
        </div>
        <div style={{ marginTop: 12 }}>
          <Text color="gray">{`The world's first message analyzing platform.`}</Text>
        </div>
      </div>
      <div style={{ width: '50%', display: 'flex' }}>
        <Box
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          p={{ base: '24px 12px' }}
        >
          <Onboarding onInitialize={onInitialize} />
        </Box>
      </div>
    </Box>
  );
}