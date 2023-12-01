import { Game } from "../hooks/useGame"
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
interface Props {
  game: Game
}
export default function GameCard({ game }: Props) {
  return (
    <Card borderRadius={16} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(
            (plateform) => plateform.platform
          )}
        />
      </CardBody>
    </Card>
  )
}
