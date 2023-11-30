import { Text } from "@chakra-ui/react"
import useGames, { Game } from "../hooks/useGame"

export interface FetchGamesData {
  count: number
  results: Game[]
}

export default function GameGrid() {
  const { games, error } = useGames()
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}
