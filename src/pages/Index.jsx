// Complete the Index page component here
// Use chakra-ui
import { Box, Textarea, Heading, SimpleGrid, IconButton, Button } from '@chakra-ui/react';
import { FaPlus, FaTrash } from "react-icons/fa"; // example - use react-icons/fa for icons
import { useState, useEffect, useRef } from 'react';

const Index = () => {
  const [role, setRole] = useState('');
  const [task, setTask] = useState('');
  const [specifics, setSpecifics] = useState('');
  const [examples, setExamples] = useState('');
  const [responseFormat, setResponseFormat] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [history, setHistory] = useState([]);
  const typingTimeoutRef = useRef(null);

  const handleRoleChange = (e) => {
    const newValue = e.target.value;
    setRole(newValue);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setHistory(prevHistory => [...prevHistory, { type: 'role', value: newValue }]);
    }, 500);
  };

  const handleTaskChange = (e) => {
    const newValue = e.target.value;
    setTask(newValue);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setHistory(prevHistory => [...prevHistory, { type: 'task', value: newValue }]);
    }, 500);
  };

  const handleSpecificsChange = (e) => {
    const newValue = e.target.value;
    setSpecifics(newValue);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setHistory(prevHistory => [...prevHistory, { type: 'specifics', value: newValue }]);
    }, 500);
  };

  const handleExamplesChange = (e) => {
    const newValue = e.target.value;
    setExamples(newValue);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setHistory(prevHistory => [...prevHistory, { type: 'examples', value: newValue }]);
    }, 500);
  };

  const handleResponseFormatChange = (e) => {
    const newValue = e.target.value;
    setResponseFormat(newValue);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setHistory(prevHistory => [...prevHistory, { type: 'responseFormat', value: newValue }]);
    }, 500);
  };

  const handleAdditionalInfoChange = (e) => {
    const newValue = e.target.value;
    setAdditionalInfo(newValue);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setHistory(prevHistory => [...prevHistory, { type: 'additionalInfo', value: newValue }]);
    }, 500);
  };

  return (
    <Box maxW="2000px" mx="auto">
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Heading as="h3" size="lg" mb={2}>Role</Heading>
          <Textarea value={role} onChange={handleRoleChange} placeholder="Enter your role" />
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
          <Textarea value={task} onChange={handleTaskChange} placeholder="Describe the task" />
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
          <Textarea value={specifics} onChange={handleSpecificsChange} placeholder="Enter specifics" />
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
          <Textarea value={examples} onChange={handleExamplesChange} placeholder="Provide examples" />
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
          <Textarea value={responseFormat} onChange={handleResponseFormatChange} placeholder="Expected response format" />
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
          <Textarea value={additionalInfo} onChange={handleAdditionalInfoChange} placeholder="Any additional information" />
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
      <Button
        colorScheme="blue"
        onClick={() => {
          if (history.length > 0) {
            const lastEntry = history.pop();
            switch (lastEntry.type) {
              case 'role': setRole(lastEntry.value); break;
              case 'task': setTask(lastEntry.value); break;
              case 'specifics': setSpecifics(lastEntry.value); break;
              case 'examples': setExamples(lastEntry.value); break;
              case 'responseFormat': setResponseFormat(lastEntry.value); break;
              case 'additionalInfo': setAdditionalInfo(lastEntry.value); break;
            }
            setHistory(history);
          }
        }}
      >
        Revert Changes
      </Button>
    </Box>
  );
};

export default Index;