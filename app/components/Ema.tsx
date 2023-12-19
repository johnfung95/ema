import Image from "next/image";
import imgPath from "../../public/ema.png";

type EmaProps = {
  withForm: boolean;
};

const words = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const Ema: React.FC = ({ withForm = false }: EmaProps) => {
  // with form or not, if not form, then no form component inside the Ema
  return (
    <div className="relative place-self-center min-w-max">
      <div className="static bottom-12 text-black mx-2 mt-2 mb-6 p-2 flex flex-col gap-12">
        <p className="text-center">{words}</p>
      </div>
      <Image
        src={imgPath}
        quality={100}
        alt="Ema"
        className="w-80"
      />
    </div>
  );
};

export default Ema;
