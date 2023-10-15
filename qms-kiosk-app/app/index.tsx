import * as React from 'react';
import { router, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { IconButton, MD3Colors } from 'react-native-paper';
import { ChooseServicesView } from '../src/views';


 const Home = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <Stack.Screen
          options={{
            title: t('translation:services'),
            headerRight: () => (
              <IconButton
                icon="cog"
                iconColor={MD3Colors.primary0}
                size={20}
                onPress={() => {
                  router.push({ pathname: '/configuration' });
                }}
              />          
            ),
          }}
        />
      <ChooseServicesView />
    </React.Fragment>
  );
};

export default Home;