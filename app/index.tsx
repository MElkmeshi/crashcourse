import { Link } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center font-">
      <Text className="text-xl">Aora!uytrfghjkl</Text>
      <StatusBar barStyle={"default"} />
      <Link style={{ color: "blue" }} className="text-3xl" href="/profile">
        Go to Profile
      </Link>
    </View>
  );
}
