import React from "react";
import { View, Text, Image, TouchableOpacity,FlatList } from "react-native";
import {useNavigation} from '@react-navigation/native'
import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Incidents() {
  const  navigation = useNavigation();

function navigateToDetail () {navigation.navigate('Detail')}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> 0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList 
      style={styles.incidentsList}
      data ={[1,2,3]} 
      showsVerticalScrollIndicator ={false}
      keyExtractor = {incident => String (incident)}
      renderItem ={() => (
        <View style={styles.incidents}>
          <Text style={styles.incedentProperty}> ONG:</Text>
          <Text style={styles.incendentValue}> APAD</Text>
          <Text style={styles.incedentProperty}> CASO:</Text>
          <Text style={styles.incendentValue}> Cadelinha atropelada</Text>
          <Text style={styles.incedentProperty}> Valor:</Text>
          <Text style={styles.incendentValue}> R$ 120,00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
        </View>
      )}/>
        
    </View>
  );
}
