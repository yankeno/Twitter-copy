export type Tweet = {
    id: number;
    user_id: number;
    tweet: string;
    likes: number;
    retweets: number;
    replies: number;
    user_agent: string;
    created_at: Date;
    updated_at: Date | null;
    deleted_at: Date | null;
    user: {
        id: number;
        name: string;
        account: string;
        authorized: boolean;
    };
};
