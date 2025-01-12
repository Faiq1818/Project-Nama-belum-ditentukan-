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
        <div className="justify-center flex font-medium text-5xl">
          <BinaryGenerator />
        </div>
        <input
          className="hover:bg-slate-200 p-2 rounded-lg text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-500"
          placeholder="Masukan Angka"
        ></input>
      </div>
    </>
  );
}
