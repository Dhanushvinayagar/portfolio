import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen m-1 p-7 rounded-lg">
        
            
      
<div className="flex  justify-center py-2">
        <div className='border border-lime-200 rounded-lg w-5/6'>
          <h3 className='flex justify-center text-3xl font-semibold text-teal-700 p-2'>
            About me
          </h3>
          <p className='border border-lime-200'></p>
        <div className='flex justify-center m-2'>
          <Image src="/photo.png" className='border border-lime-400' width={200}
                                                height={150}
                                                alt="pic"
                                                />   
                                              
        </div>
          <p className='border-b border-lime-400'></p>
            <div className='font p-2 font-normal text-lime-100 dark:text-lime-100 font-normal text-lime-100 dark:text-lime-100'>
              <li>
                    Optimistic and enthusiastic guy.
              </li>
              <li>
                    To become a successful person by enhancing  my technical knowledge and skills to ensure my personal and professional growth .
              </li>
              <li>
                    Seeking a position where I can use my skills to create innovative and user-friendly software.
              </li>
              <li>
                    Self-motivated team player and motivate others in my team to achieve the motive of the team work.
              </li>
            </div>
        </div>
        
    </div>
    <div className="flex  justify-center py-2">
        <div className='border border-lime-200 rounded-lg w-5/6 '>
        <h3 className='flex justify-center text-3xl font-semibold text-teal-700 p-2'>
            Educational details
          </h3>
          <p className='border border-lime-200'></p>
          <div className='p-2 font-normal text-lime-100 dark:text-lime-100'>
              <li>                
                  Kongu Engineering College (2020-2024) with <b>CGPA : <i>9.24</i></b>
              </li>
              <li>
                  HSC-II with <b>87%</b>
              </li>
              <li>
                    SSLC with <b>90.6%</b>
              </li>
          </div>

        </div>
    </div>
    </main>
  )
}
