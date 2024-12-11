"use client"
import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="mt-10 p-4 bg-zinc-300 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-black">Leave a Comment</h3>
      
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your comment here..."
          rows={4}
          className="w-full p-3 border border-black rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-white hover:bg-fuchsia-500 text-zinc-600 px-6 py-2 rounded-md mt-2 border border-zinc-500 transition"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
              <p>{comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;