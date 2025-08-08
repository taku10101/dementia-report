import { View, Text, H1 } from 'tamagui';

export default function HomeScreen() {
  return (
    <View flex={1} padding="$4" justifyContent="center" alignItems="center">
      <H1>Home Screen</H1>
      <Text>Welcome to the Tamagui-powered Home Screen!</Text>
    </View>
  );
}
