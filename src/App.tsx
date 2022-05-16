import { useState } from "react"
import "./App.css"
import {
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { Select, SelectList, SelectItem } from "./components/select"

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
        <Box>{JSON.stringify(selectedFruit)}</Box>
        <Select
          labelKey="label"
          isSearchable={true}
          isClearable={true}
          value={selectedFruit}
          onChange={(value) => {
            setSelectedFruit(value)
          }}
          onSearch={(value) => {
            setFruits((prevFruits) =>
              prevFruits.filter((fruit) => fruit.value !== value)
            )
          }}
          onClear={() => setSelectedFruit(fruits[0])}
        >
          <SelectList>
            {fruits.map((fruit) => (
              <SelectItem
                isActive={selectedFruit.value === fruit.value}
                value={fruit}
              >
                {fruit.label}
              </SelectItem>
            ))}
          </SelectList>
        </Select>

        {/* <Menu>
          <MenuButton as={Button} colorScheme="pink">
            Test
          </MenuButton>
          <MenuList>
            {fruits.map((fruit) => (
              <MenuItem value={fruit}>{fruit.label}</MenuItem>
            ))}
          </MenuList>
        </Menu> */}
      </Box>
    </Center>
  )
}

export default App
