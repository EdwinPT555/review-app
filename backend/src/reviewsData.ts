import { IReview } from "../types";

// Need to move to mongo DB
export const reviews: IReview[] = [
  {
    id: "1",
    user_name: "John Doe",
    phone: "555-555-5555",
    main_app_goal: ["Information", "Chat"],
    app_usage_frequency: "Daily",
    user_experience_rating: 7,
    improvements_suggested: `Faster load times
Improved search functionality
Better user interface`,
    birthday: "1990-01-15",
    posted_date: "2023-10-01",
  },
  {
    id: "2",
    user_name: "Jane Smith",
    phone: "123-456-7890",
    main_app_goal: ["Entertainment"],
    app_usage_frequency: "Weekly",
    user_experience_rating: 9,
    improvements_suggested: `More content variety
Improved video streaming quality`,
    birthday: "1985-07-22",
    posted_date: "2023-09-15",
  },
  {
    id: "3",
    user_name: "Alice Johnson",
    phone: "999-888-7777",
    main_app_goal: ["Buy", "Information"],
    app_usage_frequency: "Monthly",
    user_experience_rating: 5,
    improvements_suggested: `Simpler checkout process
Enhanced product recommendations`,
    birthday: "2000-03-10",
    posted_date: "2023-08-20",
  },
  {
    id: "4",
    user_name: "Bob Wilson",
    phone: "111-222-3333",
    main_app_goal: ["Socialize", "Chat"],
    app_usage_frequency: "Rarely",
    user_experience_rating: 8,
    improvements_suggested: `Improved chat features
Better notifications`,
    birthday: "1995-12-05",
    posted_date: "2023-08-05",
  },
  {
    id: "5",
    user_name: "Eve Adams",
    phone: "777-666-5555",
    main_app_goal: ["Other"],
    app_usage_frequency: "First time",
    user_experience_rating: 3,
    improvements_suggested: `Better onboarding
Streamlined user registration`,
    birthday: "1980-09-30",
    posted_date: "2023-09-30",
  },
  {
    id: "6",
    user_name: "Michael Brown",
    phone: "333-444-5555",
    main_app_goal: ["Buy"],
    app_usage_frequency: "Weekly",
    user_experience_rating: 7,
    improvements_suggested: `Add more payment options
Enhance security`,
    birthday: "1992-05-18",
    posted_date: "2023-10-10",
  },
  {
    id: "7",
    user_name: "Sarah Lee",
    phone: "777-123-4567",
    main_app_goal: ["Entertainment"],
    app_usage_frequency: "Monthly",
    user_experience_rating: 9,
    improvements_suggested: `Enhance streaming quality
More personalized recommendations`,
    birthday: "1988-11-25",
    posted_date: "2023-10-05",
  },
  {
    id: "8",
    user_name: "David Johnson",
    phone: "555-999-8888",
    main_app_goal: ["Chat", "Information"],
    app_usage_frequency: "Daily",
    user_experience_rating: 6,
    improvements_suggested: `Better customer support
Enhanced chat features`,
    birthday: "1998-02-14",
    posted_date: "2023-09-01",
  },
  {
    id: "9",
    user_name: "Emily Wilson",
    phone: "222-333-4444",
    main_app_goal: ["Socialize"],
    app_usage_frequency: "Rarely",
    user_experience_rating: 8,
    improvements_suggested: `More interactive features
Improved group chat functionality`,
    birthday: "1994-06-07",
    posted_date: "2023-08-15",
  },
  {
    id: "10",
    user_name: "Chris Smith",
    phone: "123-123-1234",
    main_app_goal: ["Other"],
    app_usage_frequency: "First time",
    user_experience_rating: 4,
    improvements_suggested: `Simpler user interface
Clearer user instructions`,
    birthday: "1983-03-20",
    posted_date: "2023-10-15",
  },
];