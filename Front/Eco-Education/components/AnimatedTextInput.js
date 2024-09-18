import React, { useRef, forwardRef } from "react";
import { Animated, TextInput, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

// Wrap the component with React.forwardRef
const AnimatedTextInput = forwardRef(({
  unFocusedColor = 'grey',
  FocusedColor = '#2ec089',
  duration = 300,
  inputContainerStyle,
  ...rest
}, ref) => {
  const borderColorAnim = useRef(new Animated.Value(0)).current;
  const localInputRef = useRef(null);

  // Forward ref to the TextInput
  const handleFocus = () => {
    Animated.timing(borderColorAnim, {
      toValue: 1, // animate to focused color
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(borderColorAnim, {
      toValue: 0, // animate to unfocused color
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  const borderColor = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [unFocusedColor, FocusedColor], // unfocused and focused colors
  });

  // Merge ref with the local ref
  React.useImperativeHandle(ref, () => ({
    focus: () => localInputRef.current?.focus(),
    blur: () => localInputRef.current?.blur(),
    ...localInputRef.current,
  }));

  return (
    <Animated.View style={[inputContainerStyle, { borderColor }]}>
      <TextInput
        ref={localInputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </Animated.View>
  );
});

// Define prop types and default props
AnimatedTextInput.propTypes = {
  unFocusedColor: PropTypes.string,
  FocusedColor: PropTypes.string,
  duration: PropTypes.number,
};

export default AnimatedTextInput;
