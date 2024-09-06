import WidgetCard from "./ui/WidgetCard";
import ButtonPrimary from "./ui/ButtonPrimary";
import ButtonLeft from "./ui/ButtonLeft";
import ButtonRight from "./ui/ButtonRight";
import WidgetImage from "./ui/WidgetImage";
import React, { useState } from "react";
import AddImageInput from "./ui/AddInputImage";

// type Props = {};
type StringOrNull = string | null;

const Widget2 = () => {
  const [imageUrl, setImageUrl] = useState<StringOrNull[]>([]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const selectedFile = e.target.files?.[0];
    setImageUrl((prev) => [...prev, URL.createObjectURL(selectedFile)]);
    console.log(e.target.files[0].name);
    console.log("Add Image");
  };

  return (
    <WidgetCard>
      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <ButtonPrimary>Gallery</ButtonPrimary>
          <div className="flex items-center gap-5">
            <AddImageInput onChange={handleFile} />
            <div className="flex items-center gap-[31px]">
              <ButtonLeft />
              <ButtonRight />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-5 w-[620px] overflow-y-hidden overflow-x-auto whitespace-nowrap">
          {imageUrl.length == 0
            ? Array(3)
                .fill(null)
                .map((_, i) => <WidgetImage key={i} imageUrl={null} />)
            : imageUrl.map((img, i) => <WidgetImage key={i} imageUrl={img} />)}
        </div>
      </div>
    </WidgetCard>
  );
};

export default Widget2;
