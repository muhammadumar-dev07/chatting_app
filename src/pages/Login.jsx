import { useState } from 'react'
import { useNavigate } from 'react-router'
import { APP_NAME } from '../App.jsx'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [group, setGroup] = useState('')

  const canSubmit = username.trim() && group.trim()

  function handleSubmit(event) {
    event.preventDefault()
    if (!canSubmit) return

    navigate('/chat', { state: { username: username.trim(), group: group.trim() } })
  }

  return (
    <main className="flex min-h-dvh items-center justify-center bg-slate-100 px-4 py-8 font-sans text-slate-900">
      <section className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">{APP_NAME}</h1>
          <p className="mt-2 text-sm text-slate-500">A simple space for focused group conversations.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="username">
              Username
            </label>
            <input
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
              id="username"
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              value={username}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="group">
              Group name
            </label>
            <input
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
              id="group"
              onChange={(event) => setGroup(event.target.value)}
              type="text"
              value={group}
            />
          </div>

          <button
            className="w-full rounded-md bg-teal-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            disabled={!canSubmit}
            type="submit"
          >
            Enter chat
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login