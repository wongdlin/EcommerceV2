function ThreeGallery({images}) {
  return (
    <div className="lg:w-[65%] mx-auto grid lg:col-span-3 lg:grid-cols-2 gap-4">
      <img
        alt={images[0].alt_text}
        src={images[0].image_url}
        className="size-full rounded-lg object-cover"
      />
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <img
          alt={images[1].alt}
          src={images[1].image_url}
          className="aspect-3/2 w-full rounded-lg object-cover"
        />
        <img
          alt={images[2].alt}
          src={images[2].image_url}
          className="aspect-3/2 w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
export default ThreeGallery;
