import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const App = () => {
  const [sunX, setSunX] = useState(null)
  const [sunY, setSunY] = useState(null)
  const sunContainer = useRef(null)

  const sayHelloLinting = (fName) => {
    console.log('Hello linting, ${fName}')
  }

  // useEffect(() => {
  //   setSunX(sunContainer.current.offsetLeft + 80)
  //   setSunY(sunContainer.current.offsetTop + 80)
  // }, [])

  // document.body.addEventListener("mousemove", event => {
  //   const mouseX = event.pageX
  //   const mouseY = event.pageY

  //   var dx = mouseX + sunX - 80
  //   var dy = mouseY + sunY - 80
  //   var angle = Math.atan2(dy, dx)

  //   var faceX = 80 + 40 * Math.cos(angle)
  //   var faceY = 80 + 40 * Math.cos(angle)

  //   // if (!!dx && !!dy) {
  //   //   gsap.to("#face", {
  //   //     x: mouseX,
  //   //     y: mouseY
  //   //   })
  //   // }
  // })

  return (
    <div className={'flex flex-col bg-blue1 font-serif'}>
      {/* <div className={"bg-black h-5 w-5"} id="face" /> */}

      <div className={'flex justify-center bg-blue1 pb-6 pt-2 md:p-6'}>
        <b className={'font-sans tracking-wider'}>ETHAN ZHAO</b>
      </div>
      <div className={'flex flex-col justify-between md:flex-row'}>
        <div
          className={'flex max-w-xl px-4 pb-14 pt-10 md:pb-16 md:pl-8 lg:pl-20'}
        >
          {/* Responsive horizontal padding repeated below */}
          <h1 className={'text-4xl leading-tight'}>
            I'm Ethan! I'm currently a student at Penn. I love designing and
            building things.
          </h1>
        </div>
        <div className={'flex justify-center px-4 pb-20 pt-6 md:pr-8 lg:pr-20'}>
          <div
            ref={sunContainer}
            className={'h-40 w-40 rounded-full bg-yellow'}
          >
            {/* <div className={"bg-black h-5 w-5"} id="face" /> */}
          </div>
        </div>
      </div>

      <div className={'flex flex-col items-center bg-blue2'}>
        <div className={'flex justify-center pb-8 pt-12'}>
          <h2 className={'font-sans tracking-wider'}>ABOUT ME</h2>
        </div>
        <div className={'flex flex-col gap-5 px-4 pb-12 md:w-7/12'}>
          <div>
            <p>Studying:</p>
            <ul className={'list-disc pl-5'}>
              <li>Operations, Info, and Decisions</li>
              <li>Business Analytics (Stats + Management)</li>
              <li>Minor in CS</li>
            </ul>
          </div>
          <div>
            <p>Work:</p>
            <ul className={'list-disc pl-5'}>
              <li>
                SWE Intern at{' '}
                <a target="_blank" rel="noreferrer" href="https://withpika.com">
                  <em>
                    <u>Pika Earth</u>
                  </em>
                </a>
              </li>
              <li>
                PM Intern at{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.splunk.com/en_us/products/it-service-intelligence.html"
                >
                  <em>
                    <u>Splunk</u>
                  </em>
                </a>
              </li>
              <li>
                ML & PM Intern at{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://watchcharts.com"
                >
                  <em>
                    <u>WatchCharts</u>
                  </em>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>Outside of work:</p>
            <ul className={'list-disc pl-5'}>
              <li>
                Running a pop-up dining concept{' '}
                <em>
                  <u>(1)</u>
                </em>
              </li>
              <li>
                Spending time in makerspaces{' '}
                <em>
                  <u>(2)</u>
                </em>
              </li>
              <li>Playing volleyball, card games, board games</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={'flex flex-col items-center bg-blue3'}>
        <div className={'flex justify-center pb-8 pt-12'}>
          <h2 className={'font-sans tracking-wider'}>RECENT PROJECTS</h2>
        </div>
        <div className={'flex flex-col gap-5 px-4 pb-12 md:w-7/12'}>
          <div>
            <p>
              <em>PDF Querier</em>
            </p>
            <ul className={'list-disc pl-5'}>
              <li>
                Utilized retrieval-augmented generation to enable
                citation-backed querying across multiple PDF files with a Q&A
                interface
              </li>
            </ul>
          </div>
          <div>
            <p>
              <em>Procedural City</em>
            </p>
            <ul className={'list-disc pl-5'}>
              <li>
                Implemented 3D wave function collapse to generate
                non-deterministic layouts for a city
              </li>
              <li>
                Worked with computer graphics team to populate layout with
                assets
              </li>
            </ul>
          </div>
          <div>
            <p>
              <em>Penn Playbook</em>
            </p>
            <ul className={'list-disc pl-5'}>
              <li>to be populated</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
