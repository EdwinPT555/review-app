export interface IReview {
  username: string;
  rating: number;
  comment: string;
  extra: string[];
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