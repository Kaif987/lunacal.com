import questionMark from "@/assets/questionMark.svg";
import grid from "@/assets/grid.svg";

export default function WidgetCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-widgetBg rounded-2xl w-[720px] pt-[17px] px-[53px] pb-[29px] relative">
      <img
        src={questionMark}
        alt="question mark"
        className="w-[20px] h-[20px] absolute top-4 left-3"
      />
      <img
        src={grid}
        alt="question mark"
        className="w-[24px] h-[30px] absolute top-[149px] left-3"
      />
      {children}
    </div>
  );
}
