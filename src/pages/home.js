import Slider from "../../components/Slider.js"
import {Box} from "@chakra-ui/react"
export default function home(){
    const container=[
  {
    nameCity:'chennai',
    weather:'summer'
  },
  {
    nameCity:'chennai',
    weather:'summer'
  },
  {
    nameCity:'chennai',
    weather:'summer'
  },
  {
    nameCity:'chennai',
    weather:'summer'
  },
  {
    nameCity:'chennai',
    weather:'summer'
  },
]
    return(
        <Box>
            {
                container.map((val)=>
          <Slider weather={val.weather}/>
            )}
        </Box>
    )
}