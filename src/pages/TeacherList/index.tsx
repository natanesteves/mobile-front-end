import PageHeader from '../../components/PageHeader';
import React, { useState } from 'react';


import { View, Image, Text, ScrollView } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoimg from '../../assets/images/logo.png';

import styles from './styles';
import {Feather} from '@expo/vector-icons';
import {  BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

function TeacherList(){
  
    const [isfiltersvisible, setisfiltersvisible] = useState(false);
   
   
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);
    async function handlefiltresubmit(){
    

        const response = await api.get('classes',{
            params:
         {       subject,
                week_day,
                time
         }
        });
        console.log(response.data)
      setTeachers(response.data);
    }
    
    
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
                        value={subject}
                        onChangeText={text=> setSubject(text)}
                        placeholderTextColor="#c1bccc" style={styles.input} placeholder="qual q materia"/>
                     
                        <View style={styles.inputgroup}>
                            <View style={styles.inputblock}>
                        <Text style={styles.label}>Dia da semana</Text>
                        <TextInput
                         value={week_day}
                         onChangeText={number=> setWeek_day(number)}
                        placeholderTextColor="#c1bccc" style={styles.input}
                        placeholder="qual o dia"
                        />
                            </View>
                            <View style={styles.inputblock}>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput
                         value={time}
                         onChangeText={text=> setTime(text)}
                        placeholderTextColor="#c1bccc" style={styles.input}
                        placeholder="qual o Horário"
                        />
                            </View>
                        </View>
                        <RectButton onPress={handlefiltresubmit} style={styles.submitButton}>
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
        {teachers.map((teacher: Teacher)=> {
            return <TeacherItem key={teacher.id} teacher={teacher}/>
            
        })}   
     
    
     </ScrollView>
    </View>
    );
}

export default TeacherList;