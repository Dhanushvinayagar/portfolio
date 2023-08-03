import React from 'react'

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
        <button type="button" className="bg-cyan-400 p-2 rounded" disabled>
            Loading...
        </button>
    </div>
  )
}

export default Loading
