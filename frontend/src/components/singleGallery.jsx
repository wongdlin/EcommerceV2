function SingleGallery({images}) {
    console.log(images)
  return (
    <div className="lg:col-span-3">
      <img
        alt={images[0].alt_text}
        src={images[0].image_url}
        className=" lg:w-[32%]  m-auto rounded-lg object-cover"
      />
    </div>
  );
}
export default SingleGallery;
