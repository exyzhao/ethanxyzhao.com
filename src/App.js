const App = () => {
  return (
    <div className={"bg-blue1 font-serif flex flex-col"}>

      <div className={"flex justify-center p-6"}>
        <b className={"font-sans tracking-wider"}>ETHAN ZHAO</b>
      </div>
      <div className={"flex px-4 pt-10 pb-16"}>
        <h1 className={"text-4xl leading-tight"}>
          I'm Ethan! I'm currently a student at Penn. I love designing and building things.
        </h1>
      </div>

      <div className={"bg-blue2"}>
        <div className={"flex justify-center pt-12 pb-8"}>
          <h2 className={"font-sans tracking-wider"}>ABOUT ME</h2>
        </div>
        <div className={"flex flex-col gap-5 px-4 pb-12"}>
          <div>
            <p>Studying:</p>
            <ul className={"list-disc pl-5"}>
              <li>Operations, Info, and Decisions</li>
              <li>Business Analytics (Stats + Management)</li>
              <li>Minor in CS</li>
            </ul>
          </div>
          <div>
            <p>Work:</p>
            <ul className={"list-disc pl-5"}>
              <li>SWE Intern at <a target="_blank" rel="noreferrer" href="https://withpika.com"><em><u>Pika Earth</u></em></a></li>
              <li>PM Intern at <a target="_blank" rel="noreferrer" href="https://www.splunk.com/en_us/products/it-service-intelligence.html"><em><u>Splunk</u></em></a></li>
              <li>ML & PM Intern at <a target="_blank" rel="noreferrer" href="https://watchcharts.com"><em><u>WatchCharts</u></em></a></li>
            </ul>
          </div>
          <div>
            <p>Outside of work:</p>
            <ul className={"list-disc pl-5"}>
              <li>Running a pop-up dining concept <em><u>(1)</u></em></li>
              <li>Spending time in makerspaces <em><u>(2)</u></em></li>
              <li>Playing volleyball, card games, board games</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
