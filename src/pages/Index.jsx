// Complete the Index page component here
// Use chakra-ui
import { Box, Textarea, Heading, SimpleGrid, IconButton } from '@chakra-ui/react';
import { FaPlus, FaTrash } from "react-icons/fa"; // example - use react-icons/fa for icons
import { useState } from 'react';

const Index = () => {
  const [role, setRole] = useState('');
  const [task, setTask] = useState('');
  const [specifics, setSpecifics] = useState('');
  const [examples, setExamples] = useState('');
  const [responseFormat, setResponseFormat] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  return (
    <Box maxW="2000px" mx="auto">
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Role</Heading>
          <Textarea value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter your role" />
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
          <Textarea value={task} onChange={(e) => setTask(e.target.value)} placeholder="Describe the task" />
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
          <Textarea value={specifics} onChange={(e) => setSpecifics(e.target.value)} placeholder="Enter specifics" />
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
          <Textarea value={examples} onChange={(e) => setExamples(e.target.value)} placeholder="Provide examples" />
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
          <Textarea value={responseFormat} onChange={(e) => setResponseFormat(e.target.value)} placeholder="Expected response format" />
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
          <Textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} placeholder="Any additional information" />
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