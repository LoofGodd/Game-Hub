import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGame"
import GameCard from "./GameCard"
import SkeletonGameCard from "./SkeletonGameCard"
import GameCardContainer from "./GameCardContainer"
import { Genre } from "../hooks/useGenre"
import { Platform } from "../hooks/usePlatforms"
interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platform | null
}

export default function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform)
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <SkeletonGameCard />
            </GameCardContainer>
          ))}
        {data?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}
