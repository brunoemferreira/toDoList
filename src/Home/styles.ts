import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  containerHeader: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    paddingTop: 30,
  },
  containerCenter: {
    zIndex: 1,
    top: -20,
    flexDirection: "row",
    width: "100%",
  },
  logo: {},
  dataInput: {
    borderColor: "#5E60CE",
    flex: 1,
    fontSize: 16,
    color: "#808080",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 52,
    width: 70,
    marginRight: 4,
    marginLeft: 20,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  containerContent: {
    top: -45,
    width: "100%",
    height: "95%",
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },
  containerValues: {
    top: 50,
    width: "88%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  containerCreated: {
    flexDirection: "row",
  },
  textCreated: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4EA8DE",
    paddingRight: 10,
  },
  textQtdecreated: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#D9D9D9",
    backgroundColor: "#333333",
    borderRadius: 10,
    width: 40,
    height: 19,
    textAlign: "center",
  },
  containerCompleted: {
    flexDirection: "row",
  },
  textCompleted: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8284FA",
    paddingRight: 10,
  },
  textQtdeCompleted: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#D9D9D9",
    backgroundColor: "#333333",
    borderRadius: 10,
    width: 40,
    height: 19,
    textAlign: "center",
  },
  separator: {
    top: 70,
    height: 1,
    width: "88%",
    backgroundColor: "#333333",
  },
  form: {
    width: '88%',
    top: 90,
  },
  card: {
    backgroundColor: '#333333',
    borderColor:'#808080',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 64,
    width: '100%',
    alignItems: "center",
  },
  checkCard:{
    paddingLeft: 10,
    paddingRight: 10,
  },
  textCard:{
   fontSize: 14,
   color: '#F2F2F2',
   width:'70%'
  },
  trashCard:{
    paddingLeft: 10,
    paddingRight: 10,
  }
});
