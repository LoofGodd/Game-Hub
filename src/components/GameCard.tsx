import { Game } from "../hooks/useGame"
import { Card, Heading, Image } from "@chakra-ui/react"
interface Props {
  game: Game
}
export default function GameCard({ game }: Props) {
  console.log(game.background_image)
  return (
    <Card borderRadius={16} overflow="hidden">
      <Image src={game.background_image} />
      <Heading>{game.name}</Heading>
    </Card>
  )
}
