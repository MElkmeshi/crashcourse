import { Link } from "expo-router";
import { StatusBar, Text, View } from "react-native";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black ">
      <Text className="color-white">Layout Hello</Text>
      <StatusBar barStyle={"default"} />
      <Link href="/profile"> Go to profile</Link>
    </View>
  );
}
