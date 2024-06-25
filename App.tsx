import { StatusBar } from "react-native";
import { Home } from "./src/Home";

export default function App() {
  return (
    <>
      <StatusBar 
         barStyle='light-content'
         backgroundColor='#0D0D0D'
         />
      <Home />
    </>
  );
}