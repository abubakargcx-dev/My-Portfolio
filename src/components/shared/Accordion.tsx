import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  question: string
  answer: string
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-border border-t border-b border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-medium pr-6">{item.question}</span>
              <ChevronDown
                size={18}
                className="shrink-0 text-foreground-dim transition-transform duration-250"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
            <div
              className="grid transition-all duration-250 ease-out overflow-hidden"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-foreground-dim leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
