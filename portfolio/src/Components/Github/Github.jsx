import { Box, color, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHub = ({ colorMode }) => {
  const github = {
    margin: "auto",
    width:"60%",
    padding: "20px",
    borderRadius: "10px",
    border:"5px solid #371B58",
  };

  return (
    <div className={"#github"}>
      <Heading textAlign='center' size={['2xl', '2xl', '2xl', '3xl']} color={colorMode === 'light' ? "#4C3575" : '#BFACE0'} mb='50px'>GITHUB CALENDAR</Heading>

      <Box
        w="100%"
        style={github}
      >
        <GitHubCalendar
          style={{ margin: "auto" ,color:"#4C3575"}}
          username="bArSu45"
          year={new Date().getFullYear()}
        />
      </Box>
      <Box display='flex' justifyContent='center' mt='40px'>
        <Box mr='30px' border="5px solid #371B58" borderRadius="10px">
          <Image src='https://github-readme-stats.vercel.app/api?username=bArSu45&title_color=4C3575&icon_color=CC5160&text_color=4C3575&bg_color=00000000&show_icons=true' />
        </Box>
        <Box border="5px solid #371B58" borderRadius="10px">
          <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=bArSu45&title_color=4C3575&icon_color=4C3575&text_color=4C3575&bg_color=00000000&show_icons=true" />
        </Box>
      </Box>

    </div>
  );
};

export default GitHub;
