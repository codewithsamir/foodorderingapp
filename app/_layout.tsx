import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

import * as Sentry from '@sentry/react-native';
import { useEffect } from "react";
import "./globals.css";

Sentry.init({
  dsn: 'https://ea09585d80c89c421da62813ceed6411@o4510115322200064.ingest.de.sentry.io/4510115398025296',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  // enableLogs: true,
  // integrations: [Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});




export default Sentry.wrap(function RootLayout() {
 const [fontsLoaded, error] = useFonts({
    "QuickSand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
    "QuickSand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
    "QuickSand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
    "QuickSand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "QuickSand-Light": require('../assets/fonts/Quicksand-Light.ttf'),
  }); 

  useEffect(()=>{
if(error) throw error;
if(fontsLoaded) SplashScreen.hideAsync()
  },[fontsLoaded, error])

  return <Stack screenOptions={{headerShown: false}} />;
});