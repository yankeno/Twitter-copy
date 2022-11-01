import { useContext } from "react";
import { TweetContext, TweetContextType } from "../providers/TweetProvider";

export const useTweet = (): TweetContextType => useContext(TweetContext);
