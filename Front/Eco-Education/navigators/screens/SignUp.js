import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../components/styles";
import translations from "../../components/translations";

export default function SignUpPage({ language }) {
  const navigation = useNavigation();

  // States to handle form inputs
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Get translations for the current language
  const t = translations[language] || translations.US; // Default to US if language is not found

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t.signUpHeading}</Text>

      {/* Grouping all inputs in one modern rectangle */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={t.emailPlaceholder}
          placeholderTextColor="#34495E"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder={t.namePlaceholder}
          placeholderTextColor="#34495E"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder={t.birthdatePlaceholder}
          placeholderTextColor="#34495E"
          value={birthdate}
          onChangeText={setBirthdate}
        />
        <TextInput
          style={styles.input}
          placeholder={t.passwordPlaceholder}
          placeholderTextColor="#34495E"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder={t.confirmPasswordPlaceholder}
          placeholderTextColor="#34495E"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={[styles.vkButton, { width: "30%", alignSelf: "center" }]}
        >
          <Text style={[styles.buttonText, { marginLeft: 0 }]}>{t.signUp}</Text>
        </TouchableOpacity>
      </View>

      {/* VK and Telegram buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        <TouchableOpacity style={styles.vkButton}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg",
            }}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>{t.signUpWithVK}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.telegramButton}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
            }}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>{t.signUpWithTelegram}</Text>
        </TouchableOpacity>
      </View>

      {/* Navigate to login */}
      <TouchableOpacity onPress={() => navigation.navigate("SignInPage")}>
        <Text style={styles.loginText}>{t.signInPrompt}</Text>
      </TouchableOpacity>
    </View>
  );
}
