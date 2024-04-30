// Complete the Index page component here
// Use chakra-ui
import { Box, Textarea, Heading, SimpleGrid } from '@chakra-ui/react';
import { FaPlus } from "react-icons/fa"; // example - use react-icons/fa for icons

const Index = () => {
  return (
    <Box maxW="2000px" mx="auto">
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Role</Heading>
          <Textarea placeholder="Dummy data for Role" />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Task</Heading>
          <Textarea placeholder="Dummy data for Task" />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Specifics</Heading>
          <Textarea placeholder="Dummy data for Specifics" />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Examples</Heading>
          <Textarea placeholder="Dummy data for Examples" />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Response Format</Heading>
          <Textarea placeholder="Dummy data for Response Format" />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Additional Info</Heading>
          <Textarea placeholder="Dummy data for Additional Info" />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;