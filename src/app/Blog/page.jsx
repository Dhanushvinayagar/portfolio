import React from 'react'
import Image from 'next/image'
function  Blog() {
  const language = ["c","java","python","js","ts"]
  const skills = ["Problem solving","Team Leader","Event Organizer","Communication"]
  const tech = ["html","css","bs","tailwind","react","node","next","dj","graphql","mongo","sql"]
  const interest = ["Web development","Object oriented program (OOPS)","Database Management(DBMS)","Computer Networks","Internet of Things (IOT)"]
  return (
    <div className='d-flex px-1 m-1 text-white-500  rounded-lg text-2xl space-y-2 bg-black'>
              <div className='py-5 bg-white-100  border border-lime-200 rounded-lg' >
                <div className='font-semibold border-b border-lime-200 text-center'>
                  Program languages
                </div>              
                  <div className="grid grid-cols-3 content-evenly place-items-center ">
                    {
                      language.map((item,key)=>{
                        return(
                          <div className='py-2 m-1' key={key}>
                            <Image src = {`/${item}.svg`}
                                            width={50}
                                            height={50}
                                            alt="pic"
                                          />
                                      {/* <p>C</p>    */}
                            </div>
                        )
                      })
                    }
                  </div>
              </div>
              
              <div className='py-5 bg-white-100  border border-lime-200 rounded-lg' >
              <div className='font-semibold border-b border-lime-200 text-center'>
                Skills
                </div>
                
                  <div className="grid grid-cols-2 content-evenly place-items-center py-2 text-cyan-500 text-xl">
                    {
                    skills.map((item,key)=>{return(
                        <div className='py-2' key={key}>{item}</div>
                      )
                      })
                    }
                  </div>
                
              </div>
              <div className='py-5 bg-white-100  border border-lime-200 rounded-lg' >
              <div className='font-semibold border-b border-lime-200 text-center'>
                Technical skills
                </div>
                <div className="grid grid-cols-4 content-evenly place-items-center py-2">
                      {
                        tech.map((item,key)=>{
                          return(
                            <div className='py-2 m-1 ' key={key}>
                            <Image src={`/${item}.svg`} 
                                            width={50}
                                            height={50}
                                            alt="pic"
                                          />
                              </div>
                          )
                        })
                      }
                       
                  </div>
              </div>
              
              <div className='py-5 bg-white-100  border border-lime-200 rounded-lg' >
              <div className='font-semibold border-b border-lime-200 text-center'>
                Area of interest
                </div>
                <div className="grid grid-cols-1 content-evenly place-items-center py-2 text-cyan-500 text-xl">
                {
                    interest.map((item,key)=>{return(
                        <div className='py-2' key={key}>{item}</div>
                      )
                      })
                    }
                  </div>
              </div>
    </div>
  )
}

export default Blog
