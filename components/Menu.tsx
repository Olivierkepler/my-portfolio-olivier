'use client'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl text-black dark:text-white max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li><a href="/services" onClick={onClose}>Services</a></li>
          <li><a href="/projects" onClick={onClose}>Projects</a></li>
          <li><a href="/contact" onClick={onClose}>Contact</a></li>
        </ul>
        <button onClick={onClose} className="mt-4 text-red-500 text-sm underline">Close</button>
      </div>
    </div>
  )
}
