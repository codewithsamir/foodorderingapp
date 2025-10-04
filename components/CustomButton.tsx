import { CustomButtonProps } from '@/type'
import cn from 'clsx'
import React from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native'
const CustomButton = ({
    onPress,
    title="click me",
    style,
    textStyle,
    leftIcon,
    isLoading = false,

}:CustomButtonProps) => {
  return (
<TouchableOpacity className={cn('custom-btn', style)} onPress={onPress} disabled={isLoading}>
    <View className="flex-row justify-center items-center">
        {leftIcon && <View className="mr-2">
            <Image source={leftIcon} resizeMode="contain" className="size-8 mr-2" />
            </View>}
    {isLoading ?
    (
        <ActivityIndicator size="small" animating={isLoading} color="#fff" />

    ) : 
    (
        <Text className={cn('text-white-100 paragraph-semibold', textStyle)}>{title}</Text>
    )
    }
    </View>
</TouchableOpacity>
  )
}

export default CustomButton