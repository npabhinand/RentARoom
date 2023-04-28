import { View, Text, FlatList } from 'react-native'
import React from 'react'

const SearchFilter = (data,input,setInput) => {
  return (
    <View>
      
      <FlatList data={data} renderItem={({item})=>{
        if(input===""){
            return(
                <View>
                    <Text>{item.name}</Text>
                </View>
            )
        }
        if(item.name.toLowerCase().includes(input.toLowerCase())){
            return(
                <View>
                     <Text>{item.name}</Text>
                </View>
            )
        }
      }}/>
    </View>
  )
}

export default SearchFilter