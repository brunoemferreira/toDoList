import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    width: "100%",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#333333",
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    height: 64,
    width: '90%',
    alignItems: "center",
    marginBottom: 5
  },
  checkCard: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  textCard: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: "#F2F2F2",
    width: "70%",
  },
  trashCard: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
