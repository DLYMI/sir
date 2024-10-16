type WelcomeBannerProps = {
  user: string;
  // don't know if we will need/want to pass the user or just the name once we get this fleshed out
};

const WelcomeBanner = ({ user }: WelcomeBannerProps) => {
  return (
    <div className="text-white bg-navy-primary pt-12 pb-20 text-center max-md:px-4">
      <h2 className="text-3xl">Hi, {user}! Welcome To Your Hub </h2>
      <p className="text-lg ">
        Discover new hobbies for ongoing learning and connect with like-minded
        individuals.
      </p>
    </div>
  );
};

export default WelcomeBanner;
