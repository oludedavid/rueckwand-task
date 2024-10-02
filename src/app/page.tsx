import ProductImage from "@/components/productImage/productImage";
import Customisation from "@/components/customization/customisation";
export default function Home() {
  return (
    <div className="container  px-4 py-8 mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <ProductImage />
        <Customisation />
      </div>
    </div>
  );
}
