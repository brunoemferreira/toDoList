import { useState } from "react";

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./styles";

export function Home() {
  let [inputText, setInputText] = useState("");

  function CalculateLengthText(text: string) {
    if (text.length <= 99) {
      setInputText(text);
    } else {
      // Exiba o alerta aqui
      Alert.alert("Erro", "Limite de 99 caracteres atingido!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image style={styles.logo} source={require("../img/logo.png")} />
      </View>
      <View style={styles.containerCenter}>
        <TextInput
          style={styles.dataInput}
          placeholderTextColor="#808080"
          placeholder="Adicione uma nova tarefa"
          onChangeText={(text) => CalculateLengthText(text)}
        />
        <TouchableOpacity style={styles.button}>
          <Image source={require("../img/button.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerContent}>
        <View style={styles.containerValues}>
          <View style={styles.containerCreated}>
            <Text style={styles.textCreated}>Criadas</Text>
            <Text style={styles.textQtdecreated}>1</Text>
          </View>
          <View style={styles.containerCompleted}>
            <Text style={styles.textCompleted}>Concluídas</Text>
            <Text style={styles.textQtdeCompleted}>2</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.form}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.checkCard}>
              <Image source={require("../img/check.png")} />
            </TouchableOpacity>
            <Text style={styles.textCard}>{inputText}</Text>
            <TouchableOpacity style={styles.trashCard}>
              <Image source={require("../img/trash.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
