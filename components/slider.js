import { LeftButton, RightButton } from "chakra-ui-carousel";

function Example() {
  return (
    <Box>
      <Provider>
        <Carousel gap={50}>
        <div></div>
        </Carousel>
        <LeftButton
          bgColor="red.500"
          customIcon={<ArrowLeftIcon />}
          textColor={"white.500"}
        />
        <RightButton bgColor="blue.500" customIcon={<ArrowRightIcon />} />
      </Provider>
    </Box>
  );
}