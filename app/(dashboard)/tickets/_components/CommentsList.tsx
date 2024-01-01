import CommentCard from "./CommentCard";

interface Comment {
  user: {
    avatar: string;
    first_name: string;
    last_name: string;
  };
  date: Date;
  comment: string;
}

export default function CommentsList({
  firstComment,
  comments,
}: {
  firstComment: Comment;
  comments?: Comment[];
}) {
  return (
    <div className="grid grid-cols-12 gap-8 mt-8">
      <div className="col-span-11 md:col-span-7">
        <CommentCard
          user={firstComment.user}
          date={firstComment.date}
          comment={firstComment.comment}
        />
      </div>
      <div className="col-span-12 md:col-span-7 md:col-start-6 bg-default-200 dark:bg-default-100 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-bold mb-2 text-primary">
          Work in progress
        </h2>
        <p>
          Comments implications are coming soon. Clients, employees, and admins
          can comment on a ticket and give updates on its progress. Comments can
          not be deleted or edited to keep a record of them.
        </p>
      </div>
    </div>
  );
}
