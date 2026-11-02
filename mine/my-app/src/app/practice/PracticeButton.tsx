// "use client";

type ButtonProps = {
    label: String;
    onClick: () => void;
};

export default function PracticeButton({
    label,
    onClick,
}: ButtonProps) {
    return(
        <button 
            type="button"
            onClick={onClick}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
            {label}
        </button>
    );
}