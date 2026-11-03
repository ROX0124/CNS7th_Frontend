"use client";

import { useRouter } from "next/navigation";
export default function FeedNextButton({
    page,
}: {
    page: string;
}) {
    const router = useRouter();

    return (
  <button
    type="button"
    className="mt-4 cursor-pointer rounded bg-blue-600 px-4 py-2 text-white"
    onClick={() => {
      router.push(`/feed?page=${Number(page) + 1}`);
    }}
  >
    Next
  </button>
);
}