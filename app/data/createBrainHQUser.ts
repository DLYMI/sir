type CreateBrainUserResponse = {
  web: string;
  ios: string;
  android: string;
  expires_in: number;
  error: string;
};

const createBrainHQUser = async (
  userId: number,
  email: string,
  firstName: string
): Promise<CreateBrainUserResponse> => {
  console.log(firstName);
  // SSO into BrainHQ
  const data = await fetch(`/api/brain-hq/user/create`, {
    method: "POST",
    body: JSON.stringify({
      userId,
      email,
      firstName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await data.json();
  return result;
};

export default createBrainHQUser;
