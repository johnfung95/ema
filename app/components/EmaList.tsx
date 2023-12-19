import Ema from "./Ema";

const EmaList: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl">EmaList</h1>
      <div className="grid grid-cols-3 gap-4 relative w-full min-w-max">
        <Ema />
        <Ema />
        <Ema />
        <Ema />
        <Ema />
      </div>
    </div>
  );
};

export default EmaList;
