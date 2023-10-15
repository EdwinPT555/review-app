export interface IReview {
  id: string;
  user_name: string;
  phone: string;
  main_app_goal: string[];
  app_usage_frequency: string;
  user_experience_rating: number;
  improvements_suggested: string;
  birthday: string;
  posted_date: string;
}

export enum RatingScale {
  "Very Bad" = 1,
  "Bad" = 2,
  "Not Good" = 3,
  "Okay" = 4,
  "Good" = 5,
  "Very Good" = 6,
  "Excellent" = 7,
  "Outstanding" = 8,
  "Exceptional" = 9,
  "Perfect" = 10,
}

export const rating ={
  1: "Very Bad",
  2: "Bad",
  3: "Not Good",
  4: "Okay",
  5: "Good",
  6: "Very Good",
  7: "Excellent",
  8: "Outstanding",
  9: "Exceptional",
  10: "Perfect",
};

export const ratingColors: Record<RatingScale, string> = {
  [RatingScale["Very Bad"]]: "red",
  [RatingScale["Bad"]]: "orange",
  [RatingScale["Not Good"]]: "orange",
  [RatingScale["Okay"]]: "yellow",
  [RatingScale["Good"]]: "yellow",
  [RatingScale["Very Good"]]: "green",
  [RatingScale["Excellent"]]: "green",
  [RatingScale["Outstanding"]]: "green",
  [RatingScale["Exceptional"]]: "green",
  [RatingScale["Perfect"]]: "green",
};