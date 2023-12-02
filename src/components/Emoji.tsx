import meh from "../assets/meh.webp"
import thumbUp from "../assets/thumbs-up.webp"
import bullEye from "../assets/bulls-eye.webp"
import { Image, ImageProps } from "@chakra-ui/react"

interface Props {
  rating: number
}
function Emoji({ rating }: Props) {
  if (rating < 3) return null
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullEye, alt: "exceptional", boxSize: "30px" },
  }
  return <Image {...emojiMap[rating]} marginTop={3} />
}

export default Emoji
