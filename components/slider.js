import {Box,Text} from "@chakra-ui/react"



export default function Slider(props) {

  return (
    <Box display={"flex"}>
          <Box bgColor={"ActiveBorder"} width={100} height={100} >
            <Text color={"white"}>{props.weather}</Text>
          </Box>
    </Box>
  );
}