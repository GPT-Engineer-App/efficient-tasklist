// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Checkbox } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    );
  };

  return (
    <Box p={5}>
      <Box mb={4}>
        <Input placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} size="lg" mr={2} />
        <Button onClick={handleAddTask} colorScheme="blue" leftIcon={<FaPlus />}>
          Add Task
        </Button>
      </Box>
      <List spacing={3}>
        {tasks.map((task) => (
          <ListItem key={task.id} d="flex" alignItems="center" justifyContent="space-between">
            <Checkbox isChecked={task.isCompleted} onChange={() => handleToggleTaskCompletion(task.id)} colorScheme="green" size="lg" mr={2}>
              {task.text}
            </Checkbox>
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} colorScheme="red" aria-label="Delete task" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
