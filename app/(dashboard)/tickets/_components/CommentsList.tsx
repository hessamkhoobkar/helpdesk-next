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
    <div className="gtid grid-cols-1 gap-4">
      <CommentCard
        user={firstComment.user}
        date={firstComment.date}
        comment={firstComment.comment}
      />
    </div>
  );
}
