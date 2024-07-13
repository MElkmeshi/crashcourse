import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";

import { icons } from "@/constants";

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) =>
              TabIcon({
                icon: icons.home,
                color,
                name: "Home",
                focused,
              }),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) =>
              TabIcon({
                icon: icons.bookmark,
                color,
                name: "Bookmark",
                focused,
              }),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) =>
              TabIcon({
                icon: icons.plus,
                color,
                name: "create",
                focused,
              }),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) =>
              TabIcon({
                icon: icons.profile,
                color,
                name: "Profile",
                focused,
              }),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
