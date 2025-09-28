/* app/page.tsx */
'use client'

import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
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
    if (isDragging) {
      const deltaX = e.clientX - dragStart.mouseX
      const deltaY = e.clientY - dragStart.mouseY

      const newX = dragStart.x + deltaX
      const newY = dragStart.y + deltaY

      // Keep window within viewport bounds
      const maxX = window.innerWidth - 800 // window width
      const maxY = window.innerHeight - 600 // approximate window height

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
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragStart])

  return (
    <main className="text-win98-black min-h-screen p-6">
      {/* Window frame */}
      <div
        ref={windowRef}
        className="win98-raised relative w-[800px]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: isDragging ? 'none' : 'transform 0.1s ease-out',
        }}
      >
        {/* Title bar */}
        <div
          className="win98-titlebar flex cursor-move items-center justify-between px-2 py-1 select-none"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2">
            <div className="bg-win98-white h-4 w-4" />
            {/* app icon stub */}
            <span className="font-bold">
              Ethan's Epic Homepage — Microsoft Internet Explorer
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              className="win98-btn win98-raised text-win98-black"
              aria-label="Minimize"
              onMouseDown={(e) => e.stopPropagation()}
            >
              _
            </button>
            <button
              className="win98-btn win98-raised text-win98-black"
              aria-label="Maximize"
              onMouseDown={(e) => e.stopPropagation()}
            >
              ▢
            </button>
            <button
              className="win98-btn win98-raised text-win98-black"
              aria-label="Close"
              onMouseDown={(e) => e.stopPropagation()}
            >
              X
            </button>
          </div>
        </div>

        {/* Menu bar */}
        <div className="flex gap-4 px-2 py-1 text-[12px]">
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

        {/* Toolbar */}
        <div className="flex items-center gap-2 px-2 pb-1">
          <button className="win98-btn win98-raised">
            <span className="tb-icon" /> Back
          </button>
          <button className="win98-btn win98-raised">
            <span className="tb-icon" /> Forward
          </button>
          <div className="win98-sep h-6" />
          <button className="win98-btn win98-raised">
            <span className="tb-icon" /> Stop
          </button>
          <button className="win98-btn win98-raised">
            <span className="tb-icon" /> Refresh
          </button>
          <button className="win98-btn win98-raised">
            <span className="tb-icon" /> Home
          </button>
          <div className="win98-sep h-6" />
          <button className="win98-btn win98-raised">
            <span className="tb-icon" /> Search
          </button>
          <button className="win98-btn win98-raised">
            <span className="tb-icon" /> Favorites
          </button>
          <button className="win98-btn win98-raised">
            <span className="tb-icon" /> History
          </button>
        </div>

        {/* Address row */}
        <div className="flex items-center gap-2 px-2 pb-2">
          <span className="text-[12px]">Address</span>
          <div className="win98-sunken flex h-6 flex-1 items-center px-1 text-[12px]">
            http://www.ethanxyzhao.com/
          </div>
          <button className="win98-btn win98-raised">Go</button>
          <div className="win98-sep h-6" />
          <button className="win98-btn win98-raised">Links ▾</button>
        </div>

        {/* Content area (page) */}
        <div className="bg-backg136 win98-sunken mx-2 mb-2 h-[440px] overflow-auto p-3 text-center">
          <h1 className="font-comic-sans-bold mb-1 text-4xl leading-none tracking-tight text-[#57FF00]">
            Ethan's Epic Homepage
          </h1>
        </div>

        {/* Status bar */}
        <div className="bg-win98-gray flex items-stretch text-[12px]">
          <div className="status-cell">Done</div>
          <div className="status-cell">Internet</div>
          <div className="flex-1" />
          <div className="px-2 py-0.5">2:04 PM</div>
        </div>
      </div>

      {/* Taskbar (bonus) */}
      <div className="bg-win98-gray fixed right-0 bottom-0 left-0 flex items-center gap-2 border-t-2 border-b-0 border-t-white p-1">
        <button className="win98-btn win98-raised px-3 py-1 text-[12px]">
          <span className="bg-win98-dark-gray mr-1 inline-block h-4 w-4" />
          Start
        </button>
        <div className="win98-sep h-6" />
        <div className="win98-sunken h-6 flex-1" />
        <div className="win98-sep h-6" />
        <div className="win98-raised h-6 w-24" />
      </div>
    </main>
  )
}
