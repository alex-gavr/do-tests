type TGeoInUse = 'rs' | 'za' | 'ng' | 'ke' | 'gh' | 'in' | 'bg' | 'id' | 'ph' | 'th' | 'au' | 'kr' | 'jp';

interface IBestDBLocation {
  country: TGeoInUse;
  username: string;
  password: string;
}

const frankfurtUsername = process.env.DATABASE_USERNAME_FRANKFURT!;
const frankfurtPassword = process.env.DATABASE_PASSWORD_FRANKFURT!;
const mumbaiUsername = process.env.DATABASE_USERNAME_MUMBAI!;
const mumbaiPassword = process.env.DATABASE_PASSWORD_MUMBAI!;
const singaporeUsername = process.env.DATABASE_USERNAME_SINGAPORE!;
const singaporePassword = process.env.DATABASE_PASSWORD_SINGAPORE!;

export const bestDBLocation: Array<IBestDBLocation> = [
  {
    country: 'rs',
    username: frankfurtUsername,
    password: frankfurtPassword,
  },
  {
    country: 'za',
    username: frankfurtUsername,
    password: frankfurtPassword,
  },
  {
    country: 'ng',
    username: frankfurtUsername,
    password: frankfurtPassword,
  },
  {
    country: 'ke',
    username: frankfurtUsername,
    password: frankfurtPassword,
  },
  {
    country: 'gh',
    username: frankfurtUsername,
    password: frankfurtPassword,
  },
  {
    country: 'in',
    username: mumbaiUsername,
    password: mumbaiPassword,
  },
  {
    country: 'bg',
    username: mumbaiUsername,
    password: mumbaiPassword,
  },
  {
    country: 'id',
    username: singaporeUsername,
    password: singaporePassword,
  },
  {
    country: 'ph',
    username: singaporeUsername,
    password: singaporePassword,
  },
  {
    country: 'th',
    username: singaporeUsername,
    password: singaporePassword,
  },
  {
    country: 'au',
    username: singaporeUsername,
    password: singaporePassword,
  },
  {
    country: 'kr',
    username: singaporeUsername,
    password: singaporePassword,
  },
  {
    country: 'jp',
    username: singaporeUsername,
    password: singaporePassword,
  },
];
