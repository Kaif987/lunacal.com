import HorizontalLine from "./components/HorizontalLine";
import Widget1 from "./components/Widget1";
import Widget2 from "./components/Widget2";

function App() {
  return (
    <div className="container grid grid-cols-2 text-white pt-24 px-[86px]">
      <div></div>
      <div className="flex flex-col items-center widgets">
        <Widget1 />
        <HorizontalLine className="mt-[19px] mb-4" />
        <Widget2 />
        <HorizontalLine className="mt-[22px] mb-[86px]" />
      </div>
    </div>
  );
}

export default App;
