import PageHeader from '../../components/PageHeader';
import React from 'react';


import { View, Image, Text, ScrollView } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoimg from '../../assets/images/logo.png';

import styles from './styles';
import {  BorderlessButton, RectButton } from 'react-native-gesture-handler';
import TeacherItem from '../../components/TeacherItem';

function TeacherList(){


 

    return( 
    <View style={styles.container}>
         
          
                 <PageHeader title="Profs "/>
     <ScrollView>   
     <TeacherItem/>
     <TeacherItem/><TeacherItem/><TeacherItem/><TeacherItem/><TeacherItem/>
     </ScrollView>
    </View>
    );
}

export default TeacherList;