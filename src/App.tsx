import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import PlatformList from "./components/PlatformList"
import { Platform } from "./hooks/usePlatforms"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
}

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={2}>
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformList
          onSelectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}
