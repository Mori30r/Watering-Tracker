import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { Text, View, StyleSheet, Alert } from "react-native";

const CameraScreen = () => {
  const [canStartCamera, setCanStartCamera] = useState(null);
  const startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      setCanStartCamera(true);
    } else {
      setCanStartCamera(false);
      Alert.alert("Access Denied");
    }
  };

  useEffect(() => {
    startCamera();
  }, []);

  let camera;
  return canStartCamera ? (
    <Camera ref={(r) => (camera = r)} style={styles.camera}></Camera>
  ) : (
    <View style={styles.container}>
      <Text>Access Denied</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  camera: {
    flex: 1,
  },
});

export default CameraScreen;
