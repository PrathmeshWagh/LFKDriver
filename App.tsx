import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigation from "./src/layouts/navigation/AppNavigation";
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { LogLevel, OneSignal } from 'react-native-onesignal';


export default function App() {
    OneSignal.initialize("6b1f8478-acda-4685-8af2-c9a26b29d9ce");
    OneSignal.Notifications.requestPermission(true);
    OneSignal.Notifications.addEventListener('click', (event) => {
        console.log('OneSignal: notification clicked:', event);
    });

   
    return (
        <Provider store={store}>
            <PaperProvider>
                <NavigationContainer>
                    <AppNavigation />
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    );
}
LogBox.ignoreAllLogs()