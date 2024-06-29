import { useState } from "react";

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Card } from "../components/Card";
import { TaskEmptyMessage } from "../components/TaskEmptyMessage";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

export function Home() {
  const [fontsLoaded] = useFonts({ Inter_400Regular });
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskText, setTaskText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [countCreatedTask, setCountCreatedTask] = useState(0);
  const [countFinishedTask, setCountFinishedTask] = useState(0);

  if (!fontsLoaded) {
    return null;
  }

  function handleSumTasks() {
    setCountCreatedTask(countCreatedTask + 1);
  }

  function handleMinTasks() {
    setCountCreatedTask(countCreatedTask - 1);
  }

  function CalculateLengthText(text: string) {
    if (text.length <= 99) {
      setTaskText(text);
    } else {
      Alert.alert("Erro", "Limite de 99 caracteres atingido!");
    }
  }

  function HandleTaskAdd() {
    if (tasks.includes(taskText)) {
      return Alert.alert(
        "Tarefa já Existe",
        "Já existe uma tarefa com esse texto"
      );
    }
    setTasks((prevState) => [...prevState, taskText]);
    handleSumTasks();
    setTaskText("");
  }

  function HandleTaskDelete(task: string) {
    Alert.alert("Remover", `Remover a Tarefa: ${task}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((item) => item !== task)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <>
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={require("../img/logo.png")} />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={[
            styles.dataInput,
            { borderColor: isFocused ? "#5E60CE" : "#0D0D0D" },
          ]}
          placeholderTextColor="#808080"
          placeholder="Adicione uma nova tarefa"
          onChangeText={setTaskText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={taskText}
        />
        <TouchableOpacity style={styles.button} onPress={HandleTaskAdd}>
          <Image source={require("../img/button.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.countContainer}>
        <View style={styles.containerCreated}>
          <Text style={styles.textCreated}>Criadas</Text>
          <Text style={styles.textQtdecreated}>{countCreatedTask}</Text>
        </View>
        <View style={styles.containerCompleted}>
          <Text style={styles.textCompleted}>Concluídas</Text>
          <Text style={styles.textQtdeCompleted}>{countFinishedTask}</Text>
        </View>
      </View>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
      </View>
      <FlatList
        style={styles.flatList}
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Card
            key={item}
            taskText={item}
            onRemove={() => HandleTaskDelete(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <TaskEmptyMessage />}
      />
    </>
  );
}
