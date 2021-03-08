import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor:'#e6e6f0',
        borderRadius:8,
        marginBottom: 16,
        overflow: 'hidden'
    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        padding: 24,
    },
    avatar:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },
    profileinfo:{
        marginLeft: 16
    },
    name:{
        color: '#6a6180',
        fontSize:22,
        marginTop: 20,
    },
    subject:{
        color: '#6a6180',
        fontSize:12,
        marginTop:4,
    },
    bio:{
        marginHorizontal: 24,
        fontSize: 16,
        lineHeight: 24,
        color: '#6a6180'
    },
    price:{
        color: '#6a6180',
        fontSize:14,
    },
    footer:{
        backgroundColor:'#fafafc',
        padding:24,
        alignItems:'center'
    },
    priceValue:{
        color:'#8257e5',
        fontSize: 16,
    },
    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 16,
    },
    favoriteButton:{
        backgroundColor:'#8257e6',
        width:56,
        height:56,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    contactButton:{
        backgroundColor:'#04d361',
        flex:1,
        height:56,
        borderRadius:8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
     },
     contactButtonText:{
         color: '#fff',
         fontSize: 16,
         marginLeft: 16,
     },
});

export default styles;