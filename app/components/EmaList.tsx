import Ema from "./Ema";
import Image from "next/image";
import imgPath from "../../public/cover.jpg";
import Navbar from "./UI/Navbar";
import PaginationControls from "./UI/PaginationControls";

const EmaList: React.FC = () => {
  const emas = [];
  for (let i = 0; i < 15; i++) {
    emas.push(<Ema key={i} />);
  }

  // TODO: dynamic number pages
  // TODO: randamize the sequence of the ema on each reload

  return (
    <div className="h-screen min-w-max">
      <Navbar />
      <Image
        id="cover-img"
        src={imgPath}
        quality={100}
        alt="Shrine"
        className="-z-50 blur-sm bg-repeat-y"
        fill={true}
      />
      <div
        className="grid grid-cols-5 gap-4 mx-4 mt-16"
        style={{ minWidth: "50rem" }}
      >
        {emas.map((item) => item)}
      </div>
      <PaginationControls />
    </div>
  );
};

export default EmaList;
