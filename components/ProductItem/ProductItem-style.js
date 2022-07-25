import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors";

export default StyleSheet.create({
    itemWrap:{
       height:'100%',
    },
    container:{
        flex:1,
        backgroundColor: colors.boxColor,
        borderRadius:8,
        height:'100%',   
        padding:10   
        
    },
    image:{
        width: '100%',
        height: Dimensions.get('window').height/5,
        resizeMode:'contain',
        backgroundColor:'white',
        borderRadius:8,
        marginBottom:10
    },
    itemTitle:{
        fontWeight:'bold',
        fontSize:18,
        color:'black'
    },
    itemPrice:{
        fontWeight:'600',
        fontSize:16,
        color:'gray'
    },
    itemStock:{
        fontWeight:'700',
        fontSize:18,
        color:'red'
    },
})