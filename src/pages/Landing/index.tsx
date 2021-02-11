
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

import landingimg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveclasses from '../../assets/images/icons/give-classes.png';
import heartIvon from '../../assets/images/icons/heart.png';
function Landing(){
    const navigation = useNavigation();

    function handleNavigationToGiveClassesPage(){
        navigation.navigate('GiveClasses');
    }

    return(
       <View style={styles.container}>
            <Image source={landingimg} style={styles.banner} />
       

            <Text style={styles.title}>
            Seja bem vindo,{'\n'}
                <Text style={styles.titleBold}>
                    o que voce deseja?
                </Text>
            </Text>
            
        <View style={styles.buttonsContainer}>
            <RectButton style={ [styles.button, styles.buttonPrimary]}>
                <Image source={studyIcon}/>
                <Text style={styles.buttonText} >Estudar</Text>
            </RectButton>


            <RectButton onPress={handleNavigationToGiveClassesPage} 
            style={[styles.button, styles.buttonSecondary]}>
                <Image source={giveclasses}/>
                <Text style={styles.buttonText} >Dar Aulas</Text>
            </RectButton>
        </View>
            <Text style={styles.Connections}>
                um total ai {' '}
                <Image source={heartIvon}/>
            </Text>
        </View>
    );
}

export default Landing;
