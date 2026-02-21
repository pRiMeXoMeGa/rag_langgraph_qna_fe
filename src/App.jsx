import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/slices/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Count: {count}</h1>
      <button 
        onClick={() => dispatch(increment())}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
      >
        Increment
      </button>
    </div>
  )
}

export default App