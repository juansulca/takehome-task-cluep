import { Input } from "./components/Input"
import { Task } from "./components/Task"
import { Search } from "./components/Search"
import { Message } from "./components/Message"
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data, error, isFetching } = useQuery({
    queryKey: ['messages'], queryFn: async () => {
      const res = await fetch('http://localhost:3000/user/659a06815d01bad56f9fe3d4/messages', {
        method: 'GET',
      });
      
      const body = await res.json();
      console.log(body);
      return body;
    }
  });

  return (
    <div className="w-screen h-screen m-0 p-0 flex flex-col-reverse">
      <div className="w-[770px] h-[610px] mx-auto mb-8 border rounded-md border-gray-200 flex flex-col">
        <Search />
        <div className="w-[630px] h-full mx-[70px] flex flex-col">
          <div className="w-full h-full">
            {data && data.map(message => (<Message key={message.id} text={message.message}/>))}
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
  )
}

export default App

