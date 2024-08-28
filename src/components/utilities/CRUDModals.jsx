"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const CRUDModals = ({email}) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const router = useRouter()

  const toggleModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const editProfile = async(e) => {
    e.preventDefault();
    await fetch("/api/v1/editProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email  }),
    });
    router.refresh();
  }


 
  return (
    <>
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="flex w-3/4 text-gray-700 justify-center items-center h-auto p-4 mb-4  bg-color-secondary hover:bg-color-secondary hover:bg-opacity-90 mx-auto rounded flex-col"
        type="button"
        onClick={toggleModal}
      >
        Edit Profile
      </button>
      {showModal && (
        <div
          id="crud-modal"
          aria-hidden="true"
          class="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center"
        >
          <div class="relative  p-4 w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-color-primary dark:text-white">
                  Edit Profile
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                  onClick={toggleModal}
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <form class="p-4 md:p-5" onSubmit={editProfile}>
                <div class="grid gap-4 mb-4 grid-cols-2">
                  <div class="col-span-2">
                    <label
                      class="block mb-2 text-sm font-medium text-color-primary dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-color-primary text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Username"
                      required=""
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    class="text-white justify-center inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CRUDModals;
