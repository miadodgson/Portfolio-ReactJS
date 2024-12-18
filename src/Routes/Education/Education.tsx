import React from 'react'


const Education = () => {


return(
<Box
  shadow="2"
  rounded="lg"
  w={{ base: "64", md: "80", lg: "md" }}
  _light={{ bg: "coolGray.50" }}
  _dark={{ bg: "gray.700" }}
>
  <AspectRatio w="100%" ratio={ratio}>
    <Image source={HeroImg} alt="image base" />
  </AspectRatio>
  <Text bold position="absolute" color="coolGray.50" top="0" m="4">
    NEWS
  </Text>
  <Stack space="2" p="4">
    <Text color="gray.400">November 24, 2024</Text>
    <Heading size={["md", "lg", "md"]} fontWeight="medium">
      The Garden City
    </Heading>
    <Text isTruncated noOfLines={["4", "4", "4"]}>
      Bengaluru (also called Bangalore) is the center of India's high-tech industry.
    </Text>
  </Stack>
  <HStack space="3" px="4" pb="4">
    <MoreIcon _light={{ color : "emerald.800" }} _dark={{ color : "emerald.300" }} />
    <Text _light={{ color : "emerald.800" }} _dark={{ color : "emerald.300" }}>
      Find out more
    </Text>
  </HStack>
</Box>
	)
}

export default Education