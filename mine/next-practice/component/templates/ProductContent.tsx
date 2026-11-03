export default async function ProductContent({
    params,
}: {
    params: Promise<{ productCategoryName: string[] }>;
}) {
    const { productCategoryName } = await params;

    return (
        <div>
            <h1>상품 카테고리</h1>
            <p>{productCategoryName.join(" / ")}</p>
        </div>
    );
}