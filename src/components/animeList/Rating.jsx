"use client";
import { Rating as SmastromRating, ThinStar } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const MyRating = ({ mediaId, userId, value }) => {
  const [rating, setRating] = useState(0);
  const [read, setRead] = useState(false);
  const router = useRouter();

  useEffect(() => {
  if (value > 0) setRead(true);
  },[value])

  const handleRating = async (rating) => {
    setRating(rating);
    await updateRating(rating);
  };
  const updateRating = async (rating) => {
    const data = { mediaId, userId, rating};
    const response = await fetch("/api/v1/ratings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    router.refresh();
  };


  return (
    <SmastromRating
      style={{ maxWidth: 125 }}
      value={value}
      onChange={handleRating}
      itemStyles={myStyles}
      readOnly={read}
    />
  );
};

export default MyRating;
