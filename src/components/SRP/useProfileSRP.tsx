interface User {
  name: string;
  email: string;
}

export function UserProfileSRP({ user }: { user: User | null }) {
  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
}
