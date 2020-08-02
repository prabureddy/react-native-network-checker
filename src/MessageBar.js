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
  screen: { marginTop: 0, flex: 3 },
  center: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MessageBar;
