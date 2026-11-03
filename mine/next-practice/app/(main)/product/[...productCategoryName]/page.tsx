import { Suspense } from "react";
import ProductContent from "@/component/templates/ProductContent";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ productCategoryName: string[] }>;
}) {
   const { productCategoryName } = await params;
   
   return (
    <Suspense fallback={<p>Loading...</p>}>
        <ProductContent params={params} />
    </Suspense>
   );
}