"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Comment = ({ anime_mal_id, user_email, user_name, anime_title, user_image, type }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();
  const handleInput = (event) => {
    setComment(event.target.value);
  };
  const handlePost = async (event) => {
    event.preventDefault();
    if (comment.length >= 3) {
      const data = {
        anime_mal_id,
        user_email,
        comment,
        user_name,
        anime_title,
        user_image,
        type
      };
      const response = await fetch("/api/v1/comment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const postComment = await response.json();
      if (postComment.status == 200) {
        setIsCreated(postComment.isCreated);
        setComment("");
        router.refresh();
      }
    } else {
      alert("minimal 3 huruf");
    }
  };

  return (
    <div className="flex flex-col items-center mt-24 gap-4">
      {isCreated && <p className="text-color-primary">Postingan terkirim...</p>}
      <textarea
        value={comment}
        onChange={handleInput}
        className="w-3/4 h-36 p-4 text-xl rounded bg-color-primary"
      />
      <button
        onClick={handlePost}
        className="text-color-primary bg-color-accent hover:bg-color-secondary px-2 py-2 w-52 rounded mb-4"
      >
        Post comment
      </button>
    </div>
  );
};

export default Comment;
