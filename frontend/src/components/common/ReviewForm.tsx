import React, { useState } from "react";
import {
  Box,
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
// import * as Yup from "yup";
import MultiSelectInput from "./MultiSelectInput";

const ReviewForm: React.FC<IProps> = ({ isOpen, onClose }) => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const handleGoalsChange = (values: string[]) => {
    setSelectedGoals(values);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Selected goals:", selectedGoals);
    // Handle form submission here
  };
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // const onSubmitForm = useCallback((e: any) => {
  //   //
  //   // eslint-disable-next-line no-console
  //   console.log(e);
  // }, []);


  // const {
  //   errors, touched, values, handleChange, handleBlur, handleSubmit, setFieldValue,
  // } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: validationSchema,
  //   onSubmit: onSubmitForm,
  // });
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent textAlign="center">
        <form onSubmit={handleSubmit}>
          <ModalHeader>Ratings & Reviews</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box p={4}>
              <label>Main app goal?</label>
              <MultiSelectInput
                options={goalOptions}
                selectedValues={selectedGoals}
                onChange={handleGoalsChange}
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} type="submit">
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal >
  );
};

export default ReviewForm;

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

// const initialValues = {
//   frequency: "",
//   goals: [],
//   userExperience: 5,
//   improvements: "",
//   birthday: new Date(),
// };

// const validationSchema = Yup.object().shape({
//   frequency: Yup.string().required("Please select an option"),
//   goals: Yup.array()
//     .min(1, "Select at least one goal")
//     .required("Select at least one goal"),
//   userExperience: Yup.number()
//     .min(1, "Select a rating")
//     .max(10, "Select a rating")
//     .required("Select a rating"),
//   improvements: Yup.string(),
//   birthday: Yup.date().required("Enter your birthday"),
// });

const goalOptions = ["Information", "Chat", "Entertainment", "Buy", "Socialize", "Other"];


// const goalOptions: Option[] = [
//   {
//     label: "Information",
//     value: "Information"
//   },
//   {
//     label: "Chat",
//     value: "Chat"
//   },
//   {
//     label: "Entertainment",
//     value: "Entertainment"
//   },
//   {
//     label: "Buy",
//     value: "Buy"
//   },
//   {
//     label: "Socialize",
//     value: "Socialize"
//   },
//   {
//     label: "Other",
//     value: "Other"
//   }
// ];
