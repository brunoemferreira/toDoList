import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

type Props = {
  taskText: String;
  onRemove: () => void;
};

export function Card({ taskText, onRemove }: Props) {
  return (
    <View style={styles.form}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.checkCard}>
          <Image source={require("../../img/check.png")} />
        </TouchableOpacity>
        <Text style={styles.textCard}>{taskText}</Text>
        <TouchableOpacity style={styles.trashCard} onPress={onRemove}>
          <Image source={require("../../img/trash.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
