function FourGallery({images}) {
  return (
    <>
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
      <img
        alt={images[3].alt}
        src={images[3].image_url}
        className="hidden aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto lg:block"
      />
    </>
  );
}
export default FourGallery;
