import dayjs from "dayjs";
import { TriviaPost } from "../types/trivia/types";

type AuthResponse = {
  success: boolean;
  statusCode: number;
  code: string;
  message: string;
  data: {
    token: string;
    id: number;
    email: string;
    nicename: string;
    firstName: string;
    lastName: string;
    displayName: string;
  };
};

const getTrivia = async (): Promise<TriviaPost> => {
  const sot = dayjs().startOf("day").format();
  const eot = dayjs().endOf("day").format();
	console.log(sot);
	console.log(eot);

  const res = await fetch(`${process.env.NEXT_PUBLIC_WPAUTH_ENDPOINT}/token`, {
    method: "POST",
    body: JSON.stringify({
      username: "kelly@edgesfirst.co",
      password: process.env.WP_PASSWORD,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const parsedResponse: AuthResponse = await res.json();
  const jwt = parsedResponse.data.token;

  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_WPREST_ENDPOINT
    }/trivia?after=${encodeURIComponent(sot)}&before=${encodeURIComponent(
      eot
    )}`,
    {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }
  );

  const trivia = await response.json();

  return trivia[0];
};

export default getTrivia;
