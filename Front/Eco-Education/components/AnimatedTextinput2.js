import React, { useState, useRef, useEffect } from 'react';
import { Animated, TextInput, StyleSheet, View } from 'react-native';

const TextField = ({ placeholder, value, onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false);
  const placeholderAnim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(placeholderAnim, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false, // Change to true if you're animating transforms
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: placeholderAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [14, -6], // Adjust to position at the border
    }),
    fontSize: placeholderAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    backgroundColor: 'white', // Add background color to avoid text overlap
    paddingHorizontal: 2, // Add padding for better aesthetics
    color: placeholderAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>
        {placeholder}
      </Animated.Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginBottom: 20,
    position: 'relative', // Ensure that the label stays relative to the container
  },
  input: {
    height: 40,
    borderWidth: 1, // Border for TextInput
    borderColor: '#000', // Border color
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

export default TextField;
