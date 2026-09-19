import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

function MessageInput({ onSend }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!text.trim()) return

    onSend(text.trim())
    setText('')
  }

  return (
    <div className="border-t border-slate-200 bg-white px-4 py-3 sm:px-6">
      <form className="mx-auto flex max-w-3xl items-center gap-2" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="message">Message</label>
        <input
          className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
          id="message"
          onChange={(event) => setText(event.target.value)}
          placeholder="Write a message"
          type="text"
          value={text}
        />
        <button
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal-600 text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          disabled={!text.trim()}
          type="submit"
        >
          <FiSend aria-hidden="true" size={17} />
        </button>
      </form>
    </div>
  )
}

export default MessageInput