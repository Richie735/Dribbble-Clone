import { Session, User } from 'next-auth';

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  websiteUrl: string;
}
