import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHub = ({ colorMode }) => {
  const github = {
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div className={"#github"}>
      <Heading textAlign='center' size={['2xl', '2xl', '2xl', '3xl']} color={colorMode === 'light' ? "#243D25" : '#488A99'} mb='50px'>GITHUB CALENDAR</Heading>

      <Box
        w="100%"
        style={github}
      >
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Khalidshah12"
          year={new Date().getFullYear()}
        />
      </Box>

    </div>
  );
};

export default GitHub;
