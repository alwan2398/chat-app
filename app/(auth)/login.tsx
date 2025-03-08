import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Image, TouchableOpacity } from "react-native";
export default function login() {
  return (
    <View className="flex-1 bg-white">
      <View className="mt-24 items-center">
        <Image
          source={require("./../../assets/images/logo-auth.png")}
          className="w-36 h-36"
        />
      </View>
      <Text className="text-4xl font-bold text-center uppercase">milyChat</Text>
      <Text className="text-xl font-bold text-gray-600 text-center lowercase">
        Always For anything
      </Text>
      <View className="flex-1 items-center justify-center">
        <Image
          source={require("./../../assets/images/chat-robot.png")}
          className="w-80 h-80 py-10 max-h-[50%]"
          resizeMode="cover"
        />
      </View>
      <View className="w-full py-4 pb-10 items-center">
        <TouchableOpacity className="bg-primary w-10/12 h-16 flex flex-row gap-x-4 items-center justify-center rounded-full">
          <Ionicons name="logo-google" size={24} color="white" />
          <Text className="text-white font-bold text-xl">
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
