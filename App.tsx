// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';

export type RootStackParamList = {
  Login: undefined;
  OrdersList: undefined;
  OrderDetail: { orderId: string };
  QrPayment: { orderId: string };
  ProofOfDelivery: { orderId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="OrdersList" component={OrdersListScreen} options={{ title: 'My Orders' }} />
        <Stack.Screen name="OrderDetail" component={OrderDetailScreen} options={{ title: 'Order Detail' }} />
        <Stack.Screen name="QrPayment" component={QrPaymentScreen} options={{ title: 'Collect Payment' }} />
        <Stack.Screen name="ProofOfDelivery" component={ProofOfDeliveryScreen} options={{ title: 'Proof of Delivery' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}