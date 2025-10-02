import { images } from '@/constants'
import { Slot } from 'expo-router'
import React from 'react'
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

export default function _layout() {
  return (
   <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    
    <ScrollView className="flex-1" keyboardShouldPersistTaps='handled'>
    <View className="w-full relative" style={{height:Dimensions.get('screen').height / 2.25}}>
      
      <ImageBackground
        source={images.loginGraphic}
        className="size-full rouded-b-lg"
        resizeMode='stretch'
      />
      <Image source={images.logo} className="size-48 self-center absolute -bottom-16 z-10" />
    </View>
   
  
      <Slot />
    </ScrollView>
   </KeyboardAvoidingView>
  )
}