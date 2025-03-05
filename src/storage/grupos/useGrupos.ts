import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/appError";

const KEY_GRUPOS = '@igniteTeams:grupos'
const KEY_JOGADORES = '@igniteTeams:jogadores'

export function useGrupos() {
  async function BuscarGrupos() {
    try {
      const storage = await AsyncStorage.getItem(KEY_GRUPOS)

      const grupos: string[] = storage ? JSON.parse(storage) : []
      return grupos

    } catch (error) {
      throw error;
    }
  }

  async function CriarGrupo(nomeGrupo: string) {
    try {
      const listaGrupo = await BuscarGrupos()

      const verificaTurmaExistente = listaGrupo.includes(nomeGrupo)

      if (verificaTurmaExistente) {
        throw new AppError('já existe um grupo cadastrado com esse nome.')
      }
      const storage = JSON.stringify([...listaGrupo, nomeGrupo])

      await AsyncStorage.setItem(KEY_GRUPOS, storage)

    } catch (error) {
      throw error;
    }
  }

  async function RemoverGrupoPorNome(nomeGrupo: string) {
    const storage = await BuscarGrupos()
    const filtro = storage.filter(gp => gp !== nomeGrupo)

    await AsyncStorage.setItem(KEY_GRUPOS, JSON.stringify(filtro))
    await AsyncStorage.removeItem(`${KEY_JOGADORES}-${nomeGrupo}`)
  }

  return {
    BuscarGrupos,
    CriarGrupo,
    RemoverGrupoPorNome
  }

}
