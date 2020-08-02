import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
// import NetInfo from "@react-native-community/netinfo";
import MessageBar from "./MessageBar";

const NetInfo = require("@react-native-community/netinfo");
const PropTypes = require("prop-types");

const CheckInternetConnectivity = (props) => {
  const [isConnected, setIsConnected] = useState(true);
  const [notConnectedShown, setNotConnectedShown] = useState(false);

  const duration = props.duration ? props.duration : 5000;
  const style = props.style ? props.style : {};

  const [showBackOnline, setShowBackOnline] = useState(false);
  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      if (isConnected && notConnectedShown) {
        setShowBackOnline(true);
        setTimeout(() => {
          setShowBackOnline(false);
        }, duration);
      } else if (!isConnected) {
        setShowBackOnline(false);
        setNotConnectedShown(true);
      }
    });
    return () => {
      // Unsubscribe
      unsubscribe();
    };
  }, [isConnected]);
  const position = props.position ? props.position : "bottom";
  const connectedMessage = props.connectedMessage
    ? props.connectedMessage
    : "Back Online";
  const connectedTextColor = props.connectedTextColor
    ? props.connectedTextColor
    : "white";
  const connectedBackgroundColor = props.connectedBackgroundColor
    ? props.connectedBackgroundColor
    : "green";
  const notConnectedMessage = props.notConnectedMessage
    ? props.notConnectedMessage
    : "No Connection";
  const notConnectedTextColor = props.notConnectedTextColor
    ? props.notConnectedTextColor
    : "white";
  const notConnectedBackgroundColor = props.notConnectedBackgroundColor
    ? props.notConnectedBackgroundColor
    : "grey";
  return (
    <>
      {position === "bottom" && (
        <View style={{ flex: 100 }}>{props.children}</View>
      )}
      {!isConnected && (
        <MessageBar
          message={notConnectedMessage}
          textColor={notConnectedTextColor}
          backgroundColor={notConnectedBackgroundColor}
          style={style}
        />
      )}
      {showBackOnline && (
        <MessageBar
          message={connectedMessage}
          textColor={connectedTextColor}
          backgroundColor={connectedBackgroundColor}
          style={style}
        />
      )}
      {position === "top" && (
        <View style={{ flex: 100 }}>{props.children}</View>
      )}
    </>
  );
};

CheckInternetConnectivity.propTypes = {
  position: PropTypes.string,
  duration: PropTypes.number,
  style: PropTypes.object,
  connectedMessage: PropTypes.string,
  connectedTextColor: PropTypes.string,
  connectedBackgroundColor: PropTypes.string,
  notConnectedMessage: PropTypes.string,
  notConnectedTextColor: PropTypes.string,
  notConnectedBackgroundColor: PropTypes.string,
};

export default CheckInternetConnectivity;
