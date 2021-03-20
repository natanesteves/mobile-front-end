import React from 'react';
import{ ScrollView, View} from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import style from './styles';

function Favorites(){
    return(<View style={style.container}>
        <PageHeader title="Profs fav"/>
        <ScrollView style={
        style.teacherlist}
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:26,
        }}>   
     <TeacherItem/>
     <TeacherItem/>
     <TeacherItem/>
     <TeacherItem/>
     <TeacherItem/>
     <TeacherItem/>
     </ScrollView>
    </View>
    );
    }

export default Favorites;

