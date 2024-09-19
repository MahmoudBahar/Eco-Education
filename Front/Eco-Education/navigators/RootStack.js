import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInPage from "./screens/SignIn";
import SignUpPage from "./screens/SignUp";
import LeaderboardPage from "./screens/Leaderboard";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import CountryFlag from "react-native-country-flag";
import ProfilePage from "./screens/Profile";
import TabNavigator from "./TabNavigation";
import RedeemPage from "./screens/Redeem";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  const [isSyncingOnline, setIsSyncingOnline] = useState(false);
  const [isSyncingOffline, setIsSyncingOffline] = useState(false);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [language, setLanguage] = useState("RU");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "US" ? "RU" : "US"));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigation"
        screenOptions={{
          headerTitle: "",
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={toggleLanguage}
              style={{
                marginRight: 15,
                borderColor: "black",
                borderWidth: 0.5,
                borderRadius: 5,
              }}
            >
              <CountryFlag isoCode={language} size={25} />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Group
          screenOptions={({ navigation }) => ({
            headerShadowVisible: true,
            headerLeft: () =>
              isLoggedIn ? (
                <TouchableOpacity
                  style={{
                    marginLeft: 15,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    navigation.navigate("RedeemPage");
                  }}
                >
                  <FontAwesome6 name="coins" size={24} color="black" />
                  <Text> 100 </Text>
                  <Text>{language === "US" ? "Points" : "Баллы"}</Text>
                </TouchableOpacity>
              ) : null,
            headerTitleAlign: "center",
            headerTitle: () => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
                onPress={() => {
                  navigation.navigate("TabNavigation");
                }}
              >
                <Text style={{ fontSize: 28, textAlign: "center" }}>
                  Eco-Education
                </Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View
                style={{
                  marginRight: 15,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity style={{ marginRight: 15 }}>
                  <Ionicons
                    name="person-circle-sharp"
                    size={32}
                    color="black"
                    onPress={() => {
                      navigation.navigate("SignUpPage");
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={toggleLanguage}
                  style={{
                    borderColor: "black",
                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}
                >
                  <CountryFlag isoCode={language} size={25} />
                </TouchableOpacity>
              </View>
            ),
          })}
        >
          <Stack.Screen name="TabNavigation">
            {(props) => <TabNavigator {...props} language={language} />}
          </Stack.Screen>
          <Stack.Screen name="ProfilePage">
            {(props) => <ProfilePage {...props} language={language} />}
          </Stack.Screen>
          <Stack.Screen name="RedeemPage">
            {(props) => <RedeemPage {...props} language={language} />}
          </Stack.Screen>
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="SignUpPage">
            {(props) => <SignUpPage {...props} language={language} />}
          </Stack.Screen>
          <Stack.Screen name="SignInPage">
            {(props) => <SignInPage {...props} language={language} />}
          </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
