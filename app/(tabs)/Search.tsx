import CartButton from '@/components/CartButton'
import Filter from '@/components/filter'
import MenuCard from '@/components/menuCard'
import Searchbar from '@/components/Searchbar'
import { getCategories, getMenu } from '@/lib/appwrite'
import useAppwrite from '@/lib/useAppwrite'
import { MenuItem } from '@/type'
import cn from 'clsx'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Search = () => {
  const {category, query} = useLocalSearchParams<{query:string; category: string} >()
  // console.log("c",category)
  const {data, refetch, loading} = useAppwrite({
      fn:getMenu,
      params:{
        category:'',
        query:'',
        limit:6,
      }
  });
  // console.log("menu",JSON.stringify(data,null,2))


  const {data:categories} = useAppwrite({
    fn:getCategories
  })

  // console.log(JSON.stringify(data,null,2))


  useEffect(()=>{
refetch({category,query,limit:6})
  },[category,query])

  // const [isloading, setLoading] = useState(false)


  //   const handleSeed = async () => {
  //   try {
  //     setLoading(true);
  //     await seed();
  //     console.log("Seeding done!");
  //   } catch (error) {
  //     console.log("Failed to seed the database", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <SafeAreaView className='bg-white h-full'>
      {/* <Text>Search</Text> */}
{/* {isloading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Button title="Seed" onPress={handleSeed} />
      )} */}


      <FlatList 
      data={data}
      renderItem={({item,index})=>{
        const isFirstRightColItem:any = index % 2 === 0;
        return (
          <View className={cn(`flex-1 max-w-[48%]` , !isFirstRightColItem ? 'mt-10' : 'mt-0')}>
            <MenuCard item={item as MenuItem} />
          </View>
        )
      }}
      keyExtractor={item=> item.$id}
      numColumns={2}
      columnWrapperClassName='gap-7'
      contentContainerClassName='gap-7 px-5 pb-32'
      ListHeaderComponent={()=>(
        <View className='my-5 gap-5'>
          <View className="flex-between flex-row w-full">
            <View className="flex-start">
              <Text className="small-bold uppercase text-primary">Search</Text>
              <View className="flex-start gap-x-1 mt-0.5">
<Text className='text-dark-100 paragraph-semibold '>Find your favorite food</Text>
              </View>
            </View>

            <CartButton />
          </View>
          <Searchbar />
        <Filter categories={categories!} />
        </View>
      )}
      ListEmptyComponent={()=> !loading && <Text>No Result</Text>}
      />
    </SafeAreaView>
  )
}

export default Search