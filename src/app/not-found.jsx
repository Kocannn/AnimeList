"use client"
import { useRouter } from "next/navigation"


export default function Page() {
    const router = useRouter()
    const handlerBack = (event) => {
        event.preventDefault();
        router.back();
    }
    return (
      <>
        <main className="grid h-full place-items-center bg-color-primary px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={handlerBack}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 bg-color-accent text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back
              </button>
            </div>
          </div>
        </main>
      </>
    )
  }
  