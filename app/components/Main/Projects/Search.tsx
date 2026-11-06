"use client"
import { SearchIcon, XIcon } from "lucide-react"

type SearchProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Search({ searchTerm, setSearchTerm }: SearchProps) {

  return (
    <div className="relative">
      <SearchIcon className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-neutral-500" />
      <input className="outline-secondary bg-background/70 z-1 w-full rounded-xl py-3 pr-10 pl-12 outline placeholder:text-neutral-500" type="search" value={searchTerm} onChange={e => { setSearchTerm(e.target.value) }} placeholder="Поиск по проектам..." />
      <XIcon onClick={() => setSearchTerm("")} className={`${searchTerm === "" ? 'scale-0 pointer-events-none' : 'scale-100 pointer-events-auto cursor-pointer'} absolute origin-center duration-250 size-4 transition-all right-4 top-1/2 -translate-y-1/2 text-additional`} />
    </div>
  )
}