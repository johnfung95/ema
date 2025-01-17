import React from "react"

const ErrorPageNumber: React.FC = () => {
    return (<div className="flex mt-8 sm:mt-16 justify-center items-center text-center">
    <div className="flex flex-col gap-8 sm:gap-20">
      <h1 className="font-extrabold text-4xl sm:text-9xl">Error 404</h1>
      <p className="font-extrabold text-xl sm:text-4xl">Cannot find page.</p>
      <p className="font-extrabold text-xl sm:text-4xl">
        Please try again later.
      </p>
    </div>
  </div>)
}

export default ErrorPageNumber