import Image from "next/image";
import prisma from "../../libs/prisma";
import React from "react";
import { formatDistanceToNow } from "date-fns";

const CommentBox = async ({ mediaId }) => {
  const comments = await prisma.comment.findMany({ where: { mediaId },orderBy: {createdAt: 'desc'} });

  return (
    <div className="flex flex-col justify-center items-center">
      {comments.map((items, index) => {
        return (
          <div
            key={index}
            className="w-3/4 h-auto my-2 bg-color-primary mx-auto p-4 rounded"
          >
            <div className="flex flex-row items-center justify center">
              <Image width={50} height={50} src={items.userImage} alt="..." className="" />
              <p className="ml-4">{items.userName} - {formatDistanceToNow(new Date(items.createdAt),{addSuffix: true} )}</p>
            </div>
            <div className="p-2">{items.comment}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
