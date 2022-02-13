import Link from 'next/link';

function HeroHome() {


  return (
    <section className="relative">

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">D O C C O</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Docco is a patient management system that helps hospitals transfer and manage all the records of the patients. It provides two interfaces, one for hospital staff and one for doctors. 
              
              </p>
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                In the staff interface the hospital can get info about the patient, register and accept new patients. It can also assign doctors to the patients. Finally the Hospital can also refer the patients to other hospital, discharge them and alsosee the patients referref to them and the patients they referred </p>
              
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                In the Doctor interface, doctors can view the details about the patients, including their old records, their test results and medicine prescribed. They can also add their notes corresponding to the patients. The symptoms that are added are automatically analysed by a machine learning model to predict and suggest the probable disease to the doctor to help them.   
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                
              </div>
            </div>
          </div>

          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                    <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
              <Link href="/login">
              <a className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" aria-controls="modal">
                <div className="max-w-3xl mx-auto">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> L O G I N</span>
                </div>
              </a>
              </Link>
            </div>

           
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;