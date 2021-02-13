import React from 'react';
import{ View} from 'react-native';
import PageHeader from '../../components/PageHeader';

import style from './styles';

function Favorites(){
    return(<View style={style.container}>
        <PageHeader title="Profs fav"/>
    </View>
    );
    }

export default Favorites;