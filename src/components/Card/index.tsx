import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

type Props = {
  taskText: String;
  onRemove: () => void;
};

export function Card({ taskText, onRemove }: Props) {
  const [isTextUnderlined, setIsTextUnderlined] = useState(false);
  const [isImageChanged, setIsImageChanged] = useState(false);

  return (
    <View style={styles.form}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.checkCard}
          onPress={() => {
            setIsTextUnderlined(!isTextUnderlined);
            setIsImageChanged(!isImageChanged);
          }}
        >
          <Image
            source={
              isImageChanged
                ? require("../../img/checked.png")
                : require("../../img/check.png")
            }
            // outras props da imagem
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.textCard,
            isTextUnderlined ? styles.underlinedText : null,
          ]}
        >
          {taskText}
        </Text>
        <TouchableOpacity style={styles.trashCard} onPress={onRemove}>
          <Image source={require("../../img/trash.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
