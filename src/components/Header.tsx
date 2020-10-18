import React from 'react';

import {useNavigation} from '@react-navigation/native' 

import { View,StyleSheet,Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'

interface HeaderProps {
 title: string;
 IconExit?: boolean;
}

export default function Header({title,IconExit}: HeaderProps) {
 const navigation = useNavigation() 
return (
 <View style={styles.container}>
  <BorderlessButton onPress={navigation.goBack}>
     <Feather name="arrow-left" size={24} color="#15b6d6"/>
  </BorderlessButton>
  <Text style={styles.title}>{title}</Text>
  {IconExit ? (
  <BorderlessButton onPress={() => navigation.navigate('OrphanagesMap')}>
  <Feather name="x" size={24} color="#ff669d"/>
</BorderlessButton>
  ) : (
   <View />
  )}
 </View>
)

}

const styles = StyleSheet.create({
container: {
 padding: 24,
 backgroundColor: '#f9fafc',
 borderBottomWidth: 1,
 borderColor: '#dde3f0',
 paddingTop: 44,

 flexDirection:'row',
 justifyContent: 'space-between',
 alignItems: 'center',
},
title: {
 color: '#8fa7b3',
 fontSize: 16,
}
})