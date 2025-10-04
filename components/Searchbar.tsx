import { images } from '@/constants'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
// import { useDebouncedCallback } from 'use-debounce'
const Searchbar = () => {
  const params = useLocalSearchParams<{query?: string}>()
  const [query, setQuery] = useState(params.query)

  // const debounceSearch  = useDebouncedCallback(
  //   // (text:string)=> router.setParams({query:text}),
  //   (text:string)=> router.push(`/search?query=${text}`),

  //   500

  // )

  const handleSearch = (text:string)=>{
    setQuery(text)
    // debounceSearch(text)
    if(!text) router.setParams({query : undefined}) ;
    
  }
  const handleSumit  =()=>{
if(query?.trim()) router.setParams({query})
  }
  return (
    <View className='searchbar  shadow-xl' >
      <TextInput className='flex-1 p-5'
      placeholder='Search for pizzas , burgers....'
      value={query}
      onChangeText={handleSearch}
      onSubmitEditing={handleSumit}
      placeholderTextColor={"#a0a0a0"}
      returnKeyType='search'
      />
      <TouchableOpacity className='pr-5 ' 
      onPress={()=>router.setParams({query})}
      >
        <Image source={images.search} resizeMode='contain' className='size-6' tintColor={"#5d5f6d"} />
      </TouchableOpacity>
    </View>
  )
}

export default Searchbar