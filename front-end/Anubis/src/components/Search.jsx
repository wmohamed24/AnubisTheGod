import React from "react";
import { Box } from "@chakra-ui/react";

import { CUIAutoComplete } from "chakra-ui-autocomplete";

const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "germany1", label: "Germany" },
  { value: "ghana1", label: "Ghana" },
  { value: "nigeria1", label: "Nigeria" },
  { value: "kenya1", label: "Kenya" },
  { value: "southAfrica1", label: "South Africa" },
  { value: "unitedStates1", label: "United States" },
  { value: "canada1", label: "Canada" },
  { value: "germany1", label: "Germany" },
];

export default function App() {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  return (
    <Box px={8} py={4}>
      <CUIAutoComplete
        placeholder="Type a Country"
        onCreateItem={handleCreateItem}
        items={pickerItems}
        tagStyleProps={{
          rounded: "full",
          pt: 1,
          pb: 2,
          px: 2,
          fontSize: "1rem",
        }}
        selectedItems={selectedItems}
        onSelectedItemsChange={(changes) =>
          handleSelectedItemsChange(changes.selectedItems)
        }
      />
    </Box>
  );
}
