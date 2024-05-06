export const PlayerStats = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className=" flex items-center justify-center rounded bg-[#4F6542]/[0.24] p-1 text-center backdrop-blur-[2px]">
        <span className="text-[0.9ren]/[1.5rem] text-[#4F6542]">{title}</span>
      </div>

      <div className="flex size-full items-center justify-center rounded-lg border border-[#4F6542] bg-[#4F6542]/[0.24] p-4">
        <span className="">{value}</span>
      </div>
    </div>
  );
};
