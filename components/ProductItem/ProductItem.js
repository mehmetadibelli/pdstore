import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import styles from './ProductItem-style';

const ProductItem = ({product}) =>{
    return(


        <TouchableOpacity style={{flex:1, padding:10}}>
        <View style={styles.container}>
            <View style={styles.itemWrap}>
                
                    <Image
                    source={{uri: product.imgURL}}
                    style={styles.image}
                    />
                    <Text style={styles.itemTitle}>
                    {product.title}
                    </Text>
                    <Text style={styles.itemPrice}>
                    {product.price}
                    </Text>
                    <Text style={styles.itemStock}>
                    {product.inStock ? true: 'STOKTA YOK'}
                    </Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default ProductItem;