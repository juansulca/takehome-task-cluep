import { IconMinusVertical, IconChevronRight } from "@tabler/icons-react";
import Avatar from "../assets/Icons/avatar.png";
import Chats from "../assets/Icons/Chats.png";
import Sent from "../assets/Icons/Sent.png";
import Draft from "../assets/Icons/Draft.png";
import Spam from "../assets/Icons/Spam.png";
import Trash from "../assets/Icons/Trash.png";
import ConnectedApps from "../assets/Icons/ConnectApps.png";
import Help from "../assets/Icons/Help.png";
import Rate from "../assets/Icons/Rate.png";
import About from "../assets/Icons/About.png";

const MenuItem = ({ text, img }: { text: string, img: string }) => {
  return (
    <div className="min-w-32 h-10 flex flex-row items-center px-2 rounded-lg hover:bg-white/10">
      <img className="mr-1" width="24" height="24" src={img} />
      <label className="ml-2">{text}</label>
    </div>
  );
};

export const Menu = ({ open, toggle }: { open: boolean, toggle: (x: boolean) => void }) => {
  if (!open) {
    return (
      <div className="sidebar w-[70px] h-full flex flex-row-reverse items-center" onClick={() => toggle(true)}>
        <IconChevronRight />
      </div>
    );
  }
  return (
    <div className="sidebar h-full flex text-white">
      <div className="flex flex-col justify-between w-60 bg-black pl-4 px-2 py-4">
        <ul>
          <li><MenuItem text="Jane Cooper" img={Avatar} /></li>
          <li><MenuItem text="Chats" img={Chats} /></li>
          <li><MenuItem text="Sent" img={Sent} /></li>
          <li><MenuItem text="Draft" img={Draft} /></li>
          <li><MenuItem text="Spam" img={Spam} /></li>
          <li><MenuItem text="Trash" img={Trash} /></li>
          <li><MenuItem text="Connected apps" img={ConnectedApps} /></li>
        </ul>
        <ul>
          <li><MenuItem text="Help" img={Help} /></li>
          <li><MenuItem text="Rate" img={Rate} /></li>
          <li><MenuItem text="About" img={About} /></li>
        </ul>
      </div>
      <div className="h-full flex flex-row items-center text-gray-400" onClick={() => toggle(false)}>
        <IconMinusVertical />
      </div>
    </div>
  );
};

