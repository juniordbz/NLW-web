import { NewMemoryForm } from '@/src/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemories() {
  return (
    <div className=" flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="w-a h-4" />
        Voltar à time line
      </Link>

      <NewMemoryForm />
    </div>
  )
}
