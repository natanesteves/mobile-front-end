import PageHeader from '../../components/PageHeader';
import React, { useState } from 'react';


import { View, Image, Text, ScrollView } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoimg from '../../assets/images/logo.png';

import styles from './styles';
import {Feather} from '@expo/vector-icons';
import {  BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';
import TeacherItem from '../../components/TeacherItem';

function TeacherList(){

    const [isfiltersvisible, setisfiltersvisible] = useState(false);
 
    function handletogglevisible(){
        setisfiltersvisible(!isfiltersvisible);
    }

    return( 
    <View style={styles.container}>
         
          
                 <PageHeader title="Profs " headerRigth={<BorderlessButton onPress={handletogglevisible}>
                     <Feather name="filter" size={20} color="#fff"/>
                     </BorderlessButton>}>


                     {isfiltersvisible&&(
                     <View style={styles.searchform}>
                        <Text style={styles.label}>materia</Text>
                        <TextInput
                        placeholderTextColor="#c1bccc" style={styles.input} placeholder="qual q materia"/>
                     
                        <View style={styles.inputgroup}>
                            <View style={styles.inputblock}>
                        <Text style={styles.label}>Dia da semana</Text>
                        <TextInput
                        placeholderTextColor="#c1bccc" style={styles.input}
                        placeholder="qual o dia"
                        />
                            </View>
                            <View style={styles.inputblock}>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput
                        placeholderTextColor="#c1bccc" style={styles.input}
                        placeholder="qual o Horário"
                        />
                            </View>
                        </View>
                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                     </View>
                     )}
                 </PageHeader>
     <ScrollView style={
        styles.teacherlist}
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:26,
        }}>   
     <TeacherItem/>
     <TeacherItem/><TeacherItem/><TeacherItem/><TeacherItem/><TeacherItem/>
     </ScrollView>
    </View>
    );
}

export default TeacherList;