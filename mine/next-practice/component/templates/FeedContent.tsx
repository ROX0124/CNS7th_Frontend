import FeedNextButton from "@/component/molecules/FeedNextButton";

export default async function FeedContent({
    searchParams,
}: {
    searchParams: Promise<{
        page?: string;
        limit?: string;
        sort?: string;
        search?: string;
    }>;
}) {
    const {
        page = "1",
        limit = "10",
        sort = "asc",
        search = "",
    } = await searchParams;

    return (
  <div>
    <h1>Feed 페이지</h1>
    <p>현재 페이지: {page}</p>
    <p>표시 개수: {limit}</p>
    <p>정렬 방식: {sort}</p>
    <p>검색어: {search}</p>

    <p style={{ color: "red" }}>
      FeedContent 수정 확인!
    </p>

    <FeedNextButton page={page} />
  </div>
);
}