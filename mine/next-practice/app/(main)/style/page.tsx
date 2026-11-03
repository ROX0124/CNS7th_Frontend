import { cn } from "@/lib/utils";

const toneClass = {
  danger: "bg-red-600 text-white",
  normal: "bg-slate-200 text-black",
};

export default function StylePage() {
    const tone: "danger" | "normal" = "normal";

    return (
        <div className="p-8">
            <h1 className="mb-4 text-2xl font-bold">
                Tailwind CSS 실습
            </h1>

            <button
                type="button"
                className={cn("rounded px-4 py-2", toneClass[tone])}
            >
                확인
            </button>
        </div>
    );
}