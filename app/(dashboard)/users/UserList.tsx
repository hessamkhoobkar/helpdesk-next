import UserCard from "./UserCard";

export default function UserList({ users }: { users: any }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
