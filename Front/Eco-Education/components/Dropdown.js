import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
const deviceHeight = Dimensions.get("screen").height;
const Dropdown = ({ data, onSelect, placeHolder, value }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = (item) => {
    setIsVisible(false);
    onSelect(item);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          overflow: "hidden",
          borderRadius: 10,
          flexGrow: 1,
        }}
      >
        <Pressable
          style={styles.dropdown}
          onPress={() => setIsVisible(true)}
          android_ripple={{ color: "#2ec089" }}
        >
          <Text style={styles.rowText}>
            {value !== "" ? value : placeHolder ? placeHolder : ""}
          </Text>
        </Pressable>
      </View>
      <Modal
        isVisible={isVisible}
        statusBarTranslucent={true}
        useNativeDriverForBackdrop={true}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        deviceHeight={deviceHeight}
        onRequestClose={() => {
          setIsVisible(false);
        }}
        onBackdropPress={() => setIsVisible(false)}
      >
        <View style={styles.modalContent}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  borderWidth: value == item ? 1 : 0,
                  borderColor: "#2ec089",
                }}
              >
                <Pressable
                  onPress={() => handleSelect(item)}
                  style={styles.option}
                  android_ripple={{ color: "#2ec089" }}
                >
                  <Text
                    style={{
                      flex: 1,
                      textAlign: "center",
                      textShadowOffset: { width: 0.5, height: 0.5 },
                      textShadowRadius: 1,
                      fontSize: 16,
                      color: "black",
                    }}
                  >
                    {item}
                  </Text>
                </Pressable>
              </View>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    flex: 1,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  option: {
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  rowText: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    fontSize: 16,
    color: "black",
  },
});

export default Dropdown;
