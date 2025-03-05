import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/appError";
import { JogadoresDTO } from "./jogadoresDto";

const KEY_STORAGE = '@igniteTeams:jogadores'

export function useJogadores() {
  async function BuscarJogadoresNoGrupo(nomeGrupo: string) {
    try {
      const storage = await AsyncStorage.getItem(`${KEY_STORAGE}-${nomeGrupo}`)

      const jogadores: JogadoresDTO[] = storage ? JSON.parse(storage) : []
      return jogadores;

    } catch (error) {
      throw error;
    }
  }

  async function InserirJogadoresNoGrupo(jogador: JogadoresDTO, nomeGrupo: string) {
    try {
      const listaJogadores = await BuscarJogadoresNoGrupo(nomeGrupo)

      const verificaTurmaExistente = listaJogadores.filter(j => j.nome === jogador.nome)

      if (verificaTurmaExistente.length > 0) {
        throw new AppError('já existe um jogador cadastrado com esse nome.')
      }
      const storage = JSON.stringify([...listaJogadores, jogador])

      await AsyncStorage.setItem(`${KEY_STORAGE}-${nomeGrupo}`, storage)

    } catch (error) {
      throw error;
    }
  }

  async function BuscarJogadoresPorGrupoETime(nomeGrupo: string, time: string) {
    try {
      const storage = await BuscarJogadoresNoGrupo(nomeGrupo)

      const jogadores = storage.filter(j => j.time === time)
      return jogadores;

    } catch (error) {
      throw error;
    }
  }

  async function RemoverJogadorPorGrupoETime(nomeJogador: string, nomeGrupo: string) {
    try {
      const storage = await BuscarJogadoresNoGrupo(nomeGrupo)

      const filtro = storage.filter(j => j.nome !== nomeJogador)

      await AsyncStorage.setItem(`${KEY_STORAGE}-${nomeGrupo}`, JSON.stringify(filtro))

    } catch (error) {
      throw error;
    }


  }

  return {
    BuscarJogadoresNoGrupo,
    InserirJogadoresNoGrupo,
    BuscarJogadoresPorGrupoETime,
    RemoverJogadorPorGrupoETime
  }

}
