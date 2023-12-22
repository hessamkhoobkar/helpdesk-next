import UserCard from "./UserCard";

export default function UserList({ users }: { users: any }) {
  return (
    <div className="w-full flex flex-col gap-4">
      {users.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
