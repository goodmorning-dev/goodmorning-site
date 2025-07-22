import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export default function Categories({ categories }: { categories: string[] }) {
  const [show, setShow] = useState(false)

  return (
    <div className="rounded-2xl bg-gray">
      <div className="flex items-center justify-between px-6 py-5 lg:py-5">
        <h3 className="header-3 lg:text-[32px]">Blog Categories</h3>
        <button
          className="transition-transform lg:hidden"
          onClick={() => setShow((prev) => !prev)}
          aria-label={show ? 'Hide categories' : 'Show categories'}
        >
          <FiChevronDown
            className={`transform text-xl text-white transition-transform duration-300 ${
              show ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>

      <ul
        className={`flex flex-col transition-all duration-300 ${
          show ? 'max-h-[500px]' : 'max-h-0 overflow-hidden'
        } lg:max-h-full`}
      >
        {categories.map((cat, idx) => (
          <li
            key={idx}
            className={`paragraph cursor-pointer px-6 py-4 !font-normal transition ${
              idx === 0
                ? 'bg-primary text-black'
                : 'text-white hover:bg-primary/40'
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  )
}
