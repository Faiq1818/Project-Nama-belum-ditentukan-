import { BinaryGenerator } from "./binaryGenerator";
import { EditSection } from "./editSection";

export function HeroSection() {
  return (
    <>
      <div
        style={{ fontFamily: "flexiibm" }}
        className=" items-center justify-center flex-1 flex-col flex gap-11"
      >
        <EditSection />
        <div className="justify-center flex font-semibold  text-5xl">
          <BinaryGenerator />
        </div>

        <button className="bg-white text-gray-900 rounded-md px-9 py-9">
          halo
        </button>
      </div>
    </>
  );
}
