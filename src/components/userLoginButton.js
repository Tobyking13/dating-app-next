import { useUser } from "@auth0/nextjs-auth0/client";

export default function LoginButton() {
  const { user, error, isLoading } = useUser();
  if (user) {
    return (
      <a href="/api/auth/logout" className="waves-effect waves-light btn">
        <i className="material-icons right">logout</i>Log Out
      </a>
    );
  }

  return (
    <a href="/api/auth/login" className="waves-effect waves-light btn">
      <i className="material-icons right">login</i>Log In
    </a>
  );
}
