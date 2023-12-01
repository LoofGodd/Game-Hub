import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

interface Genre {
  id: number
  name: string
}
export interface FetchGenreData {
  count: number
  results: Genre[]
}
const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    apiClient
      .get<FetchGenreData>("/genres")
      .then((res) => {
        setGenres(res.data.results)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
    return () => controller.abort()
  }, [])
  return { genres, error, isLoading }
}
export default useGenre
