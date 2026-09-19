import { APP_NAME } from '../App.jsx'

function ChatHeader({ username, group }) {
  return (
    <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2">
          <h1 className="truncate text-base font-semibold">{APP_NAME}</h1>
          <span className="rounded-md border border-teal-200 bg-teal-50 px-1.5 py-0.5 text-[11px] font-medium text-teal-700">Live</span>
        </div>
        <p className="shrink-0 text-right text-xs text-slate-500">{username} · {group}</p>
      </div>
    </header>
  )
}

export default ChatHeader