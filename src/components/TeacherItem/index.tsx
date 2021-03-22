import React from 'react';
import {Image, Text, View} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export interface Teacher{
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;
    
}

interface TeacherItemProps{
    teacher: Teacher;
}

 const TeacherItem:React.FC<TeacherItemProps> = ({teacher}) => {
    return (
    <View style={styles.container}>
        <View style={styles.profile}>
            
            <View style={styles.profileinfo}>
                <Text style={styles.name}>{teacher.name}</Text>
                <Text style={styles.subject}>{teacher.subject}</Text>
            </View>
        </View>
        <Text style={styles.bio}>
            {teacher.bio}
        </Text>

        <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora{' '}
                    <Text style={styles.priceValue}>{teacher.cost}</Text>
                </Text>
            </View>
        
            <View style={styles.buttonsContainer}>
               <RectButton style ={[styles.favoriteButton, styles.favorited]}>
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