import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfilePicture() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {user && user.picture && (
        <img
          src={user.picture}
          alt={`${user.given_name} ${user.family_name}`}
          className="circle"
        />
      )}
    </div>
  );
}
