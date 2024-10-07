import { user } from "./user";
import { Tweet } from "@/types/tweet";

export const tweet: Tweet = {
  id: 123,
  user: user,
  body: 'Olá Mundão!!',
  image: 'https://i.pinimg.com/564x/45/81/1a/45811a832cc538cb2320413904e14e72.jpg',
  likeCount: 523,
  commentCount: 60,
  retweetCount: 0,
  liked: false,
  retweeted: false,
  dataPost: new Date(2024, 8, 1, 10, 0, 0),
};