import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{title: 'Home'}}/>
      <Stack.Screen name="login" options={{title: 'Login'}}/>
  </Stack>;
}
