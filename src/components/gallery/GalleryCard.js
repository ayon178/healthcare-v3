const GalleryCard = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${data.image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%', 
      }}
      className="h-52 grid grid-cols-2 md:grid-cols-3 border_left_top_bottom overflow-hidden rounded-md "
    >
      <div className=""></div>
      <div className="hidden md:block"></div>
      <div
        className="h-full"
        style={{
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="flex px-4 h-full flex-col items-center justify-center">
        <h1 className="text-center font-semibold text-lg md:text-xl text-secondaryText">{data.title}</h1>
        <h1 className="text-center text-[.7rem] text-white mt-3">{data.details}</h1>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard
