import { StyleSheet } from "react-native";
import { Colors } from "../config/theme";

export const movementColors={
    backRed:{
        backgroundColor:"#FDDCDC"
    },
    txtRed:{
        color:"#A50606"
    },
    backGreen:{
        backgroundColor:"#D1FAE5"
    },
    txtGreen:{
        color:"#065F46"
    },
}

const styles = StyleSheet.create({
    container:{
        width: "95%",
        backgroundColor:"white",
        height: 90,        
        marginTop:"5%",
        borderRadius:8,
        paddingTop:"3%",
        elevation:0.5,
        alignSelf:"center"
    },
    containerDetail:{
        width: "95%",
        backgroundColor:"white",        
        marginTop:"5%",
        borderRadius:8,
        paddingTop:"3%",
        elevation:0.5
    },
    headerContainer:{
        flexDirection:"row",
        marginBottom:"4%"
    },
    leftText:{
        flexDirection:"column",
        width: "50%",  
        paddingLeft:"5%"        
    },
    rightText:{
        flexDirection:"column",
        width: "50%",
        alignItems:"flex-end",
        paddingRight:"5%",
    },    
    itemTitle:{
        fontSize:17
    },
    titleContainer:{
        flexDirection:"row",
        alignItems:"flex-end"
    },
    txtIndex:{
        color:"#6B7280"
    },
    txtValue:{
        fontSize:18,
        fontWeight:"bold",
        color: Colors.money
    },
    txtCurrency:{
        color:"#6B7280"
    },
    movementContainer:{        
        borderRadius:10,
        paddingVertical:"1%",
        paddingHorizontal:"4%"
    },    
});

export default styles;