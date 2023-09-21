const OurServicesCard = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-40 mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow p-4 dark:bg-gray-800 dark:border-gray-700">
      {<data.icon className="text-5xl mx-auto text-secondary" />}
      <h1 className="text-center text-primary text-base md:text-md font-semibold mt-3 mb-2">
        {data.title}
      </h1>
    </div>
  )
}

export default OurServicesCard
