import React from "react";
import Navbar from "../common/NavBar";
import { Box, useDisclosure } from "@chakra-ui/react";
import Reviews from "./Reviews";
import { IReview } from "../../types";
import AddReviewButton from "../common/AddReviewButton";
import ReviewForm from "../common/ReviewForm";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Navbar />
      <Reviews reviews={reviews}/>
      <AddReviewButton onOpen={onOpen}/>
      <ReviewForm isOpen={isOpen} onClose={onClose}/>
    </Box>
  );
};

export default Home;

const reviews: IReview[] = [
  {
    username: "john_doe",
    rating: 9,
    comment: "Great product, excellent quality!",
    extra: ["Fast shipping", "Responsive customer support"],
  },
  {
    username: "jane_smith",
    rating: 10,
    comment: "I love it! Best purchase ever.",
    extra: ["Affordable price", "Easy to assemble"],
  },
  {
    username: "mike_jackson",
    rating: 6,
    comment: "Not bad, but could be better.",
    extra: ["Average build quality", "Needs better instructions"],
  },
  {
    username: "susan_wilson",
    rating: 8,
    comment: "Good value for the money.",
    extra: ["Sturdy design", "Fits my needs"],
  },
  {
    username: "david_anderson",
    rating: 5,
    comment: "Disappointed with the product.",
    extra: ["Flimsy construction", "Misleading description"],
  },
  {
    username: "lisa_johnson",
    rating: 9,
    comment: "Absolutely fantastic!",
    extra: ["Top-notch quality", "Impressive performance"],
  },
  {
    username: "mark_thompson",
    rating: 7,
    comment: "Decent, but not exceptional.",
    extra: ["Fair price", "Could be improved"],
  },
  {
    username: "emily_hall",
    rating: 8,
    comment: "Overall satisfied with the purchase.",
    extra: ["Good customer service", "Prompt delivery"],
  },
  {
    username: "peter_miller",
    rating: 6,
    comment: "Expected more for the price.",
    extra: ["Overpriced", "Lacks features"],
  },
  {
    username: "sarah_wright",
    rating: 9,
    comment: "Impressed with the quality.",
    extra: ["Durable construction", "Looks great"],
  },
  {
    username: "robert_brown",
    rating: 3,
    comment: "Average product, nothing special.",
    extra: ["Decent value", "Not outstanding"],
  },
  {
    username: "linda_clark",
    rating: 2,
    comment: "Happy with my purchase.",
    extra: ["Easy setup", "Works as expected"],
  },
  {
    username: "william_wilson",
    rating: 6,
    comment: "Could be better, but it's okay.",
    extra: ["Average performance", "Mixed feelings"],
  },
  {
    username: "jennifer_martin",
    rating: 1,
    comment: "Exceeded my expectations!",
    extra: ["Excellent customer support", "Highly recommended"],
  },
  {
    username: "richard_davis",
    rating: 4,
    comment: "Not worth the money.",
    extra: ["Poor quality", "Regretful purchase"],
  },
  {
    username: "elizabeth_jones",
    rating: 9,
    comment: "Great value for the price.",
    extra: ["Solid build", "Good deal"],
  },
  {
    username: "james_jackson",
    rating: 7,
    comment: "Mediocre at best.",
    extra: ["Average quality", "Expected more"],
  },
  {
    username: "mary_harris",
    rating: 8,
    comment: "Satisfied with the product.",
    extra: ["Reasonable price", "No major complaints"],
  },
  {
    username: "thomas_smith",
    rating: 5,
    comment: "Not what I expected.",
    extra: ["Misleading advertising", "Disappointed"],
  },
  {
    username: "patricia_martinez",
    rating: 8,
    comment: "Good product overall.",
    extra: ["Decent value", "Serves its purpose"],
  },
];



