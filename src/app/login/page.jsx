"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function Page() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    if (result.error) {
      setError("Email atau password salah");
      return;
    }
    router.push("/");
    router.refresh();
  };
  const handlerSignInWithGoogle = (e) => {
    e.preventDefault();
    signIn("google", {
      callbackUrl: "/",
    });
  };
  const handlerSignInWithGithub = (e) => {
    e.preventDefault();
    signIn("github", {
      callbackUrl: "/",
    });
  };

  return (
    <>
      {error && (
        <div
          className="flex items-center p-4 m-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Alert!</span> {error}
          </div>
        </div>
      )}

      <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="bg-[#5555] w-1/2 rounded-xl p-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-color-primary">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={loginUser}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-color-primary"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                    required
                    className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-color-primary"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-color-primary hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    value={data.password}
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center  rounded-md bg-[#4285F4] hover:bg-[#4285F4]/90 px-3 py-1.5 text-sm font-semibold leading-6 text-color-primary shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign In
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have any acount?{" "}
              <a
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
