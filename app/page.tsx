'use client'

import { useState, useRef, useEffect } from 'react'

const HOME_URL = 'http://www.ethanxyzhao.com/'

function getTaskbarHeight() {
  const taskbar = document.querySelector<HTMLElement>(
    '[data-role="win98-taskbar"]',
  )
  return taskbar?.offsetHeight ?? 0
}

function isHomeUrl(url: string) {
  const stripped = url
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/+$/, '')
  return stripped === '' || stripped === 'ethanxyzhao.com'
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
  className = '',
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={`win98-titlebar flex items-center justify-between px-2 py-1 text-white select-none ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

type ToolbarItem = { label: string; onClick?: () => void; disabled?: boolean }

function Win98ToolbarButtons({ items }: { items: ToolbarItem[] }) {
  return items.map(({ label, onClick, disabled }) => (
    <Win98Button key={label} onClick={onClick} disabled={disabled}>
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

function Win98Taskbar({
  startOpen,
  onToggleStart,
  startButtonRef,
  showTaskButton,
  taskButtonPressed,
  onTaskButtonClick,
  clock,
}: {
  startOpen: boolean
  onToggleStart: () => void
  startButtonRef: React.RefObject<HTMLButtonElement | null>
  showTaskButton: boolean
  taskButtonPressed: boolean
  onTaskButtonClick: () => void
  clock: string
}) {
  return (
    <div
      className="win98-window fixed right-0 bottom-0 left-0 flex items-center gap-2 border-b-0 p-1"
      data-role="win98-taskbar"
    >
      <button
        ref={startButtonRef}
        className={`win98-btn inline-flex items-center gap-1 px-3 py-1 text-xs leading-none select-none ${
          startOpen ? 'win98-btn-pressed' : ''
        }`}
        onClick={onToggleStart}
      >
        <img src="/sun.svg" alt="" className="mr-1 h-4 w-4" />
        Start
      </button>
      <Win98Separator />
      <div className="flex h-6 flex-1 items-center">
        {showTaskButton && (
          <button
            className={`win98-btn inline-flex h-full w-44 items-center gap-1 px-2 text-xs leading-none select-none ${
              taskButtonPressed ? 'win98-btn-pressed' : ''
            }`}
            onClick={onTaskButtonClick}
          >
            <img src="/sun.svg" alt="" className="h-4 w-4" />
            <span className="truncate">Ethan's Epic Homepage</span>
          </button>
        )}
      </div>
      <Win98Separator />
      <div className="win98-inset flex h-6 w-24 items-center justify-center text-xs">
        {clock}
      </div>
    </div>
  )
}

function StartMenu({
  bottom,
  menuRef,
  onOpenExplorer,
  onShutDown,
}: {
  bottom: number
  menuRef: React.RefObject<HTMLDivElement | null>
  onOpenExplorer: () => void
  onShutDown: () => void
}) {
  const itemClass =
    'flex cursor-default items-center gap-2 px-3 py-1.5 text-xs hover:bg-[#000080] hover:text-white'
  return (
    <div
      ref={menuRef}
      className="win98-window fixed left-1 z-50 flex"
      style={{ bottom }}
    >
      <div className="flex w-7 items-end justify-center bg-gradient-to-b from-[#000080] to-[#1084d0] py-2">
        <span className="rotate-180 text-sm font-bold whitespace-nowrap text-white [writing-mode:vertical-rl]">
          Ethan Zhao
        </span>
      </div>
      <div className="flex min-w-44 flex-col py-1">
        <button className={itemClass} onClick={onOpenExplorer}>
          <img src="/sun.svg" alt="" className="h-4 w-4" />
          Internet Explorer
        </button>
        <a
          className={itemClass}
          href="https://github.com/exyzhao"
          target="_blank"
          rel="noreferrer"
        >
          <span className="h-4 w-4 bg-[#808080]" />
          GitHub
        </a>
        <a className={itemClass} href="mailto:ethanxyzhao@gmail.com">
          <span className="h-4 w-4 bg-[#808080]" />
          Email
        </a>
        <div className="mx-1 my-1 border-t border-b border-t-[#808080] border-b-white" />
        <button className={itemClass} onClick={onShutDown}>
          <span className="h-4 w-4 bg-[#808080]" />
          Shut Down...
        </button>
      </div>
    </div>
  )
}

function DesktopIcon({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      className="fixed top-4 left-4 flex w-20 flex-col items-center gap-1 select-none"
      onDoubleClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onOpen()
      }}
      aria-label="Open Internet Explorer"
      title="Double-click to open"
    >
      <img src="/sun.svg" alt="" className="h-8 w-8" />
      <span className="bg-[#000080] px-1 text-xs text-white">
        Internet Explorer
      </span>
    </button>
  )
}

function Win98AddressBar({
  value,
  onChange,
  onNavigate,
}: {
  value: string
  onChange: (value: string) => void
  onNavigate: (url: string) => void
}) {
  return (
    <form
      className="flex items-center gap-2 px-2 pb-2"
      onSubmit={(e) => {
        e.preventDefault()
        onNavigate(value)
      }}
    >
      <span className="text-xs">Address</span>
      <input
        className="win98-inset h-6 flex-1 bg-white px-1 text-xs outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Address"
      />
      <Win98Button type="submit">Go</Win98Button>
      <Win98Separator />
      <Win98Button type="button">Links ▾</Win98Button>
    </form>
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

function ErrorContent({ style }: { style: React.CSSProperties }) {
  return (
    <div style={style}>
      <h1 className="mt-4 text-2xl">The page cannot be displayed</h1>
      <p className="mt-2 text-base">
        The page you are looking for is currently unavailable. The Web site
        might be experiencing technical difficulties, or you may need to adjust
        your browser settings.
      </p>
      <hr className="my-4" />
      <p className="text-base">
        Cannot find server or DNS Error
        <br />
        Microsoft Internet Explorer
      </p>
    </div>
  )
}

function HomeContent({ style }: { style: React.CSSProperties }) {
  return (
    <div style={style}>
      <div>
        <b>ETHAN ZHAO</b>
      </div>

      <div>
        <h1 className="mt-4 text-2xl">
          I'm Ethan! I love designing & building things. Welcome to my homepage!
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
            <li className="text-base">Operations, Information, & Decisions</li>
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
                  <ExtLink href="https://www.tuomenyc.com/">Tuome</ExtLink> &{' '}
                  <ExtLink href="https://yingtaonyc.com/">Yingtao</ExtLink>
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
              Enjoying: volleyball, running, board games, crosswords, farmers'
              markets
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
                Shipped a real-time, web-based social-deduction game supporting
                4–10 players with lobbies, invite links, and resume-on-reconnect
              </li>
              <li className="text-base">
                Implemented WebSocket real-time messaging and a server state
                machine with optimistic UI
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
                Created Q&A interface providing document citations and answer
                history
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
                Developed app showcasing visualizations of mood/energy tracking,
                confessions, hypotheticals, and other data from Penn's student
                population
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
  )
}

type WindowState = 'normal' | 'maximized' | 'minimized' | 'closed'

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
  const [windowState, setWindowState] = useState<WindowState>('normal')
  const [startOpen, setStartOpen] = useState(false)
  const [taskbarHeight, setTaskbarHeight] = useState(0)
  const [address, setAddress] = useState(HOME_URL)
  const [history, setHistory] = useState([HOME_URL])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const windowRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const startMenuRef = useRef<HTMLDivElement>(null)
  const startButtonRef = useRef<HTMLButtonElement>(null)
  const loadTimer = useRef<number | null>(null)

  const isMaximized = !isMobile && windowState === 'maximized'
  const isWindowHidden = windowState === 'minimized' || windowState === 'closed'
  const isDraggable = !isMobile && windowState === 'normal'

  const currentUrl = history[historyIndex]
  const showError = !isHomeUrl(currentUrl)
  const canGoBack = historyIndex > 0
  const canGoForward = historyIndex < history.length - 1

  const startLoad = () => {
    if (loadTimer.current) clearTimeout(loadTimer.current)
    setIsLoading(true)
    loadTimer.current = window.setTimeout(() => setIsLoading(false), 400)
  }

  const stopLoad = () => {
    if (loadTimer.current) clearTimeout(loadTimer.current)
    setIsLoading(false)
  }

  const navigate = (rawUrl: string) => {
    const url = rawUrl.trim()
    if (!url) return
    setAddress(url)
    if (url !== currentUrl) {
      const next = [...history.slice(0, historyIndex + 1), url]
      setHistory(next)
      setHistoryIndex(next.length - 1)
    }
    contentRef.current?.scrollTo(0, 0)
    startLoad()
  }

  const goBack = () => {
    if (!canGoBack) return
    setHistoryIndex(historyIndex - 1)
    setAddress(history[historyIndex - 1])
    startLoad()
  }

  const goForward = () => {
    if (!canGoForward) return
    setHistoryIndex(historyIndex + 1)
    setAddress(history[historyIndex + 1])
    startLoad()
  }

  const goHome = () => {
    if (isHomeUrl(currentUrl)) {
      contentRef.current?.scrollTo(0, 0)
    } else {
      navigate(HOME_URL)
    }
  }

  const openWindow = () => {
    setWindowState((s) => (s === 'closed' || s === 'minimized' ? 'normal' : s))
  }

  const toggleMaximize = () => {
    if (isMobile) return
    setWindowState((s) => (s === 'maximized' ? 'normal' : 'maximized'))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isDraggable) return
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
    const measure = () => setTaskbarHeight(getTaskbarHeight())
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
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

  // Live clock for taskbar tray
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

  // Close the Start menu on outside click or Escape
  useEffect(() => {
    if (!startOpen) return

    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        !startMenuRef.current?.contains(target) &&
        !startButtonRef.current?.contains(target)
      ) {
        setStartOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setStartOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [startOpen])

  // Clear any pending fake page load on unmount
  useEffect(() => {
    return () => {
      if (loadTimer.current) clearTimeout(loadTimer.current)
    }
  }, [])

  const pageStyle: React.CSSProperties = {
    all: 'revert',
    background: 'white',
    color: 'black',
    padding: isMobile ? '12px' : '12px 24px',
    fontFamily: '"Times New Roman", serif',
  }

  return (
    <main className="h-full text-black">
      <DesktopIcon onOpen={openWindow} />

      {/* Window frame */}
      <div
        ref={windowRef}
        className={`win98-window flex flex-col ${
          isMobile
            ? 'relative mx-2 mt-2'
            : isMaximized
              ? 'fixed'
              : 'relative w-[800px]'
        }`}
        style={{
          visibility: isPlaced ? undefined : 'hidden',
          display: isWindowHidden ? 'none' : undefined,
          ...(isMobile
            ? { height: mobileWindowHeight ?? undefined }
            : isMaximized
              ? { top: 0, left: 0, right: 0, bottom: taskbarHeight }
              : {
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transition:
                    isDragging || !isPlaced
                      ? 'none'
                      : 'transform 0.1s ease-out',
                }),
        }}
      >
        {/* Title bar */}
        <Win98TitleBar
          onMouseDown={handleMouseDown}
          onDoubleClick={isMobile ? undefined : toggleMaximize}
          className={isDraggable ? 'cursor-move' : ''}
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
              aria-label="Minimize"
              onMouseDown={(e) => e.stopPropagation()}
              onDoubleClick={(e) => e.stopPropagation()}
              onClick={() => setWindowState('minimized')}
            >
              _
            </Win98Button>
            <Win98Button
              aria-label={isMaximized ? 'Restore' : 'Maximize'}
              onMouseDown={(e) => e.stopPropagation()}
              onDoubleClick={(e) => e.stopPropagation()}
              onClick={toggleMaximize}
            >
              {isMaximized ? '❐' : '▢'}
            </Win98Button>
            <Win98Button
              aria-label="Close"
              onMouseDown={(e) => e.stopPropagation()}
              onDoubleClick={(e) => e.stopPropagation()}
              onClick={() => setWindowState('closed')}
            >
              X
            </Win98Button>
          </div>
        </Win98TitleBar>

        {/* Menu bar */}
        <Win98MenuBar />

        {/* Toolbar */}
        <div className="flex items-center gap-2 px-2 pb-1">
          <Win98ToolbarButtons
            items={[
              { label: 'Back', onClick: goBack, disabled: !canGoBack },
              {
                label: 'Forward',
                onClick: goForward,
                disabled: !canGoForward,
              },
            ]}
          />
          <Win98Separator />
          <Win98ToolbarButtons
            items={[
              { label: 'Stop', onClick: stopLoad },
              { label: 'Refresh', onClick: startLoad },
              ...(isMobile ? [] : [{ label: 'Home', onClick: goHome }]),
            ]}
          />
          {!isMobile && (
            <>
              <Win98Separator />
              <Win98ToolbarButtons
                items={[
                  { label: 'Search' },
                  { label: 'Favorites' },
                  { label: 'History' },
                ]}
              />
            </>
          )}
        </div>

        {/* Address row */}
        <Win98AddressBar
          value={address}
          onChange={setAddress}
          onNavigate={navigate}
        />

        {/* Content area */}
        <div
          ref={contentRef}
          className={`win98-inset relative mx-2 mb-2 overflow-auto bg-white ${
            isMobile || isMaximized ? 'min-h-0 flex-1' : 'h-[440px]'
          }`}
        >
          {isLoading ? null : showError ? (
            <ErrorContent style={pageStyle} />
          ) : (
            <HomeContent style={pageStyle} />
          )}
        </div>

        {/* Status bar */}
        <Win98StatusBar>
          <Win98StatusCell>
            {isLoading ? 'Opening page...' : 'Done'}
          </Win98StatusCell>
          <div className="flex-1" />
          <Win98StatusCell>Internet</Win98StatusCell>
        </Win98StatusBar>
      </div>

      {/* Start menu */}
      {startOpen && (
        <StartMenu
          bottom={taskbarHeight}
          menuRef={startMenuRef}
          onOpenExplorer={() => {
            openWindow()
            setStartOpen(false)
          }}
          onShutDown={() => {
            setWindowState('closed')
            setStartOpen(false)
          }}
        />
      )}

      {/* Taskbar */}
      <Win98Taskbar
        startOpen={startOpen}
        onToggleStart={() => setStartOpen((open) => !open)}
        startButtonRef={startButtonRef}
        showTaskButton={windowState !== 'closed'}
        taskButtonPressed={windowState !== 'minimized'}
        onTaskButtonClick={() =>
          setWindowState((s) => (s === 'minimized' ? 'normal' : 'minimized'))
        }
        clock={timeString}
      />
    </main>
  )
}
