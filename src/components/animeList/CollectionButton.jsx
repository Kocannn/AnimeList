"use client";

import { useState } from "react";

const CollectionButton = ({
  mediaId,
  userId,
  title,
  image,
  mediaType
}) => {
  const [isCreated, setIsCreated] = useState(false);
  const handleCollection = async (ev) => {
    ev.preventDefault();
    const data = { mediaId, userId, title, image, mediaType};
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(collection.isCreated);
    }
  };
  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">Berhasil ditambahkan ke koleksi</p>
      ) : (
        <button
          onClick={handleCollection}
          className="px-1 py-1 text-color-primary bg-color-accent rounded hover:bg-color-secondary"
        >
          Collection Button
        </button>
      )}
    </>
  );
};

export default CollectionButton;
