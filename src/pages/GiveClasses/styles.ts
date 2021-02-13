import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#8257E5',
        justifyContent: 'center',
        padding: 40,
    },

    content:{
        flex:1,
        justifyContent: 'center'
    },
    title:{
        
        color: '#fff',
        fontSize: 32,
        lineHeight:37,
        maxWidth:180,
    },
    description:{

    },
    okButton:{
        marginVertical:40,
        backgroundColor: '#04d336',
        height:  50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8
    },
    okButtontext:{
        color: '#fff',
        fontSize: 16,
        
    },
  
});

export default styles;