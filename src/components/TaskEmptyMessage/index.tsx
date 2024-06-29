import { Text, Image, View } from "react-native";
import { styles } from "./styles";

export function TaskEmptyMessage() {
  return (
    <View style={styles.container} >
        <Image style={styles.clipboard} source={require("../../img/Clipboard.png")} />
      <Text style={styles.listEmptyTextTop}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.listEmptyTextBottom}>
        Crie tarefas e organize seus itensa fazer
      </Text>
    </View>
  );
}

