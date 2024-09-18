import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function SignInPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Explore Moscow</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF0F1', // Light grey background
  },
  heading: {
    fontSize: 24,
    marginBottom: 40,
    color: '#34495E', // Dark grey text
    fontWeight: 'bold',
  },
  vkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4C75A3', // VK official color
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center',
  },
  telegramButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0088cc', // Telegram official color
    padding: 15,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
