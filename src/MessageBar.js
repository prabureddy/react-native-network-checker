import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageBar = (props) => {
  return (
    <View
      style={{
        ...styles.screen,
        ...props.style,
        backgroundColor: props.backgroundColor,
      }}
    >
      <View style={styles.center}>
        <Text style={{ color: props.textColor }}>{props.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 0.03,
  },
  center: {
    paddingVertical: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MessageBar;
