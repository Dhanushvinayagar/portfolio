import React from 'react'


function Project() {
  const project = [
      {
        "proname":"Portfolio",
        "desc":"Prototype with of this project deals with the comics ,movies,series",
        "tech":['Next js','Tailwind CSS',"Javascript"],
        "github":"https://github.com/Dhanushvinayagar/portfolio"
      },

      {
        "proname":"Consultancy project",
        "desc":"This is the consultancy project that have commercial features for merchants to trade the rice to the customers.",
        "tech":['HTML','CSS',"Javascript","Django"],
        "github":"https://github.com/Dhanushvinayagar/Dhanamtrades"
      },
      {
        "proname":"Comic-on",
        "desc":"This project deals with the checking of the comics ,movies,series.",
        "tech":['React','Node','Express','Mongodb'],
        "github":"https://github.com/Dhanushvinayagar/Comics"
      },
      {
        "proname":"Smart transportation",
        "desc":"This project deals with the smart card transportation using rfid and a mobile app to check and pay the travelling amount using virtual cash.",
        "tech":['IOT','Flutter'],
        "github":"https://github.com/GOKULKRISHNA-R/Smart-Transportation"
      }

  ]
  return (
    <div className="grid grid-cols-1 gap-4 place-items-center h-56 py-2 px-5">
      {
        project.map((item,key)=>{
          return(
             <div className="max-w-sm p-7  border border-lime-200 rounded-lg bg-black" key={key}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-900 dark:text-cyan-400  ">{item.proname}</h5>
                  <hr className='p-1'></hr>
                  <p className="mb-3 font-normal text-lime-100 dark:text-lime-100">{item.desc}</p>
                  <h6 className="mb-2 text-1xl font-bold tracking-tight text-black-700 dark:text-cyan-600 underline underline-offset-1">Technology</h6>
                  {
                    item.tech.map(
                      (el,key)=>{
                        return(
                          <div key={key}>
                                  <li className="mb-3 font-normal text-lime-100 dark:text-lime-50">{el}
                                  </li>
                          </div>
                        )
                      }
                    )
                     
                  }
                  <a href={`${item.github}`} target='_blank'>
                    <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Github                        
                    </button>
                  </a>
              </div>
          )
        }
      )}


    </div>
  )
}

export default Project
