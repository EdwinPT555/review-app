import React from "react";
import { Button, Text} from "@chakra-ui/react";
import { MdStars } from "react-icons/md";

const AddReviewButton: React.FC<IProps> = ({onOpen}) => {

  return (
    <>
      <Button
        position="fixed"
        bottom={10}
        right={4}
        px={8}
        py={6}
        borderRadius="full"
        boxShadow="lg"
        backgroundColor="blue.500"
        color="white"
        _hover={{ backgroundColor: "blue.600" }}
        _active={{ backgroundColor: "blue.700" }}
        onClick={() => onOpen()}
        gap={2}
      >
        <MdStars fontSize="30px" />
        <Text>Write a review</Text>
      </Button>

    </>
  );
};

export default AddReviewButton;

interface IProps {
  onOpen: () => void
}