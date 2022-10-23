export type User = {
    id: number;
    account: string;
    name: string;
    family_name: string;
    given_name: string;
    email: string;
    email_verified_at: string | null;
    authorized: boolean;
    avatar_url: string;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
};
