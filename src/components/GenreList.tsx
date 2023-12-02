import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react"
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"

interface Props {
  onSelectedGenre: (genre: Genre | null) => void
  selectedGenre: Genre | null
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
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
              <Button
                variant="link"
                fontSize={"xl"}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
