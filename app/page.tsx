'use client'

import { useState, useRef, useEffect } from 'react'

function Win98Button({
  children,
  onClick,
  onMouseDown,
  ariaLabel,
  className = '',
}: {
  children: React.ReactNode
  onClick?: () => void
  onMouseDown?: (e: React.MouseEvent) => void
  ariaLabel?: string
  className?: string
}) {
  return (
    <button
      className={`win98-btn inline-flex items-center gap-1 px-2 py-0.5 text-xs leading-none select-none ${className}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

function Win98Separator() {
  return <div className="win98-separator h-6 w-0.5" />
}

function Win98TitleBar({
  children,
  onMouseDown,
  className = '',
}: {
  children: React.ReactNode
  onMouseDown?: (e: React.MouseEvent) => void
  className?: string
}) {
  return (
    <div
      className={`win98-titlebar flex items-center justify-between px-2 py-1 text-white select-none ${className}`}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  )
}

function Win98ToolbarIcon() {
  return <span className="h-4 w-4 bg-[#808080]" />
}

function Win98StatusBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-stretch bg-[#c0c0c0] text-xs">{children}</div>
  )
}

function Win98StatusCell({ children }: { children: React.ReactNode }) {
  return <div className="border-r border-[#808080] px-2 py-0.5">{children}</div>
}

function Win98Taskbar() {
  return (
    <div
      className="win98-window fixed right-0 bottom-0 left-0 flex items-center gap-2 border-b-0 p-1"
      data-role="win98-taskbar"
    >
      <button className="win98-btn inline-flex items-center gap-1 px-3 py-1 text-xs leading-none select-none">
        <img src="/sun.svg" alt="Sun icon" className="mr-1 h-4 w-4" />
        Start
      </button>
      <Win98Separator />
      <div className="win98-inset h-6 flex-1" />
      <Win98Separator />
      <div className="win98-window h-6 w-24" />
    </div>
  )
}

function Win98AddressBar() {
  return (
    <div className="flex items-center gap-2 px-2 pb-2">
      <span className="text-xs">Address</span>
      <div className="win98-inset flex h-6 flex-1 items-center px-1 text-xs">
        http://www.ethanxyzhao.com/
      </div>
      <Win98Button>Go</Win98Button>
      <Win98Separator />
      <Win98Button>Links ▾</Win98Button>
    </div>
  )
}

// Components
function Win98MenuBar() {
  return (
    <div className="flex gap-4 px-2 py-1 text-xs">
      <span>
        <span className="underline">F</span>ile
      </span>
      <span>
        <span className="underline">E</span>dit
      </span>
      <span>
        <span className="underline">V</span>iew
      </span>
      <span>
        <span className="underline">F</span>avorites
      </span>
      <span>
        <span className="underline">T</span>ools
      </span>
      <span>
        <span className="underline">H</span>elp
      </span>
    </div>
  )
}

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [timeString, setTimeString] = useState('')
  const [mobileWindowHeight, setMobileWindowHeight] = useState<number | null>(
    null,
  )
  const [dragStart, setDragStart] = useState({
    x: 0,
    y: 0,
    mouseX: 0,
    mouseY: 0,
  })
  const windowRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart({
      x: position.x,
      y: position.y,
      mouseX: e.clientX,
      mouseY: e.clientY,
    })
    setIsDragging(true)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && windowRef.current) {
      const deltaX = e.clientX - dragStart.mouseX
      const deltaY = e.clientY - dragStart.mouseY

      const newX = dragStart.x + deltaX
      const newY = dragStart.y + deltaY

      // Get actual window dimensions
      const rect = windowRef.current.getBoundingClientRect()
      const windowWidth = rect.width
      const windowHeight = rect.height

      // Keep window within viewport bounds
      const maxX = window.innerWidth - windowWidth
      const maxY = window.innerHeight - windowHeight

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    // Detect mobile viewport and disable dragging when active
    const media = window.matchMedia('(max-width: 800px)')
    const handleChange = () => setIsMobile(media.matches)
    handleChange()
    media.addEventListener('change', handleChange)

    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragStart])

  // Center the window on initial load and when switching to desktop layout
  useEffect(() => {
    if (isMobile) return
    const el = windowRef.current
    if (!el) return

    const center = () => {
      const rect = el.getBoundingClientRect()
      const centeredX = Math.max(
        0,
        Math.round((window.innerWidth - rect.width) / 2),
      )
      const taskbar = document.querySelector(
        '[data-role="win98-taskbar"]',
      ) as HTMLElement | null
      const taskbarHeight = taskbar ? taskbar.offsetHeight : 0
      const availableHeight = Math.max(0, window.innerHeight - taskbarHeight)
      const centeredY = Math.max(
        0,
        Math.round((availableHeight - rect.height) / 2),
      )
      setPosition({ x: centeredX, y: centeredY })
    }

    const id = requestAnimationFrame(center)
    return () => cancelAnimationFrame(id)
  }, [isMobile])

  // Compute mobile window height
  useEffect(() => {
    if (!isMobile) {
      setMobileWindowHeight(null)
      return
    }

    const calc = () => {
      const taskbar = document.querySelector(
        '[data-role="win98-taskbar"]',
      ) as HTMLElement | null
      const taskbarHeight = taskbar ? taskbar.offsetHeight : 0
      const verticalMargin = 20 // 8px top + 8px bottom
      const h = Math.max(0, window.innerHeight - taskbarHeight - verticalMargin)
      setMobileWindowHeight(h)
    }

    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [isMobile])

  // Live clock for status bar
  useEffect(() => {
    const update = () => {
      const now = new Date()
      const str = now.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      setTimeString(str)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <main className="h-full text-black">
      {/* Window frame */}
      <div
        ref={windowRef}
        className={`win98-window relative ${
          isMobile ? 'mx-2 mt-2 flex flex-col' : 'flex w-[800px] flex-col'
        }`}
        style={
          isMobile
            ? {
                height: mobileWindowHeight ?? undefined,
              }
            : {
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
              }
        }
      >
        {/* Title bar */}
        <Win98TitleBar
          onMouseDown={isMobile ? undefined : handleMouseDown}
          className={isMobile ? '' : 'cursor-move'}
        >
          <div className="flex items-center gap-2">
            <img src="/sun.svg" alt="Sun icon" className="h-4 w-4" />
            {isMobile ? (
              <div className="flex flex-col leading-tight">
                <span className="font-bold">Ethan's Epic Homepage</span>
                <span className="font-bold">Microsoft Internet Explorer</span>
              </div>
            ) : (
              <span className="font-bold">
                Ethan's Epic Homepage — Microsoft Internet Explorer
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Win98Button
              ariaLabel="Minimize"
              onMouseDown={handleMouseDown}
              // onClick={onMinimize}
            >
              _
            </Win98Button>
            <Win98Button
              ariaLabel="Maximize"
              onMouseDown={handleMouseDown}
              // onClick={onMaximize}
            >
              ▢
            </Win98Button>
            <Win98Button
              ariaLabel="Close"
              onMouseDown={handleMouseDown}
              // onClick={onClose}
            >
              X
            </Win98Button>
          </div>
        </Win98TitleBar>

        {/* Menu bar */}
        <Win98MenuBar />

        {/* Toolbar */}
        <div className="flex items-center gap-2 px-2 pb-1">
          <Win98Button>
            <Win98ToolbarIcon /> Back
          </Win98Button>
          <Win98Button>
            <Win98ToolbarIcon /> Forward
          </Win98Button>
          <Win98Separator />
          <Win98Button>
            <Win98ToolbarIcon /> Stop
          </Win98Button>
          <Win98Button>
            <Win98ToolbarIcon /> Refresh
          </Win98Button>
          {isMobile ? null : (
            <>
              <Win98Button>
                <Win98ToolbarIcon /> Home
              </Win98Button>
              <Win98Separator />
              <Win98Button>
                <Win98ToolbarIcon /> Search
              </Win98Button>
              <Win98Button>
                <Win98ToolbarIcon /> Favorites
              </Win98Button>
              <Win98Button>
                <Win98ToolbarIcon /> History
              </Win98Button>
            </>
          )}
        </div>

        {/* Address row */}
        <Win98AddressBar />

        {/* Content area */}
        <div
          className={`win98-inset relative mx-2 mb-2 overflow-auto ${
            isMobile ? 'min-h-0 flex-1' : 'h-[440px]'
          }`}
          style={{ background: 'white' }}
        >
          <div
            style={{
              all: 'revert',
              background: 'white',
              color: 'black',
              padding: isMobile ? '12px' : '12px 24px',
              fontFamily: '"Times New Roman", serif',
            }}
          >
            <div>
              <b>ETHAN ZHAO</b>
            </div>

            <div>
              <h1 className="mt-4 text-2xl">
                I'm Ethan! I love designing & building things. Welcome to my
                homepage!
              </h1>
            </div>

            <div>
              <div>
                <h2 className="mt-4 text-xl">ABOUT ME</h2>
              </div>
              <div>
                <h3 className="mt-2 text-lg">Work:</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
                  <li className="text-base">
                    Founding Engineer at{' '}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.loyalist.com/"
                      className="underline"
                    >
                      <em>Magic/Loyalist</em>
                    </a>{' '}
                    (currently)
                  </li>
                  <li className="text-base">
                    Founding Engineer at{' '}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://withpika.com"
                      className="underline"
                    >
                      <em>Pika</em>
                    </a>
                  </li>
                  <li className="text-base">
                    SWE Intern at{' '}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://withpika.com"
                      className="underline"
                    >
                      <em>Pika</em>
                    </a>
                  </li>
                  <li className="text-base">
                    PM Intern at{' '}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.splunk.com/en_us/products/it-service-intelligence.html"
                      className="underline"
                    >
                      <em>Splunk</em>
                    </a>
                  </li>
                  <li className="text-base">
                    ML & PM Intern at{' '}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://watchcharts.com"
                      className="underline"
                    >
                      <em>WatchCharts</em>
                    </a>
                  </li>
                </ul>

                <h3 className="mt-2 text-lg">Education:</h3>
                <p className="text-base">
                  @ The Wharton School, University of Pennsylvania
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
                  <li className="text-base">
                    Operations, Information, & Decisions
                  </li>
                  <li className="text-base">Minor in CS</li>
                </ul>

                <h3 className="mt-2 text-lg">Outside of Work:</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
                  <li className="text-base">
                    Developing recipes
                    <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
                      <li className="text-base">
                        I ran a{' '}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.instagram.com/everynowthenn"
                          className="underline"
                        >
                          pop-up dining concept
                        </a>{' '}
                        in college
                      </li>
                      <li className="text-base">
                        I staged at two Michelin starred restaurants:{' '}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.tuomenyc.com/"
                          className="underline"
                        >
                          Tuome
                        </a>{' '}
                        &{' '}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://yingtaonyc.com/"
                          className="underline"
                        >
                          Yingtao
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base">
                    Spending time in makerspaces{' '}
                    <em>
                      <u>(pics coming soon)</u>
                    </em>
                  </li>
                  <li className="text-base">
                    Enjoying: volleyball, running, board games, crosswords,
                    farmers' markets
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h2 className="mt-4 text-xl">RECENT PROJECTS</h2>
              </div>
              <div>
                <div>
                  <h3 className="mt-2 text-lg underline">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/exyzhao/quest-game"
                    >
                      <em>Quest Online</em>
                    </a>
                  </h3>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
                    <li className="text-base">
                      Shipped a real-time, web-based social-deduction game
                      supporting 4–10 players with lobbies, invite links, and
                      resume-on-reconnect
                    </li>
                    <li className="text-base">
                      Implemented WebSocket real-time messaging and a server
                      state machine with optimistic UI
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mt-2 text-lg underline">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/exyzhao/rag-pdf"
                    >
                      <em>PDF Querier</em>
                    </a>
                  </h3>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
                    <li className="text-base">
                      Utilized retrieval-augmented generation to enable querying
                      across multiple PDF files
                    </li>
                    <li className="text-base">
                      Created Q&A interface providing document citations and
                      answer history
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mt-2 text-lg underline">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://youtu.be/1XRC1sz3-N8?si=eJJf3mUlSiEbQPGV"
                    >
                      <em>Procedural City</em>
                    </a>
                  </h3>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
                    <li className="text-base">
                      Implemented 3D wave function collapse to generate
                      non-deterministic layouts for a city
                    </li>
                    <li className="text-base">
                      Worked with computer graphics team to populate layout with
                      assets
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mt-2 text-lg">
                    <em>Penn Playbook</em>
                  </h3>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
                    <li className="text-base">
                      Developed app showcasing visualizations of mood/energy
                      tracking, confessions, hypotheticals, and other data from
                      Penn's student population
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mt-4 text-xl">EMAIL</h2>
              <p className="mt-2 text-lg">ethanxyzhao@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <Win98StatusBar>
          <Win98StatusCell>Done</Win98StatusCell>
          <Win98StatusCell>Internet</Win98StatusCell>
          <div className="flex-1" />
          <div className="px-2 py-0.5">{timeString}</div>
        </Win98StatusBar>
      </div>

      {/* Taskbar */}
      <Win98Taskbar />
    </main>
  )
}
