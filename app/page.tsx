'use client'

import { useState, useRef, useEffect } from 'react'

function getTaskbarHeight() {
  const taskbar = document.querySelector<HTMLElement>(
    '[data-role="win98-taskbar"]',
  )
  return taskbar?.offsetHeight ?? 0
}

function Win98Button({
  children,
  className = '',
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      className={`win98-btn inline-flex items-center gap-1 px-2 py-0.5 text-xs leading-none select-none ${className}`}
      {...props}
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

function Win98ToolbarButtons({ labels }: { labels: string[] }) {
  return labels.map((label) => (
    <Win98Button key={label}>
      <span className="h-4 w-4 bg-[#808080]" /> {label}
    </Win98Button>
  ))
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

function Win98MenuBar() {
  return (
    <div className="flex gap-4 px-2 py-1 text-xs">
      {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map((item) => (
        <span key={item}>
          <span className="underline">{item[0]}</span>
          {item.slice(1)}
        </span>
      ))}
    </div>
  )
}

function RetroList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-10">{children}</ul>
}

function ExtLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a target="_blank" rel="noreferrer" href={href} className="underline">
      {children}
    </a>
  )
}

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  // Hide the window until it's measured and positioned, so it doesn't
  // flash at the top-left (or in desktop layout on mobile) on first paint
  const [isPlaced, setIsPlaced] = useState(false)
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
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!windowRef.current) return

      const newX = dragStart.x + e.clientX - dragStart.mouseX
      const newY = dragStart.y + e.clientY - dragStart.mouseY

      // Keep window within viewport bounds
      const rect = windowRef.current.getBoundingClientRect()
      const maxX = window.innerWidth - rect.width
      const maxY = window.innerHeight - rect.height

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      })
    }

    const handleMouseUp = () => setIsDragging(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
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
      const availableHeight = Math.max(
        0,
        window.innerHeight - getTaskbarHeight(),
      )
      const centeredY = Math.max(
        0,
        Math.round((availableHeight - rect.height) / 2),
      )
      setPosition({ x: centeredX, y: centeredY })
      setIsPlaced(true)
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
      const verticalMargin = 20 // 8px top margin + gap above taskbar
      const h = Math.max(
        0,
        window.innerHeight - getTaskbarHeight() - verticalMargin,
      )
      setMobileWindowHeight(h)
      setIsPlaced(true)
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
        style={{
          visibility: isPlaced ? undefined : 'hidden',
          ...(isMobile
            ? {
                height: mobileWindowHeight ?? undefined,
              }
            : {
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition:
                  isDragging || !isPlaced ? 'none' : 'transform 0.1s ease-out',
              }),
        }}
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
            <Win98Button aria-label="Minimize">_</Win98Button>
            <Win98Button aria-label="Maximize">▢</Win98Button>
            <Win98Button aria-label="Close">X</Win98Button>
          </div>
        </Win98TitleBar>

        {/* Menu bar */}
        <Win98MenuBar />

        {/* Toolbar */}
        <div className="flex items-center gap-2 px-2 pb-1">
          <Win98ToolbarButtons labels={['Back', 'Forward']} />
          <Win98Separator />
          <Win98ToolbarButtons
            labels={
              isMobile ? ['Stop', 'Refresh'] : ['Stop', 'Refresh', 'Home']
            }
          />
          {!isMobile && (
            <>
              <Win98Separator />
              <Win98ToolbarButtons
                labels={['Search', 'Favorites', 'History']}
              />
            </>
          )}
        </div>

        {/* Address row */}
        <Win98AddressBar />

        {/* Content area */}
        <div
          className={`win98-inset relative mx-2 mb-2 overflow-auto bg-white ${
            isMobile ? 'min-h-0 flex-1' : 'h-[440px]'
          }`}
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
                <RetroList>
                  <li className="text-base">
                    Founding Engineer at{' '}
                    <ExtLink href="https://www.loyalist.com/">
                      <em>Magic/Loyalist</em>
                    </ExtLink>{' '}
                    (currently)
                  </li>
                  <li className="text-base">
                    Founding Engineer at{' '}
                    <ExtLink href="https://withpika.com">
                      <em>Pika</em>
                    </ExtLink>
                  </li>
                  <li className="text-base">
                    SWE Intern at{' '}
                    <ExtLink href="https://withpika.com">
                      <em>Pika</em>
                    </ExtLink>
                  </li>
                  <li className="text-base">
                    PM Intern at{' '}
                    <ExtLink href="https://www.splunk.com/en_us/products/it-service-intelligence.html">
                      <em>Splunk</em>
                    </ExtLink>
                  </li>
                  <li className="text-base">
                    ML & PM Intern at{' '}
                    <ExtLink href="https://watchcharts.com">
                      <em>WatchCharts</em>
                    </ExtLink>
                  </li>
                </RetroList>

                <h3 className="mt-2 text-lg">Education:</h3>
                <p className="text-base">
                  @ The Wharton School, University of Pennsylvania
                </p>
                <RetroList>
                  <li className="text-base">
                    Operations, Information, & Decisions
                  </li>
                  <li className="text-base">Minor in CS</li>
                </RetroList>

                <h3 className="mt-2 text-lg">Outside of Work:</h3>
                <RetroList>
                  <li className="text-base">
                    Developing recipes
                    <RetroList>
                      <li className="text-base">
                        I ran a{' '}
                        <ExtLink href="https://www.instagram.com/everynowthenn">
                          pop-up dining concept
                        </ExtLink>{' '}
                        in college
                      </li>
                      <li className="text-base">
                        I staged at two Michelin starred restaurants:{' '}
                        <ExtLink href="https://www.tuomenyc.com/">
                          Tuome
                        </ExtLink>{' '}
                        &{' '}
                        <ExtLink href="https://yingtaonyc.com/">
                          Yingtao
                        </ExtLink>
                      </li>
                    </RetroList>
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
                </RetroList>
              </div>
            </div>

            <div>
              <div>
                <h2 className="mt-4 text-xl">RECENT PROJECTS</h2>
              </div>
              <div>
                <div>
                  <h3 className="mt-2 text-lg">
                    <ExtLink href="https://github.com/exyzhao/quest-game">
                      <em>Quest Online</em>
                    </ExtLink>
                  </h3>
                  <RetroList>
                    <li className="text-base">
                      Shipped a real-time, web-based social-deduction game
                      supporting 4–10 players with lobbies, invite links, and
                      resume-on-reconnect
                    </li>
                    <li className="text-base">
                      Implemented WebSocket real-time messaging and a server
                      state machine with optimistic UI
                    </li>
                  </RetroList>
                </div>
                <div>
                  <h3 className="mt-2 text-lg">
                    <ExtLink href="https://github.com/exyzhao/rag-pdf">
                      <em>PDF Querier</em>
                    </ExtLink>
                  </h3>
                  <RetroList>
                    <li className="text-base">
                      Utilized retrieval-augmented generation to enable querying
                      across multiple PDF files
                    </li>
                    <li className="text-base">
                      Created Q&A interface providing document citations and
                      answer history
                    </li>
                  </RetroList>
                </div>
                <div>
                  <h3 className="mt-2 text-lg">
                    <ExtLink href="https://youtu.be/1XRC1sz3-N8?si=eJJf3mUlSiEbQPGV">
                      <em>Procedural City</em>
                    </ExtLink>
                  </h3>
                  <RetroList>
                    <li className="text-base">
                      Implemented 3D wave function collapse to generate
                      non-deterministic layouts for a city
                    </li>
                    <li className="text-base">
                      Worked with computer graphics team to populate layout with
                      assets
                    </li>
                  </RetroList>
                </div>
                <div>
                  <h3 className="mt-2 text-lg">
                    <em>Penn Playbook</em>
                  </h3>
                  <RetroList>
                    <li className="text-base">
                      Developed app showcasing visualizations of mood/energy
                      tracking, confessions, hypotheticals, and other data from
                      Penn's student population
                    </li>
                  </RetroList>
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
