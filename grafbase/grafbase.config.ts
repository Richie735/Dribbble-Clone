import { auth, config, g } from '@grafbase/sdk';

// @ts-ignore
const User = g
  .model('User', {
    name: g.string().length({ min: 3, max: 20 }),
    email: g.string().unique(),
    avatarUrl: g.url(),
    description: g.string().length({ min: 3, max: 1000 }).optional(),
    githubUrl: g.url().optional(),
    linkedinUrl: g.url().optional(),
    twitterUrl: g.url().optional(),
    websiteUrl: g.url().optional(),
    projects: g
      .relation(() => Project)
      .list()
      .optional(),
  })
  .auth((rules) => {
    rules.public().read();
  });

// @ts-ignore
const Project = g
  .model('Project', {
    title: g.string().length({ min: 3 }),
    description: g.string(),
    imageUrl: g.url(),
    liveSiteUrl: g.url().optional(),
    sourceCodeUrl: g.url().optional(),
    tags: g.string().search(),
    createdBy: g.relation(() => User),
  })
  .auth((rules) => {
    rules.public().read();
    rules.private().create().delete().update();
  });

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret: g.env('NEXTAUTH_SECRET'),
});

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  },
});
