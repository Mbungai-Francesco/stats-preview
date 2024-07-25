import { useState } from 'react'
import './index.css'
import './style.css'
import imgMain from './assets/images/image-header-desktop.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper flex items-center justify-center w-full h-screen">
        <main className='flex w-5/6 myMain justify-between'>
          <div className="w-1/2 py-16 px-14">
            <h1 className='wCol text-4xl font-semibold mb-8'>Get <span className='highlight'>insights</span> that help <br /> your business grow.</h1>
            <p className='gCol mb-14'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div className='flex justify-between'>
                <div>
                  <p className='wCol text-2xl font-semibold'>10k+</p>
                  <p className='gCol'>companies</p>
                </div>
                <div>
                  <p className='wCol text-2xl font-semibold'>314+</p>
                  <p className='gCol'>templates</p>
                </div>
                <div>
                  <p className='wCol text-2xl font-semibold'>12m+</p>
                  <p className='gCol'>queries</p>
                </div>
              </div>
          </div>
          <div className="relative">
            <img src={imgMain} alt="" className='h-full'/>
            <div className='myOver w-full h-full absolute top-0 opacity-50 brightness-75 saturate-150 contrast-150' ></div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
