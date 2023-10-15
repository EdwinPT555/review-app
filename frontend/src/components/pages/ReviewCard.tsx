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
  const { user_name, user_experience_rating, improvements_suggested, app_usage_frequency,
    main_app_goal, posted_date, phone } = props.reviews;

  return (
    <AccordionItem key={props.key}>
      {({ isExpanded }) => (
        <>
          <AccordionButton>
            <Flex alignItems="center" width="100%" justifyContent="start">
              <Flex alignItems="center" minW={"200px"}>
                <Avatar size="sm" name={user_name} src={`URL_TO_USER_IMAGE/${user_name}.jpg`} />
                <Box ml={2} gap={2}>
                  <Heading as="h4" size="sm" fontWeight="semibold">
                    {user_name}
                  </Heading>
                  <Flex gap={2} align="center">
                    <Text fontSize="xs" color="gray.600">
                      {maskPhoneNumber(phone)}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Box>
                <Badge colorScheme={ratingColors[user_experience_rating as RatingScale]}
                  fontSize="xs" w="125px" py={1} fontWeight="normal">
                  <Flex gap={1} align="center">
                    <LiaStarSolid />
                    <Text fontSize="sm">{user_experience_rating}</Text>
                    {RatingScale[user_experience_rating]}
                  </Flex>
                </Badge>
              </Box>
              <Text fontSize="small" px={4}>posted on {new Date(posted_date).toLocaleDateString("en-US",
                { day: "numeric", month: "long", year: "numeric" })}</Text>
            </Flex>
          </AccordionButton>
          <AccordionPanel>
            <Text fontSize="md" fontWeight="light" m={4}>
              🗓️  How often do you use this app? <Badge>{app_usage_frequency}</Badge>
            </Text>
            <Text fontSize="md" fontWeight="light" m={4}>
              🎯 Main app goals are {main_app_goal.map((goal) => <Badge key={goal} mx={1}>{goal}</Badge>)}
            </Text>
            <Text fontSize="md" fontWeight="light" m={4}>
              💡 Suggestions <Badge >{improvements_suggested}</Badge>
            </Text>
            <Text fontSize="md" fontWeight="light" m={4}>
              📅 Birthday  <Badge>
                {new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
              </Badge>
            </Text>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

interface IProps {
  reviews: IReview;
  key: number;
}

export default ReviewCard;

const maskPhoneNumber = (phoneNumber: string) => {
  const numericPhoneNumber = phoneNumber.replace(/\D/g, "");
  const visibleDigits = 4;
  const maskCharacter = "*";
  const maskedPart = numericPhoneNumber.slice(0, -visibleDigits).replace(/\d/g, maskCharacter);
  const visiblePart = numericPhoneNumber.slice(-visibleDigits);
  const maskedPhoneNumber = maskedPart + visiblePart;

  return maskedPhoneNumber;
};