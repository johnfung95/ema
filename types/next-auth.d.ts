import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Adding the custom id field
      email: string;
      name: string;
      image?: string; // If you have an image field
    };
  }

  interface Profile {
    iss: string,
    azp: string,
    aud: string,
    sub: string,
    email: string,
    email_verified: boolean,
    at_hash: string,
    name: string,
    picture: string,
    give_name: string,
    family_name: string,
    iat: number,
    exp: number
  }
}