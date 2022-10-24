import React, { useCallback } from 'react';
import Home from './screens/home'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/static/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/static/Nunito-Bold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if(!fontsLoaded){
    return null
  } else {
    <Home onLayout={onLayoutRootView}/>
  }

}
