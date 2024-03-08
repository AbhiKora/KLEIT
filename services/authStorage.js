import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'auth_data';

export const saveAuthData = async (email, uid) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ email, uid }));
    } catch (error) {
        console.error('Failed to save auth data:', error);
    }
};

export const getAuthData = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Failed to get auth data:', error);
        return null;
    }
};

export const clearAuthData = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Failed to clear auth data:', error);
    }
};
