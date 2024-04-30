// Complete the Index page component here
// Use chakra-ui
import { Box, Textarea, Heading, SimpleGrid, IconButton } from '@chakra-ui/react';
import { FaPlus, FaTrash } from "react-icons/fa"; // example - use react-icons/fa for icons
import { useState } from 'react';

const Index = () => {
  return (
    <Box maxW="2000px" mx="auto">
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Role</Heading>
          const [role, setRole] = useState('');
          <Textarea value={role} onChange={(e) => setRole(e.target.value)} placeholder="Dummy data for Role" />
          <IconButton
            aria-label="Delete text"
            icon={<FaTrash />}
            onClick={() => setRole('')}
            colorScheme="red"
            size="sm"
            ml={2}
          />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Task</Heading>
          const [task, setTask] = useState('');
          <Textarea value={task} onChange={(e) => setTask(e.target.value)} placeholder="Dummy data for Task" />
          <IconButton
            aria-label="Delete text"
            icon={<FaTrash />}
            onClick={() => setTask('')}
            colorScheme="red"
            size="sm"
            ml={2}
          />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Specifics</Heading>
          const [specifics, setSpecifics] = useState('');
          <Textarea value={specifics} onChange={(e) => setSpecifics(e.target.value)} placeholder="Dummy data for Specifics" />
          <IconButton
            aria-label="Delete text"
            icon={<FaTrash />}
            onClick={() => setSpecifics('')}
            colorScheme="red"
            size="sm"
            ml={2}
          />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Examples</Heading>
          const [examples, setExamples] = useState('');
          <Textarea value={examples} onChange={(e) => setExamples(e.target.value)} placeholder="Dummy data for Examples" />
          <IconButton
            aria-label="Delete text"
            icon={<FaTrash />}
            onClick={() => setExamples('')}
            colorScheme="red"
            size="sm"
            ml={2}
          />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Response Format</Heading>
          const [responseFormat, setResponseFormat] = useState('');
          <Textarea value={responseFormat} onChange={(e) => setResponseFormat(e.target.value)} placeholder="Dummy data for Response Format" />
          <IconButton
            aria-label="Delete text"
            icon={<FaTrash />}
            onClick={() => setResponseFormat('')}
            colorScheme="red"
            size="sm"
            ml={2}
          />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Additional Info</Heading>
          const [additionalInfo, setAdditionalInfo] = useState('');
          <Textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} placeholder="Dummy data for Additional Info" />
          <IconButton
            aria-label="Delete text"
            icon={<FaTrash />}
            onClick={() => setAdditionalInfo('')}
            colorScheme="red"
            size="sm"
            ml={2}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;