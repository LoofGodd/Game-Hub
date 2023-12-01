import { Game } from "../hooks/useGame"
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "../CriticScore"
import getCroppedImageUrl from "../services/image-url"
interface Props {
  game: Game
}
export default function GameCard({ game }: Props) {
  return (
    <Card borderRadius={16} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (plateform) => plateform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}
