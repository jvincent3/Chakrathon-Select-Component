import { useState } from "react"
import "./App.css"
import { Box, Center } from "@chakra-ui/react"
import {
  Select,
  SelectList,
  SelectItem,
  SelectValue,
} from "./components/select"

function App() {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
  ])
  const [selectedFruit, setSelectedFruit] = useState(fruits[0])

  return (
    <Center h="100vh">
      <Box>
        <Select
          getLabel={(item) => item.label}
          value={selectedFruit}
          onChange={(value) => setSelectedFruit(value)}
        >
          <SelectValue />
          <SelectList>
            {fruits.map((fruit) => (
              <SelectItem
                key={fruit.value}
                isActive={selectedFruit.value === fruit.value}
                value={fruit}
              >
                {fruit.label}
              </SelectItem>
            ))}
          </SelectList>
        </Select>
      </Box>
    </Center>
  )
}

export default App
