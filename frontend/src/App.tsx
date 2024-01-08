import { Input } from "./components/Input"
import { Task } from "./components/Task"
import { Search } from "./components/Search"

function App() {

  return (
    <div className="w-screen h-screen m-0 p-0 flex flex-col-reverse">
      <div className="w-[770px] h-[610px] mx-auto mb-8 border rounded-md border-gray-200">
        <div className="w-[630px] h-full mx-[70px] bg-red-200 flex flex-col">
          <Search />
          <div className="w-full h-full bg-blue-200">
          </div>
          <div className="w-full h-10 mb-4 flex justify-between bg-blue-800">
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
          <div className="w-full h-14 mb-4 bg-slate-200">
            <Input />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

