import React, { useState } from 'react';
import Home from './screens/home'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const getFonts = () => useFonts.loadAsync({
  'nunito-regular': require('./assets/fonts/static/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/static/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  if(fontsLoaded){
    return (
      <Home />
    );
  } else {
    getFonts();
    setFontsLoaded(true)
  }

}
