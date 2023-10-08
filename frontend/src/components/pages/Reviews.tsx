import React from "react";
import {
  Accordion
} from "@chakra-ui/react";
import { IReview } from "../../types";
import ReviewCard from "./ReviewCard";

const Reviews: React.FC<IProps> = ({ reviews }) => {

  return (
    <Accordion allowToggle width="100%" p={4}>
      {reviews.map((review, index) => (
        <ReviewCard key={index} index={index} reviews={review} />
      ))}
    </Accordion>
  );
};

export default Reviews;

interface IProps {
  reviews: IReview[]
}
