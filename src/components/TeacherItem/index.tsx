import React from 'react';
import {Image, Text, View} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
    <View style={styles.container}>
        <View style={styles.profile}>
             <Image 
            style={styles.avatar}
            source={{uri: 'https://github.com/natanesteves.png'}}
            /> 
            <View style={styles.profileinfo}>
                <Text style={styles.name}>Natan.Esteves</Text>
                <Text style={styles.subject}>Fidica</Text>
            </View>
        </View>
        <Text style={styles.bio}>
            aula de fisica {'\n'}{'\n'}
            e outras paradas
        </Text>

        <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora{' '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
            </View>
        
            <View style={styles.buttonsContainer}>
               <RectButton style ={styles.favoriteButton, styles.favorited}>
                   {/* <Image
                   source={heartOutlineIcon}
                   /> */}
                   <Image
                   source={unfavoriteIcon}
                   />
               </RectButton>
               <RectButton style ={styles.contactButton}>
                   <Image
                   source={whatsappIcon}
                   />
                  <Text style={styles.contactButtonText}>Entrar em contato</Text>
               </RectButton>
              
            </View>
    </View>
    )
}

export default TeacherItem;