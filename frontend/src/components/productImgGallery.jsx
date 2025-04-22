import SingleGallery from "./singleGallery";
import TwoGallery from "./twoGallery";
import ThreeGallery from "./threeGallery";
import FourGallery from "./fourGallery";

function ProductImgGallery({ data }) {
  const images = data.sort((a, b) => b.is_primary - a.is_primary);
  let imageElement = null;

  if (images.length === 1) {
    imageElement = <SingleGallery images={images} />;
  } else if(images.length === 2){
    imageElement = <TwoGallery images={images}/>
  } else if(images.length === 3){
    imageElement = <ThreeGallery images={images}/>
  }
  else if (images.length === 4) {
    imageElement = <FourGallery images={images}/>
  }

  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      {imageElement}
    </div>
  );
}
export default ProductImgGallery;
