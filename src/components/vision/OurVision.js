import visionImage from '../../assets/vision.jpg'

const OurVision = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 mt-8">
      <h1 className="text-primary text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-secondary mt-10 pb-2">
        Our Vision
      </h1>

      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(82,53,160,0.8), rgba(82,53,160,.8)), url(${visionImage.src})`,
          backgroundSize: 'cover',
          backdropFilter: 'blur(10px)',
          backgroundPosition: 'top ',
          backgroundRepeat: 'no-repeat',
        }}
        className="py-20 h-full w-full mt-8 gap-5 items-center rounded-md"
      >
        <div className=" px-8 text-center mx-auto w-full sm:w-[90%] md:w-[70%] lg-w-[60%]">
          {' '}
          <h1 className="md:text-3xl text-2xl font-bold text-secondaryText">
            Why Choose Us
          </h1>
          <p className="text-sm text-justify mb-5 mt-7 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            minima labore fugit incidunt a asperiores! Odit, est culpa. Eveniet
            quas ab rerum aperiam aliquam inventore nobis, saepe id impedit
            officia. Voluptatum quasi architecto nemo veritatis voluptas sunt
            quo, aspernatur consequatur.
          </p>
          <p className="text-sm text-justify text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            ducimus est quae enim pariatur, magnam deleniti, vero iure
            consequuntur minus labore quibusdam unde accusamus maiores mollitia
            repudiandae natus nihil? Quas saepe hic dolores illum, dolor aliquid
            ea doloremque ab sapiente numquam qui fugit temporibus! Cupiditate
            porro temporibus quidem voluptas eligendi, unde tempora id
          </p>
          <button className="mt-7 text-primary bg-white px-4 py-1 font-medium rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurVision
