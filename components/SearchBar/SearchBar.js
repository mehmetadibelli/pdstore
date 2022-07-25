import React from "react";
import { TextInput } from "react-native";
import styles from './SearchBar-style';

const SearchBar = () =>{
    return(

     <TextInput
     style={styles.textInput}
     height={50}
     placeholder='Ara...'
     />
    );
};

export default SearchBar;