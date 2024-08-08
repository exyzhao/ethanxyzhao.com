import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import sun from './assets/img/sun.svg'

const App = () => {
  const [sunX, setSunX] = useState(null)
  const [sunY, setSunY] = useState(null)
  const sunContainer = useRef(null)

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
    <div className="flex flex-col bg-blue1 font-serif">
      {/* <div className={"bg-black h-5 w-5"} id="face" /> */}
      <div className="flex justify-center bg-blue1 pb-6 pt-2 md:p-6">
        <b className="font-sans tracking-wider">ETHAN ZHAO</b>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col justify-between md:flex-row">
        <div className="flex max-w-xl px-4 pb-14 pt-10 md:pb-16 md:pl-8 lg:pl-20">
          {/* Responsive horizontal padding repeated below */}
          <h1 className="text-4xl leading-tight">
            I'm Ethan! I'm currently a student at Penn. I love designing and
            building things.
          </h1>
        </div>
        <div className="flex justify-center px-4 pb-20 pt-6 md:pr-8 lg:pr-20">
          <img src={sun} className="h-40 w-40" />
          {/* <div
            ref={sunContainer}
            className={'h-40 w-40 rounded-full bg-yellow'}
          >
            <div className={"bg-black h-5 w-5"} id="face" />
          </div> */}
        </div>
      </div>

      <div className="flex flex-col items-center bg-blue2">
        <div className="flex justify-center pb-8 pt-12">
          <h2 className="font-sans tracking-wider">ABOUT ME</h2>
        </div>
        <div className="flex flex-col gap-5 px-4 pb-12 md:w-7/12">
          <div>
            <p>Studying:</p>
            <p>@ The Wharton School, University of Pennsylvania</p>
            <ul className="list-disc pl-5">
              <li>Operations, Information, and Decisions</li>
              <li>Business Analytics (Stats + Management)</li>
              <li>Minor in CS</li>
            </ul>
          </div>
          <div>
            <p>Work:</p>
            <ul className="list-disc pl-5">
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
            <ul className="list-disc pl-5">
              <li>
                Developing recipes and running a{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/everynowthenn"
                >
                  <u>pop-up dining concept</u>
                </a>
              </li>
              <li>
                Spending time in makerspaces{' '}
                <em>
                  <u>(coming soon)</u>
                </em>
              </li>
              <li>
                Enjoying: volleyball, running, board games, crosswords, farmers'
                markets
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-blue3">
        <div className="flex justify-center pb-8 pt-12">
          <h2 className="font-sans tracking-wider">RECENT PROJECTS</h2>
        </div>
        <div className="flex flex-col gap-5 px-4 pb-12 md:w-7/12">
          <div>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/exyzhao/rag-pdf"
              >
                <em>
                  <u>PDF Querier</u>
                </em>
              </a>
            </p>
            <ul className="list-disc pl-5">
              <li>
                Utilized retrieval-augmented generation to enable querying
                across multiple PDF files
              </li>
              <li>
                Created Q&A interface providing document citations and answer
                history
              </li>
            </ul>
          </div>
          <div>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://youtu.be/1XRC1sz3-N8?si=eJJf3mUlSiEbQPGV"
              >
                <em>
                  <u>Procedural City</u>
                </em>
              </a>
            </p>
            <ul className="list-disc pl-5">
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
            <ul className="list-disc pl-5">
              <li>
                Developed app showcasing visualizations of mood/energy tracking,
                confessions, hypotheticals, and other data from Penn's student
                population
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
