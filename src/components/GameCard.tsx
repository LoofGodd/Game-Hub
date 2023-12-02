import { Game } from "../hooks/useGame"
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "../CriticScore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"
interface Props {
  game: Game
}
export default function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (plateform) => plateform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  )
}
