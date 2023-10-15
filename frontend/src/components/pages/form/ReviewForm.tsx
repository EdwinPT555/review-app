import React, { useState, useCallback } from "react";
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
  Text,
  Select,
  CheckboxGroup,
  Checkbox,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
  Textarea,
  Input,
  useToast
} from "@chakra-ui/react";
import { IReview, RatingScale, rating } from "../../../types";
import axios from "axios";

const ReviewForm: React.FC<IProps> = ({ isOpen, onClose, setReviews }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [formData, setFormData] = useState<IFeedbackState>({
    frequency: "",
    goals: [],
    rating: 10,
    improvements: "",
    birthday: "",
  });

  const toast = useToast();

  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleFrequencyChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      frequency: event.target.value,
    });
  }, [formData]);

  const handleGoalsChange = useCallback((selectedGoals: string[]) => {
    setFormData({
      ...formData,
      goals: selectedGoals,
    });
  }, [formData]);

  const handleRatingChange = useCallback((value: number) => {
    setFormData({
      ...formData,
      rating: value,
    });
  }, [formData]);

  const handleImprovementsChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      improvements: event.target.value,
    });
  }, [formData]);

  const handleBirthdayChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      birthday: event.target.value,
    });
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.rating || !formData.frequency || formData.goals.length === 0 ||
      !formData.birthday || !formData.rating) {
      toast({
        title: "Please select all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const { data, status } = await axios.post("http://localhost:3001/review/save",
      {
        user_name: "Edwin",
        phone: "123456789",
        main_app_goal: formData.goals,
        app_usage_frequency: formData.frequency,
        user_experience_rating: formData.rating,
        improvements_suggested: formData.improvements,
        birthday: formData.birthday,
      });
    if (status === 200) {
      setReviews((prev) => {
        return [...prev, data.review];
      });
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    onClose();
  }, [formData]);

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
          <ModalBody pb={6} minH={"300px"}>
            <Text fontSize="xl" fontWeight="bold" color={"gray.500"} >{currentQuestion}/5 Question</Text>
            {currentQuestion === 1 && (
              <Box p={4}>
                <Text fontWeight="semibold" color="twitter.800">🗓️ How often do you use this app?</Text>
                <Select
                  placeholder="Select frequency"
                  value={formData.frequency}
                  onChange={handleFrequencyChange}
                  mt={4}
                >
                  {usagePeriodOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Box>
            )}
            {currentQuestion === 2 && (
              <Box p={4}>
                <Text fontWeight="semibold" color="twitter.800" mb={4}>🎯 What is your Main app goal?</Text>
                <CheckboxGroup value={formData.goals} onChange={handleGoalsChange}>
                  {goalOptions.map((option) => (
                    <Checkbox key={option} value={option} w={"100%"} gap={2} size="lg">
                      {option}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </Box>
            )}
            {currentQuestion === 3 && (
              <Box p={4}>
                <Text fontWeight="semibold" color="twitter.800" mb={4}>⭐ Rate user experience (1-10)</Text>
                <Slider
                  id='slider'
                  defaultValue={10}
                  min={0}
                  max={10}
                  colorScheme='teal'
                  onChange={handleRatingChange}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <SliderMark key={i} value={i} mt={1} ml={-2.5} fontSize="sm">
                      {i}
                    </SliderMark>
                  ))}
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <Tooltip
                    hasArrow
                    bg='teal.500'
                    color='white'
                    placement='top'
                    isOpen={showTooltip}
                    label={`${formData.rating} ⭐`}
                  >
                    <SliderThumb />
                  </Tooltip>
                </Slider>
                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                  color="twitter.800"
                  // color={ratingColors[formData.rating as RatingScale]}
                  mt={4}
                >
                  {rating[formData.rating as RatingScale]}
                </Text>
              </Box>
            )}
            {currentQuestion === 4 && (
              <Box p={4}>
                <Text fontWeight="semibold" color="twitter.800" mb={4}>💡 Suggest any improvements</Text>
                <Textarea
                  placeholder="Your suggestions..."
                  value={formData.improvements}
                  onChange={handleImprovementsChange}
                />
              </Box>
            )}
            {currentQuestion === 5 && (
              <Box p={4}>
                <Text fontWeight="semibold" color="twitter.800" mb={4}>🎂 Select your birthday</Text>
                <Input type="date" value={formData.birthday} onChange={handleBirthdayChange} />
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            {(currentQuestion !== 1) && (
              <Button
                variant="outline"
                colorScheme='blue'
                ml={3}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                Previous
              </Button>
            )}
            {(currentQuestion !== 5) && (
              <Button
                variant="outline"
                colorScheme='blue'
                ml={3}
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
              >
                Next
              </Button>
            )}
            {(currentQuestion === 5) && (
              <Button colorScheme='blue' ml={3} type="submit">
                Save
              </Button>
            )}
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
  setReviews: React.Dispatch<React.SetStateAction<IReview[]>>
}

interface IFeedbackState {
  frequency: string;
  goals: string[];
  rating: number;
  improvements: string;
  birthday: string;
}

const usagePeriodOptions = ["Daily", "Weekly", "Monthly", "Rarely", "First time"];
const goalOptions = ["Information", "Chat", "Entertainment", "Buy", "Socialize", "Other"];
