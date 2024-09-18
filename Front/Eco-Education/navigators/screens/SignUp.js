import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../components/styles";

export default function SignUpPage() {
  const navigation = useNavigation();

  // States to handle form inputs
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Join Explore Moscow</Text>

      {/* Grouping all inputs in one modern rectangle */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#34495E"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#34495E"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Birthdate (YYYY-MM-DD)"
          placeholderTextColor="#34495E"
          value={birthdate}
          onChangeText={setBirthdate}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#34495E"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#34495E"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* VK and Telegram buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "30%",
        }}
      >
        <TouchableOpacity style={styles.vkButton}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg",
            }}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Signup with VK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.telegramButton}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
            }}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Signup with Telegram</Text>
        </TouchableOpacity>
      </View>

      {/* Navigate to login */}
      <TouchableOpacity onPress={() => navigation.navigate("SignInPage")}>
        <Text style={styles.loginText}>
          You already have an account? Login here
        </Text>
      </TouchableOpacity>
    </View>
  );
}
