import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY_TEMA } from "@utils/appConfig";


export function storageTheme() {

  async function BuscarTheme() {
    try {
      const storage = await AsyncStorage.getItem(KEY_TEMA)
      const tema: string = storage ? JSON.parse(storage) : 'light'

      return tema;
    } catch (error) {
      console.log(error)
    }
  }

  async function AlterarTheme(tema: string) {
    await AsyncStorage.setItem(KEY_TEMA, tema);
  }

  return {
    BuscarTheme,
    AlterarTheme
  }
}

