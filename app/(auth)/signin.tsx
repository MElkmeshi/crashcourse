import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";
import FormFeild from "@/components/FormFeild";
import CustomButton from "@/components/CustomButton";

interface signinState {
  email: string;
  password: string;
}

const SignIn = () => {
  const [form, setFrom] = useState<signinState>({
    email: "",
    password: "",
  } as signinState);
  const submit = () => {
    console.log("Sign In");
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-ful px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>

          <FormFeild
            title="ُEmail"
            plassholder="Enter your email"
            value={form.email}
            handleChangeText={(e) => setFrom((prev) => ({ ...prev, email: e }))}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormFeild
            title="Password"
            plassholder="Enter your password"
            value={form.password}
            handleChangeText={(e) =>
              setFrom((prev) => ({ ...prev, password: e }))
            }
            otherStyles="mt-7"
          />
        </View>

        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
