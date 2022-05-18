import { Box, Grid, Text } from "@chakra-ui/react"
import Select from "./components/select/src/Select"

function App() {
  return (
    <div className="App">
      <Grid m="16" gap={4}>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb="4">
            Simple Select
          </Text>
          <Select
            placeholder="Select a Movie (String)"
            options={["C'mon C'mon", "Bodies Bodies Bodies"]}
          />
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb="4">
            Custom Render Option Select
          </Text>
          <Select
            w="64"
            placeholder="Select a Movie (Objects)"
            options={[
              {
                name: "A Ghost Story",
                id: "a4062869-b23c-4a2a-a2a6-e2ef6d8de525",
              },
              { name: "Men", id: "28cecb94-8d22-46b5-a336-1be87538efbc" },
            ]}
            getOptionLabel={(option) => option.name}
          />
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb="4">
            Custom Render Select (Multiple Options)
          </Text>
          <Select
            isMultiple
            w="64"
            placeholder="Select a Movie (Objects)"
            options={[
              {
                name: "A Ghost Story",
                id: "a4062869-b23c-4a2a-a2a6-e2ef6d8de525",
              },
              { name: "Men", id: "28cecb94-8d22-46b5-a336-1be87538efbc" },
              {
                name: "Infinitely Polar Bear",
                id: "28fecb94-8d22-46b5-a336-1be87538efbc",
              },
            ]}
            getOptionLabel={(option) => option.name}
          />
        </Box>
      </Grid>
    </div>
  )
}

export default App
