import React, { useEffect, useState } from "react";
import Navbar from "../common/NavBar";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import Reviews from "./Reviews";
import { IReview } from "../../types";
import AddReviewButton from "../common/AddReviewButton";
import ReviewForm from "./form/ReviewForm";
import axios from "axios";
import { CircularProgress, useToast } from "@chakra-ui/react";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [reviews, setReviews] = React.useState<IReview[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.post("http://localhost:3001/review/get-all");
        setReviews(res?.data.reviews);
        setLoading(false);
      } catch (error) {
        toast({
          title: "Backend not connected",
          status: "error",
          duration: 30000,
          isClosable: false,
        });
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box>
      <Navbar />
      {loading ?
        <Flex justify="center"><CircularProgress isIndeterminate /> </Flex> :
        <Reviews reviews={reviews} />
      }
      <AddReviewButton onOpen={onOpen} />
      {isOpen && <ReviewForm isOpen={isOpen} onClose={onClose} setReviews={setReviews} />}
    </Box>
  );
};

export default Home;


