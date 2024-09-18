// Purpose: Define the root navigator for the app.
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import temp from "./screens/temp";
import { Pressable, Alert, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  const [isSyncingOnline, setIsSyncingOnline] = React.useState(false);
  const [isSyncingOffline, setIsSyncingOffline] = React.useState(false);
  const [shouldRefresh, setShouldRefresh] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  console.log("Start");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="temp"
              component={temp}
              options={{
                headerRight: () => (
                  <Pressable
                    onPress={() => {
                      handleLogout();
                    }}
                  >
                    <MaterialIcons name="logout" size={24} color="black" />
                  </Pressable>
                ),
              }}
            />
          </Stack.Group>
        )}
        {/* <Stack.Group>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerRight: () => (
                <Pressable
                  onPress={() => {
                    handleLogout();
                  }}
                >
                  <MaterialIcons name="logout" size={24} color="black" />
                </Pressable>
              ),
            }}
          />
        </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
