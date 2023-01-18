import { Box, Text } from "@chakra-ui/react"
import s1 from "../assets/s1.png"

export default function Slider(props) {
  console.log(props.info)
  return (
    <Box display={"flex"} height={500} width={330} padding={10} >
      <Box backgroundImage={`url(${props.info.img.src})`} width={250} height={450} borderRadius={10} >
        <Text color={"white"}>{props.info.nameCity}</Text>
        <Text color={"white"}>{props.info.weather}</Text>
      </Box>
    </Box>
  );
}