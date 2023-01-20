import { View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#09090a",
      }}
    >
      <ActivityIndicator color="#7C3AED" size={45} />
    </View>
  );
};

export default Loading;
