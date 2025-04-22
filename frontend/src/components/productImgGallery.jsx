import SingleGallery from "./singleGallery";
import TwoGallery from "./twoGallery";
import ThreeGallery from "./threeGallery";
import FourGallery from "./fourGallery";

const galleryComponents = {
  1: SingleGallery,
  2: TwoGallery,
  3: ThreeGallery,
};

function ProductImgGallery({ data }) {
  const sortedImages = [...data].sort((a, b) => b.is_primary - a.is_primary);
  const GalleryComponent = galleryComponents[sortedImages.length] || FourGallery;

  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      {GalleryComponent && <GalleryComponent images={sortedImages}/>}
    </div>
  );
}
export default ProductImgGallery;
