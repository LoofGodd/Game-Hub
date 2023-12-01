import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"

const GenreList = () => {
  const { data, isLoading } = useGenre()
  return (
    <>
      {isLoading && <Spinner />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} marginY={2}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize={"xl"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
