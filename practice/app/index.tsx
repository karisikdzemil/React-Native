import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Djemsi React Native</Text>
      <Link href='/login'>Djemsijev Login</Link>
    </View>
  );
}
