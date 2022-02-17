import { Grid, Stack } from "@chakra-ui/react";
import Recipe from "../components/Recipes";
import { MainProps } from "../types/interfaces";
interface Props {
  mock: MainProps[];
  setRecipe: any;
}

const MainContent = ({ mock, setRecipe }: Props) => {
  return (
    <>
      <Stack justifyContent="center" direction="row" flexWrap="wrap" mt={7}>
        <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
          {mock.map((res) => (
            <Recipe res={res} key={res.id} setRecipe={setRecipe}  />
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default MainContent;
