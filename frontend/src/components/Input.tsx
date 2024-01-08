import { IconPlus, IconSquareRoundedArrowUpFilled } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const Input = () => {
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
      />
      <Tooltip>
        <TooltipTrigger>
          <div className="h-6 w-6 ml-2 text-gray-400">
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

