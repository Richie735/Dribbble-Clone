import { config, g } from '@grafbase/sdk';

const User = g.model('User', {
  name: g.string().length({ min: 3, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  twitterUrl: g.url().optional(),
  websiteUrl: g.url().optional(),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
});

const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  imageUrl: g.url(),
  liveSiteUrl: g.url().optional(),
  sourceCodeUrl: g.url().optional(),
  tags: g.string().search(),
  createdBy: g.relation(() => User),
});

export default config({
  schema: g,
});
