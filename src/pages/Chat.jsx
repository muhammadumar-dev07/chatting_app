import { useEffect, useRef, useState } from 'react'
import { Navigate, useLocation } from 'react-router'
import ChatHeader from '../components/ChatHeader.jsx'
import MessageBubble from '../components/MessageBubble.jsx'
import MessageInput from '../components/MessageInput.jsx'

function Chat() {
  const { state } = useLocation()
  const [messages, setMessages] = useState([])
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!state?.username || !state?.group) {
    return <Navigate replace to="/" />
  }

  function addMessage(text, sender) {
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `${Date.now()}-${currentMessages.length}`,
        text,
        sender,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ])
  }

  function handleSend(text) {
    addMessage(text, 'me')
  }

  return (
    <main className="flex h-dvh flex-col bg-slate-50 font-sans text-slate-900">
      <ChatHeader username={state.username} group={state.group} />

      <section aria-label="Messages" className="min-h-0 flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto flex min-h-full max-w-3xl flex-col justify-end gap-3">
          {messages.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-400">No messages yet. Start the conversation.</p>
          ) : (
            messages.map((message) => <MessageBubble key={message.id} message={message} />)
          )}
          <div ref={messagesEndRef} />
        </div>
      </section>

      <MessageInput onSend={handleSend} />
    </main>
  )
}

export default Chat