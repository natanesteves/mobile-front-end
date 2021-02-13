import PageHeader from '../../components/PageHeader';
import React from 'react';


import { View, Image, Text } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoimg from '../../assets/images/logo.png';

import styles from './styles';
import {  BorderlessButton, RectButton } from 'react-native-gesture-handler';

function TeacherList(){


 

    return( 
    <View style={styles.container}>
         
          
                 <PageHeader title="Profs "/>
        
     
     
    </View>
    );
}

export default TeacherList;