import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../components/styles";
import translations from "../../components/translations";

export default function SignInPage({ language }) {
  const navigation = useNavigation();

  // States to handle form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Get translations for the current language
  console.log(translations);
  const t = translations[language] || translations.RU;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t.loginHeading}</Text>

      {/* Grouping email and password inputs in one modern rectangle */}
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
          placeholder={t.passwordPlaceholder}
          placeholderTextColor="#34495E"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={{alignSelf: "flex-start" }}
        >
          <Text style={[styles.buttonText, { marginLeft: 0, color: 'black' }]}>{t.forgotPassword}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.vkButton, { width: "30%", alignSelf: "center" }]}
        >
          <Text style={[styles.buttonText, { marginLeft: 0 }]}>{t.signIn}</Text>
        </TouchableOpacity>
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
          <Text style={styles.buttonText}>{t.signInWithVK}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.telegramButton}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
            }}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>{t.signInWithTelegram}</Text>
        </TouchableOpacity>
      </View>

      {/* Navigate to sign up page */}
      <TouchableOpacity onPress={() => navigation.navigate("SignUpPage")}>
        <Text style={styles.loginText}>{t.signUpPrompt}</Text>
      </TouchableOpacity>
    </View>
  );
}
