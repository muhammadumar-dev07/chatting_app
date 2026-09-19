function MessageBubble({ message }) {
  const isMine = message.sender === 'me'

  return (
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}>
      <article
        className={`max-w-[75%] rounded-lg border px-3.5 py-2.5 text-sm ${
          isMine
            ? 'border-teal-600 bg-teal-600 text-white'
            : 'border-slate-200 bg-white text-slate-800'
        }`}
      >
        <p className="break-words">{message.text}</p>
        <time className={`mt-1 block text-[11px] ${isMine ? 'text-teal-50' : 'text-slate-400'}`}>
          {message.time}
        </time>
      </article>
    </div>
  )
}

export default MessageBubble