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
    <div className="grid grid-cols-12 gap-4 mt-8">
      <div className="col-span-7">
        <CommentCard
          user={firstComment.user}
          date={firstComment.date}
          comment={firstComment.comment}
        />
      </div>
    </div>
  );
}
