import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { BiCheck, BiMinus } from 'react-icons/bi'
import { useState } from 'react'
const Faq = () => {
  const [active, setActive] = useState(0)

  const list = [{ heading: "What do you recommend for sensitive skin?" }, { heading: "What do you recommend for sensitive skin?" }, { heading: "What do you recommend for sensitive skin?" }]
  return (
    <>
      <div className='bg-[#F4F4F4]'>
        <div className='container mx-auto  xl:px-20 px-5 lg:py-8 py-5'>
          <div className='max-w-[800px] mx-auto '>
            <h2 className='text-[#050505] text-[32px] font-mons font-medium text-center'>Frequently Asked Questions</h2>

            <div className='pt-6'>
              <ul>
                {list.map((item, i) => (
                  <li className='pb-5'>
                    <div onClick={() => setActive(i)} className='border-b pb-2   flex justify-between cursor-pointer items-center'>
                      <h2 className={`text-[20px] font-mons font-medium ${active === i ? 'text-[#B58F2E]' : 'text-[#050505]'}`}>{item.heading}</h2>
                      {active === i ?
                        <div onClick={() => setActive(i)} className=' cursor-pointer'>
                          <BiMinus className=' cursor-pointer' />
                        </div>
                        :
                        <HiPlus className=' cursor-pointer' />
                      }
                    </div>
                    {
                      active === i &&

                      <div className='pt-5 pb-20  translate-y-10 delay-150 ease-in-out'>
                        <p className='text-[16px] font-medium font-mons leading-[30px]'>
                          Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio..
                        </p>

                        <div className='pt-5 px-5'>
                          <ul>
                            <li className='flex '>
                              <BiCheck className='text-[20px]' />
                              <h2 className='text-[16px] px-1 font-mons font-medium leading-[25px]'>Nullam dictum felis eu pede mollis pretium.</h2>
                            </li>
                            <li className='flex py-3'>
                              <BiCheck className='text-[20px]' />
                              <h2 className='text-[16px] px-1 font-mons font-medium leading-[25px]'>Nullam dictum felis eu pede mollis pretium.</h2>
                            </li>
                            <li className='flex '>
                              <BiCheck className='text-[20px]' />
                              <h2 className='text-[16px] px-1 font-mons font-medium leading-[25px]'>Nullam dictum felis eu pede mollis pretium.</h2>
                            </li>
                          </ul>
                        </div>
                      </div>
                    }
                  </li>
                ))}

              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Faq