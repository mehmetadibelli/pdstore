import React from "react";
import { View,Text, FlatList } from "react-native";
import ProductItem from "./components/ProductItem";
import productsData from "./productsData.json";
import SearchBar from "./components/SearchBar";



const App = () =>{

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return(

    <View style={{backgroundColor: 'whitesmoke', flex:1}}>
      <FlatList
          ListHeaderComponent={<View style={{padding:10}}><Text style={{color:'#800080', fontWeight:"bold", fontSize:24,marginBottom:12}}>PATIKASTORE</Text><SearchBar/></View>}
          columnWrapperStyle={{justifyContent: 'space-between'}}

          numColumns={2}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
          data={productsData}
          renderItem={({item}) => <ProductItem product={item}/>}
          keyExtractor={item => item.id}
        />
      </View>

  );
}

export default App;