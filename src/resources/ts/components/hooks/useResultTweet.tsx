import { useContext } from "react";
import {
    SearchTweetContext,
    SearchTweetContextType,
} from "../providers/SearchTweetProvider";

export const useResultTweet = (): SearchTweetContextType =>
    useContext(SearchTweetContext);
