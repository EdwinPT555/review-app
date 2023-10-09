import React, { } from "react";
import { Checkbox, VStack } from "@chakra-ui/react";

interface MultiSelectInputProps {
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({ options, selectedValues, onChange }) => {
  const handleCheckboxChange = (value: string) => {
    if (selectedValues.includes(value)) {
      // If the value is already selected, remove it
      onChange(selectedValues.filter((item) => item !== value));
    } else {
      // If the value is not selected, add it
      onChange([...selectedValues, value]);
    }
  };

  return (
    <VStack align="start">
      {options.map((option) => (
        <Checkbox
          key={option}
          isChecked={selectedValues.includes(option)}
          onChange={() => handleCheckboxChange(option)}
        >
          {option}
        </Checkbox>
      ))}
    </VStack>
  );
};

export default MultiSelectInput;