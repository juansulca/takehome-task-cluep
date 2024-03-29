import { useState } from "react";
import { IconSearch, IconX } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SearchButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full h-7 flex flex-row-reverse items-center bg-white my-4 pr-4">
      <Tooltip>
        <TooltipTrigger>
          <div className="h-6 w-6 mr-2 text-black" onClick={onClick}>
            <IconSearch size={24} />
          </div>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Search</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export const Search = ({ search, setSearch }: { search: string, setSearch: (search: string) => void}) => {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <search className="flex items-center border-2 border-gray-200 rounded-full shadow-sm px-4 py-2 bg-white mt-4 mr-[70px] animate-slideIn">
        <div className="h-6 w-6 mr-2 text-gray-200">
          <IconSearch size={24} />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="h-6 w-6 ml-2 text-gray-400" onClick={() => {setOpen(false); setSearch('')}}>
          <IconX size={24} />
        </div>
      </search>
    );
  }

  return (<SearchButton onClick={() => setOpen(true)} />);
};

