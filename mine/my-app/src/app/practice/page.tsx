import { useState } from "react";
import PracticeButton from "./PracticeButton";

export default function PracticePage() {
  const [count, setCount] = useState(0);
  
  return (
    <main className="min-h-screen bg-blue-100 p-6">
      <section 
        // className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow"
        // style={{ position: "relative"}}
        className="mx-auto max-w-xl rounded-xl
        bg-white p-6 shadow"
        >
        {/* <span
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "#ef4444",
            color: "white",
            padding: "4px 8px",
            borderRadius: 6,
          }}
        >
          NEW
        </span> */}

        <span className="absolute right-3 top-3 rounded bg-red-500 px-2 py-1 text-white">
          NEW
        </span>

        <h1 className="text-left text-2xl font-bold">
          나만의 페이지
        </h1>

        <p className="mt-4 text-center text-gray-500">
          Next.js와 Tailwind CSS를 연습합니다.
        </p>

        <div className="mt-6 flex-col items-center gap-4 md:flex-row md:jstify-center">
          <p>클릭 횟수: {count}</p>

          <PracticeButton label="클릭하기" onClick={() => setCount((prev) => prev + 1)} />
        </div>
      </section>
    </main>
  );
}