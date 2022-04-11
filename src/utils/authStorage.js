import AsyncStorage from '@react-native-async-storage/async-storage';

class authStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(
      `${this.namespace}:access-token`,
    );

    return token
  }

  async setAccessToken(token) {
    await AsyncStorage.setItem(`${this.namespace}:access-token`, token);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:access-token`);
  }
}

export default authStorage;