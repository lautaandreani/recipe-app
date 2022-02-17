import { Badge, Box, Center, Divider, Flex, Icon, Image, Stack, Text, Tooltip } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IngredientsProps, MainProps } from "../../types/interfaces";

const Recipe = ({ res, setRecipe, onOpen }: any) => {
  return (
    <Box
      cursor="pointer"
      bg="brand.card"
      borderRadius={"md"}
      onClick={() => {
        setRecipe(res);
        onOpen();
      }}
    >
      <Box height="10rem" overflow={"hidden"} borderRadius={"md"}>
        <Image src={res.image} objectFit="cover" transition=".2s all" _hover={{ transform: "scale(1.08)" }} />
      </Box>
      <Stack padding={3}>
        <Text as="h2" fontSize={"1.2rem"} fontWeight={600}>
          {res.title}
        </Text>
        <Center as="span" margin="1rem 0" width="100%" height=".1rem" bg="lightgray"></Center>
        <Stack direction="row" mt={2} justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" width="100%" justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
              <Icon as={AiOutlineClockCircle} />
              <Text as="small" fontWeight={500} marginLeft={2}>
                {res.time}
              </Text>
            </Flex>
            <Stack direction="row" spacing={1}>
              {res.ingredients.map((name: IngredientsProps, i: number) => (
                <Tooltip label={name.alt} aria-label="a tooltip" key={i}>
                  <Badge variant={"subtle"} colorScheme="green" fontSize={"1rem"} borderRadius={"full"}>
                    {name.name}
                  </Badge>
                </Tooltip>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Recipe;
