import { CustomInputProps } from '@/type';
import cn from 'clsx';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
const CustomInput = ({
    placeholder = "Enter text",
     value, 
     onChangeText, 
     secureTextEntry = false,
     keyboardType = "default",
     label,
     icon,
    }:CustomInputProps) => {

        const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View className='w-full'>
      {label && <Text className="label mx-8 text-lg">{label}</Text>}
   <View className="flex-row items-center mx-4 mb-4 px-4">
    {icon && <View className="mr-2">{icon}</View>}
    <TextInput 
    autoCapitalize='none'
    autoCorrect={false}
        className={cn('input', isFocused ? 'border-primary' : 'border-gray-300')}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={"#000"}
        onFocus={()=>setIsFocused(true)}
    />
   </View>
    </View>

  )
}

export default CustomInput