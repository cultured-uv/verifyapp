import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Verify Profile',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verify-organization-email"
          options={{
            title: 'Verify Organization Email',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verifypage2"
          options={{
            title: 'Verify Page 2',
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
