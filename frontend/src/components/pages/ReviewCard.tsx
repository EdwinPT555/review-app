/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading,
  Text,
  Avatar,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { IReview, RatingScale, ratingColors } from "../../types";
import { LiaStarSolid } from "react-icons/lia";

const ReviewCard: React.FC<IProps> = (props) => {
  const { username, rating, comment } = props.reviews;
  return (
    <AccordionItem key={props.index}>
      {({ isExpanded }) => (
        <>
          <AccordionButton>
            <Flex alignItems="center" width="100%" justifyContent="start">
              <Flex alignItems="center" minW={"200px"}>
                <Avatar size="sm" name={username} src={`URL_TO_USER_IMAGE/${username}.jpg`} />
                <Box ml={2} gap={2}>
                  <Heading as="h4" size="sm" fontWeight="semibold">
                    {username}
                  </Heading>
                  <Flex gap={2} align="center">
                    <Text fontSize="xs" color="gray.600">
                      {new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Box>
                <Badge colorScheme={ratingColors[rating as RatingScale]}
                  fontSize="xs" w="125px" py={1} fontWeight="normal">
                  <Flex gap={1} align="center">
                    <LiaStarSolid />
                    <Text fontSize="sm">{rating}</Text>
                    {RatingScale[rating]}
                  </Flex>
                </Badge>
              </Box>
              <Text fontSize="md" px={4}>{comment}</Text>
            </Flex>
          </AccordionButton>
          <AccordionPanel>
            <Text fontSize="md">{comment}</Text>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

interface IProps {
  reviews: IReview;
  index: number;
}

export default ReviewCard;

