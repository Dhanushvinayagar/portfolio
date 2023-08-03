"use client"
import Image from 'next/image'
import React from 'react'

function Contact() {

  const details = [

    {
      'logo':'gmail',
      'details':'dhanush22092002@gmail.com'
    },
    {
      'logo':'linkedin',
      'details':'https://www.linkedin.com/in/dhanushk2002/'
    },
    {
      'logo':'git',
      'details':'https://github.com/Dhanushvinayagar'  
    },
    {
      'logo':'leetcode',
      'details':"https://leetcode.com/user6669Mp/"
    }
  ]
  return (
    <>
    
       <div class="flex p-2  place-content-center space-x-5 ">
          <h1 className='text-3xl font-semibold'>Contact details
          </h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-1 justify-items-stretch  lg:px-80  md:w-screen px-2">
                              {
                                  details.map((item,key)=>{
                                      return (
                                        <div key={key}>
                                        
                                          <div className="flex  border border-lime-200 p-2 m-2 rounded" >
                                                
                                                            <Image src = {`/${item.logo}.svg`}
                                                                            width={27}
                                                                            height={27}
                                                                            alt="pic"
                                                                          />
                                      
                                                        <div className='pl-2 text-blue-200'>
                                                          {
                                                            item.number ? 
                                                            ( <h1>{item.number} </h1> )
                                                            : 
                                                            (
                                                              item.logo=='gmail' ?
                                                              <a href={`mailto: ${item.details}`} target='_blank'>{item.details}</a>
                                                              :
                                                              <a href={`${item.details}`} target='_blank'>{item.details}</a>
                                                            )
                                                          }
                                                        </div>
                                                
                                          </div>
                                         
                                        </div>
                                      )
                                  })
                              }
        </div>
    </>
  )
}

export default Contact
