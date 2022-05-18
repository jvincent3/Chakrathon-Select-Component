import { Grid } from "@chakra-ui/react"
import Select from "./components/select/src/Select"

function App() {
  return (
    <div className="App">
      <Grid m="16" row={[1, 1]} gap={4}>
        <Select
          placeholder="Select a Movie (String)"
          options={["C'mon C'mon", "Bodies Bodies Bodies"]}
        />
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
      </Grid>
    </div>
  )
}

export default App
