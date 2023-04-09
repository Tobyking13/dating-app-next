import { useUser } from "@auth0/nextjs-auth0/client";

export default function WelcomeBack() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="center-align">
      <h2>{`Welcome back, ${user.given_name}`}</h2>
    </div>
  );
}
