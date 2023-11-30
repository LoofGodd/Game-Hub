import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { FetchGamesData } from "../components/GameGrid"
import { CanceledError } from "axios"
export interface Game {
  id: number
  name: string
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")
  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<FetchGamesData>("/games")
      .then((res) => {
        setGames(res.data.results)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
    return () => controller.abort()
  }, [])
  return { games, error }
}
export default useGames
