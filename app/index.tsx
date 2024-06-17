import { Link } from "expo-router";
import { StatusBar, Text, View } from "react-native";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white ">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <StatusBar barStyle={"default"} />
      <Link style={{ color: "blue" }} href="/profile">
        Go to profile
      </Link>
    </View>
  );
}
