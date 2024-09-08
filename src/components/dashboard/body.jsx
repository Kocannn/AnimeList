"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import StatusCommentBox from "../../components/dashboard/statusCommentBox";
import {
  groupActivitiesByDate,
  createGridData,
  generateRangeDay,
  getColor,
} from "../../libs/activities";

const ProfilePage = ({ userId, collections, users }) => {
  const [content, setContent] = useState("");
  const router = useRouter();
  const activityDataSet = groupActivitiesByDate(users.activities);
  const dateRange = generateRangeDay(143);
  const gridData = createGridData(dateRange, activityDataSet);

  const postActivity = async () => {
    const action = "Posted";
    const targetType = "ForumPost";
    const { id } = users;
    const activity = await fetch("/api/v1/activities", {
      method: "POST",
      body: JSON.stringify({ userId: id, action, targetType }),
    });
    const data = await activity.json();
    return data;
  };
  const handlePost = async (event) => {
    event.preventDefault();
    if (content.length >= 3) {
      const data = { userId, content };
      const response = await fetch("/api/v1/status", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const postStatus = await response.json();
      if (postStatus.status == 200) {
        setContent("");
        router.refresh();
      }
    }
  };

  const handleInput = (event) => {
    setContent(event.target.value);
  };
  return (
    <div className="px-12 py-8 bg-">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-gray-600 mb-4">Activity History</h2>
          <div className="bg-white p-6 rounded shadow-md h-auto">
            <div className="grid grid-cols-24 grid-flow-row gap-1">
              {gridData.map((day, index) => (
                <div
                  title={`${day.date}: ${day.count} activities`}
                  key={index}
                  className={`w-3 col-span-1 h-3 rounded-sm`}
                  style={{
                    backgroundColor: getColor(day.count)
                  }}
                />
              ))}
            </div>
          </div>
          {collections.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-gray-600 mb-4">Collections</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 shadow-md rounded p-4">
                {collections.map((item, index) => (
                  <div key={index}>
                    <Image
                      src={item.image}
                      alt={`Anime ${index + 1}`}
                      width={200}
                      height={300}
                      className="object-cover w-full h-full rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <h2 className="text-gray-600 mb-4">Activity</h2>
          <div className="bg-white p-4 rounded shadow-md">
            <textarea
              className="w-full bg-gray-100 p-2 rounded mb-4 resize-none"
              placeholder="Write a status..."
              value={content}
              onChange={handleInput}
            ></textarea>
            <div className="text-right">
              <button
                onClick={(event) => {
                  postActivity();
                  handlePost(event);
                }}
                className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
              >
                Post
              </button>
            </div>
          </div>
          <StatusCommentBox users={users} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
