export const Message = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-end p-2">
      <div className="max-w-60% bg-blue-500 text-white p-3 rounded-lg text-base leading-6 break-words shadow-md relative">
        {text}
        <div className="absolute bottom-0 right-0 mb-2 mr-1 w-0 h-0 border-10 border-blue-500 border-solid border-t-transparent border-r-transparent"></div>
      </div>
    </div>
  );
};

