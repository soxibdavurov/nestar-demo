import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>

      <Stack className={"home-page"}>

        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>

        <Stack className="container">
          <Box>Top Agents</Box>
        </Stack>

        <Stack className="container">
          <Box>Top Properties</Box>
        </Stack>

      </Stack>
    </>
  );
}

export default withLayoutMain(Home);