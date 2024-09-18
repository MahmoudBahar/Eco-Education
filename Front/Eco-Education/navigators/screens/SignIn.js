import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../components/styles';

export default function SignInPage() {
  const navigation = useNavigation();

  // States to handle form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login to Explore Moscow</Text>

      {/* Grouping email and password inputs in one modern rectangle */}
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
          placeholder="Password"
          placeholderTextColor="#34495E"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* VK and Telegram buttons */}
      <TouchableOpacity style={styles.vkButton}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg' }}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Login with VK</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.telegramButton}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' }}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Login with Telegram</Text>
      </TouchableOpacity>

      {/* Navigate to sign up page */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
        <Text style={styles.loginText}>
          Don’t have an account yet? Sign up here
        </Text>
      </TouchableOpacity>
    </View>
  );
}
