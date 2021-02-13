import React from 'react';
import { View , ImageBackground,Text} from 'react-native';
import styles from './styles';

import giveclassesBgimage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function GiveClasses(){

    const {goBack}= useNavigation();

    function handleNavigategoBack(){
        goBack();
    }

return( <View style={styles.container}>
    
        <ImageBackground source={giveclassesBgimage} style={styles.content}>

            <Text style={styles.title}>quer ser um prof</Text>
            <Text style={styles.description}>para se cadastrar voce precisa se cadastrar na nossa plataforma web</Text>
        </ImageBackground>

        <RectButton onPress={handleNavigategoBack} style={styles.okButton}>
            <Text style={styles.okButtontext}>Tudo bem</Text>
        </RectButton>

    </View >
);
}

export default GiveClasses;