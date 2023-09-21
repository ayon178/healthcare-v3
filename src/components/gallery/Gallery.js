import galaryImageOne from '../../assets/galley1.png'
import galaryImageTwo from '../../assets/gallery2.png'
import galaryImageThree from '../../assets/gallery3.png'
import galaryImageFour from '../../assets/gallery4.png'
import GalleryCard from './GalleryCard'

const galaryData = [
  {
    title: 'Text Writeup',
    image: galaryImageOne,
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
  {
    title: 'Text Writeup',
    image: galaryImageTwo,
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
  {
    title: 'Text Writeup',
    image: galaryImageThree,
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
  {
    title: 'Text Writeup',
    image: galaryImageFour,
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
]

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 mt-8">
      <h1 className="text-2xl text-primary md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-secondary  mt-10 pb-2">
        Galary
      </h1>
      <p className="text-sm text-center mt-3 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        sit fugiat dignissimos est modi minima eaque blanditiis tenetur
        architecto eveniet qui nobis. Mollitia ex reprehenderit neque! Nesciunt
        quasi commodi, voluptas minus maxime, exercitationem harum alias
        suscipit dolores corrupti quaerat cum beatae facilis! Neque nemo
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[95%] lg:w-[80%] mx-auto px-4 md:px-0">
        {galaryData.map((data, index) => (
          <GalleryCard key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
