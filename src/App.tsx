import Select from "./components/select/src/Select"

function App() {
  return (
    <div className="App">
      <Select
        label="Select a Movie"
        options={["C'mon C'mon", "Bodies Bodies Bodies"]}
      />
    </div>
  )
}

export default App
