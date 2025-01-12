import { BinaryGenerator } from "./binaryGenerator";
import { EditSection } from "./editSection";

export function HeroSection() {
  return (
    <>
      <div className=" items-center justify-center flex-1 flex-col flex">
        <EditSection />
        <div className="justify-center flex font-semibold  text-5xl">
          <BinaryGenerator />
        </div>

        <button className="bg-white text-black rounded-full px-9 py-2">
          halo
        </button>
      </div>
    </>
  );
}
