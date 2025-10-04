import { Category } from '@/type'
import cn from 'clsx'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Platform, Text, TouchableOpacity } from 'react-native'
const Filter = ({categories} : {categories:Category[]}) => {
    const searchParams = useLocalSearchParams();


    
    const [active , setActive] = useState(searchParams.category || 'all');
// console.log("chech",JSON.stringify(categories,null,2))
    const handlePress = (id:string)=>{
      // console.log("id",id)
        setActive(id);
        if(id === 'all') router.setParams({category:undefined});
        else router.setParams({category:id})
    }

      const filterData: (Category | { $id: string; name: string })[] = categories
        ? [{ $id: 'all', name: 'All' }, ...categories]
        : [{ $id: 'all', name: 'All' }]

      // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);

 
  // }, []);

  return (
<FlatList 
data= {filterData} 
horizontal
showsHorizontalScrollIndicator={false}
//  refreshControl={
//         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//       }
contentContainerClassName='gap-x-2 pb-3'
renderItem={({item})=>(
    <TouchableOpacity
     key={item.$id} className={cn('filter', active === item.$id ? 'bg-amber-500' : 'bg-white')}
    style={Platform.OS === 'android' ? {elevation: 5 , shadowColor: '#878787'} : {}}
    onPress={()=>handlePress(item.$id)}
    >
        <Text className={cn('body-medium', active === item.$id ? 'text-white' : 'text-gray-200')}>{item.name}</Text>
    </TouchableOpacity>
)}
keyExtractor={(item)=>item.$id}

/>
  )
}

export default Filter