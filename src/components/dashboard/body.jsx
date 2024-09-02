import Image from "next/image";
import Link from "next/link";

const activityData = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
];

const ProfilePage = ({ user, image, user_email, collections }) => {
  console.log({data: collections})
  return (
    

      <div className="px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-gray-600 mb-4">Activity History</h2>
            <div className="bg-white p-6 rounded shadow-md h-auto">
              <div className="grid grid-cols-24 grid-flow-row gap-1">
                {activityData.map((day, index) => (
                  <div
                    key={index}
                    className={`w-3 col-span-1 h-3 rounded-sm ${
                      day ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

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
          </div>

          <div className="md:col-span-2">
            <h2 className="text-gray-600 mb-4">Activity</h2>
            <div className="bg-white p-4 rounded shadow-md">
              <textarea
                className="w-full bg-gray-100 p-2 rounded mb-4"
                placeholder="Write a status..."
              ></textarea>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfilePage;
