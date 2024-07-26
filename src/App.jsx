import { useState } from 'react'
import { classer } from './utility/classer'
import './index.css'
import './style.css'
import imgMain from './assets/images/image-header-desktop.jpg'
import imgMin from './assets/images/image-header-mobile.jpg'

function App() {
  const [count, setCount] = useState(0)
  const width = window.innerWidth
  // console.log(width);

  return (
    <>
      <div className={classer("wrapper flex items-center justify-center w-full h-screen")}>
        <main className={classer('h-fit myMain rounded overflow-hidden md:flex w-5/6 justify-between')}>
          <div className={classer("overflow-y-auto py-10 px-10 w-1/2 myScroll lg:h-fit")}>
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
            <picture>
              {/* <source media="(max-width: 700px)" srcSet={imgMain} /> */}
              <img src={imgMain} alt="" className='h-full'/>
            </picture>
            <div className='myOver w-full h-full absolute top-0 opacity-50 brightness-75 saturate-150 contrast-150' ></div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
