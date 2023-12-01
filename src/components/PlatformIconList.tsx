import { HStack, Icon, Text } from "@chakra-ui/react"
import { PlatForm } from "../hooks/useGame"
import {
  FaWindows,
  FaLinux,
  FaAndroid,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from "react-icons"

interface Props {
  platforms: PlatForm[]
}

export default function PlatformIconList({ platforms }: Props) {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    web: BsGlobe,
  }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={icons[platform.slug]} key={platform.id} />
      ))}
    </HStack>
  )
}
