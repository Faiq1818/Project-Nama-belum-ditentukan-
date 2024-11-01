import { BinaryGenerator } from "./binaryGenerator";
import { EditSection } from "./editSection";

export function HeroSection() {
  let faiq = 123;
  return (
    <>
      <div className="bg-black p-72 pt-20 text-white">
        <EditSection />
        <div className="justify-center flex font-semibold  text-5xl">
          <BinaryGenerator />
        </div>
        <div className="flex justify-center m-10">
          <button className="bg-white text-black rounded-full px-9 py-2">
            halo
          </button>
        </div>
      </div>
    </>
  );
}
