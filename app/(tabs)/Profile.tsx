import CustomButton from '@/components/CustomButton'
import CustomHeader from '@/components/CustomHeader'
import { images } from '@/constants'
import { useAuthStore } from '@/store/auth.store'
import React from 'react'
import { Alert, Image, ImageSourcePropType, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserDataDisplay = ({label,value,icon}:{label:string,value:string,icon:ImageSourcePropType})=>{
  return(
        <View className='flex-row gap-6 w-full items-center mb-6 '>
          <View className='bg-primary/10 p-4 rounded-full '>
            <Image source={icon} resizeMode='contain' className='size-6' />
          </View>
          <View>
            <Text className='capitalize text-gray-500'>{label}</Text>
            <Text className='text-xl  '>{value}</Text>
          </View>
        </View>
  )
}

const Profile = () => {
  const {user,logoutUser} = useAuthStore()
  return (
 <SafeAreaView className='h-full w-full px-6 mt-4'>
  <CustomHeader title="Profile" />
  <View className='  mx-auto'>
    <Image source={{uri:user?.avatar}} resizeMode="contain" 
    className='size-28 rounded-full'  
    />
    <View className= ' absolute  right-0 bottom-0 bg-primary/70 size-8 justify-center items-center rounded-full'>
      <Image source={images.pencil} className='size-5' resizeMode='contain' /> 
    </View>
  </View>
<View className='p-10 '>
<UserDataDisplay label='full Name ' value={user?.name || "....."}  icon={images.user}/>
<UserDataDisplay label='Email ' value={user?.email || '......'}  icon={images.envelope}/>
<UserDataDisplay label='Phone number ' value={user?.contact || '......'}  icon={images.phone}/>
<UserDataDisplay label='Address ' value={user?.address || '......'}  icon={images.location}/>

</View>
<CustomButton title="Edit Profile" style='bg-primary/10 border-2 border-primary mb-6' textStyle='text-orange-500 font-bold' />

<CustomButton title="Logout" leftIcon={images.logout}   onPress={()=>{
  logoutUser()
  Alert.alert("Successfully logout")
}}
style='bg-pink-500/10 border-2 border-pink-500 mb-6' textStyle='text-pink-500 font-bold'
/>
 </SafeAreaView>
  )
}

export default Profile