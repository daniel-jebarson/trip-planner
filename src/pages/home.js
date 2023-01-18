import Slider from "../../components/Slider.js"
import {Box} from "@chakra-ui/react"
import s1 from "../../assets/s1.png"
import s2 from "../../assets/s2.png"
import s3 from "../../assets/s3.png"

export default function home(){
    const container=[
  {
    img:s1,
    nameCity:'chennai',
    weather:'summer',
    Temp:'24C'
  },
  {
    img:s2,
    nameCity:'Mumbai',
    weather:'summer',
    Temp:'24C'
  },
  {
    img:s3,
    nameCity:'vellore',
    weather:'summer',
    Temp:'24C'
  },
  {
    img:s1,
    nameCity:'delhi',
    weather:'summer',
    Temp:'24C'
  },
  {
    img:s2,
    nameCity:'bangalore',
    weather:'summer',
    Temp:'24C'
  },
  {
    img:s2,
    nameCity:'bangalore',
    weather:'summer',
    Temp:'24C'
  },
  {
    img:s2,
    nameCity:'bangalore',
    weather:'summer',
    Temp:'24C'
  },
  {
    img:s2,
    nameCity:'bangalore',
    weather:'summer',
    Temp:'24C'
  },
]
    return(
        <Box display={"flex"} overflow={"scroll"}  sx={{
    '&::-webkit-scrollbar': {
      width: '0px',
      borderRadius: '8px',
      backgroundColor: `rgba(0, 0, 0, 0.05)`,
    },
    '&::-webkit-scrollbar-thumb': {
      width:"0px",
      backgroundColor: `rgba(0, 0, 0, 0.1)`,
    },
  }}>
            {
                container.map((val)=>
          <Slider info={val}/>
            )}
        </Box>
    )
}