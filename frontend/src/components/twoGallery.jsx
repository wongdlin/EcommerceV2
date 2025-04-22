function TwoGallery({images}) {
  return (
    <div className="lg:w-[65%] mx-auto grid lg:col-span-3 lg:grid-cols-2 gap-4">
        <img
          alt={images[0].alt_text}
          src={images[0].image_url}
          className="size-full rounded-lg object-cover"
        />
        
        <img
          alt={images[1].alt_text}
          src={images[1].image_url}
          className="hidden aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto lg:block"
        />
      </div>
  );
}
export default TwoGallery;
