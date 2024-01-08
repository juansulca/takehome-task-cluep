import { Input } from "./components/Input"
import { Task } from "./components/Task"
import { Search } from "./components/Search"
import { Message } from "./components/Message"
import { useQuery } from "@tanstack/react-query";
import { Menu } from "./components/Menu";
import { useState } from "react";

function App() {
  const { data, error, isFetching } = useQuery({
    queryKey: ['messages'], queryFn: async () => {
      const res = await fetch('http://localhost:3000/user/659a06815d01bad56f9fe3d4/messages', {
        method: 'GET',
      });

      const body = await res.json();
      return body;
    }
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div className="w-screen h-screen m-0 p-0 flex flex-col-reverse">
      <div className="w-[770px] h-[610px] mx-auto mb-8 border rounded-md border-gray-200 flex overflow-hidden">
        <Menu open={sidebarOpen} toggle={setSidebarOpen} />
        <div className="w-full h-full flex flex-col overflow-hidden">
          <Search search={search} setSearch={setSearch} />
          <div className="max-w-[630px] h-full mr-[70px] flex flex-col">
            <div className="w-full h-full">
              {data && search === '' && data.map((message: {id: string, message: string}) => (<Message key={message.id} text={message.message} />))}
              {data && search !== '' && 
                data
                  .filter((message: {id: string, message: string}) => message.message.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                  .map((message: {id: string, message: string}) => (<Message key={message.id} text={message.message} />))}
              {isFetching && <div className="w-full h-full flex justify-center items-center">Loading...</div>}
              {error && <div className="w-full h-full flex justify-center items-center">Error</div>}
            </div>
            <div className="w-full h-10 mb-4 flex justify-between">
              <Task />
              <Task />
              <Task />
              <Task />
            </div>
            <div className="w-full h-14 mb-4">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

