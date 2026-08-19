import { useEffect, useState } from 'react'

const terminalLines = [
  { prefix: '$', text: 'whoami' },
  { prefix: '', text: 'builder && auditor' },
  { prefix: '$', text: 'cat stack.txt' },
  { prefix: '', text: 'React / Node.js / Tailwind' },
  { prefix: '', text: 'Nmap / Burp / Metasploit' },
  { prefix: '$', text: 'ls ~/projects' },
  { prefix: '', text: 'web-apps/  network-audits/' },
]

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const finished = currentLine >= terminalLines.length

  useEffect(() => {
    if (finished) return undefined

    const line = terminalLines[currentLine]
    if (currentChar < line.text.length) {
      const t = setTimeout(() => setCurrentChar((c) => c + 1), 42)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setCurrentLine((l) => l + 1)
      setCurrentChar(0)
    }, 320)

    return () => clearTimeout(t)
  }, [finished, currentLine, currentChar])

  return (
    <div className="mockup-code shadow-xl border border-base-300 w-full text-sm sm:text-base">
      <div className="overflow-x-auto">
        {terminalLines.map((line, i) => {
          if (i > currentLine) {
            return (
              <pre key={i} data-prefix={line.prefix || undefined}>
                <code>&nbsp;</code>
              </pre>
            )
          }
          const text = i < currentLine ? line.text : line.text.slice(0, currentChar)
          const isTyping = i === currentLine && currentChar < line.text.length
          return (
            <pre key={i} data-prefix={line.prefix || undefined}>
              <code>
                {text}
                {isTyping && <span className="blinking-cursor">▍</span>}
                {finished && i === terminalLines.length - 1 && (
                  <span className="blinking-cursor">▍</span>
                )}
              </code>
            </pre>
          )
        })}
      </div>
    </div>
  )
}
