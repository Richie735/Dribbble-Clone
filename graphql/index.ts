export const getUserQuery = `
    query GetUser($email: String!) {
        user(by: { email: $email }) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
            twitterUrl
            websiteUrl
        }
    }
`;

export const createUserMutation = `
    mutation CreateUser($input: UserCreateInput!) {
        userCreate(input: $input) {
            user {
                id
                name
                email
                avatarUrl
                description
                githubUrl
                linkedinUrl
                twitterUrl
                websiteUrl
            }
        }
    }
`;
