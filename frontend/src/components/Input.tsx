import { IconPlus, IconSquareRoundedArrowUpFilled } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const Input = () => {
  const mutation = useMutation({
    mutationFn: async (message: string) => {
      return fetch('http://localhost:3000/user/659a06815d01bad56f9fe3d4/messages', {
        method: 'POST',
        body: JSON.stringify({message}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  });

  const [text, setText] = useState('');

  return (
    <div className="flex items-center border-2 border-gray-200 rounded-full shadow-sm px-4 py-2 bg-white">
      <Tooltip>
        <TooltipTrigger>
          <div className="h-6 w-6 mr-2 text-gray-400 transition ease-in-out delay-150 hover:scale-80">
            <IconPlus size={24}/>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Attchment</p>
        </TooltipContent>
      </Tooltip>
      <input
        type="text"
        placeholder="What's on your mind?"
        className="flex-1 outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Tooltip>
        <TooltipTrigger>
          <div className="h-6 w-6 ml-2 text-gray-400" onClick={() => mutation.mutate(text)}>
            <IconSquareRoundedArrowUpFilled size={24} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Send message</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

