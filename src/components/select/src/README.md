# Select

Select visually highlight important content for the user. They can contain a
title, an icon and content. Each intent has a default icon associated with it.


## Import components

```jsx
import {
  Select,
  SelectList,
  SelectItem,
  SelectValue
} from "/components/select"
```

## Basic usage

```jsx
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
```