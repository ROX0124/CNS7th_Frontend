// type BlogContentProps = {
//     blogId: string;
// };

// export default function BlogContent({
//     blogId,
// }: BlogContentProps) {
//     return (
//         <div>
//             <h1>현재 글: {blogId}</h1>
//             <p>이 페이지는 BlogContent 컴포넌트입니다.</p>
//         </div>
//     );
// }

export default async function BlogContent({
    params,
}: {
    params: Promise<{ blogId: string }>;
}) {
    const { blogId } = await params;

    return (
        <div>
            <h1>현재 글: {blogId}</h1>
            <p>BlogContent 컴포넌트입니다.</p>
        </div>
    );
}