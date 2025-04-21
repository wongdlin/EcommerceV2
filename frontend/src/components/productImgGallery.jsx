function ProductImgGallery ({images}){
    return(
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={images[0].alt}
            src={images[0].src}
            className="hidden size-full rounded-lg object-cover lg:block"
          />
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={images[1].alt}
              src={images[1].src}
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
            <img
              alt={images[2].alt}
              src={images[2].src}
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={images[3].alt}
            src={images[3].src}
            className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>
    )
}export default ProductImgGallery