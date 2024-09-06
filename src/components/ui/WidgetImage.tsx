export default function WidgetImage({ imageUrl }: { imageUrl: string | null }) {
  return (
    <div className="inline-block min-w-[190px] max-h-[179px]">
      <div className="rounded-3xl w-[190px] h-[178px] overflow-hidden">
        <img
          src={imageUrl || "./building.svg"}
          alt="White Concrete Building"
          className="rounded-3xl overflow-hidden w-[190px] h-full bg-contain bg-center"
        />
      </div>
    </div>
  );
}
