import { FlipWords } from "@/components/custom/flipwords";
import { WavyBackground } from "@/components/custom/wavybackground";
import WebsiteDialog from "@/components/custom/websitedialog";
import Image from "next/image";

export default function Home() {
  const words = [" animals", " capybaras", " books", " universities"];

  return (
    <div className="w-full h-full">
      <div className="flex space-between flex-col justify-center">
        <WavyBackground className="max-w-4xl mx-auto pb-40 h-max max-h-screen">
          <div className="justify-center text-center text-7xl mx-auto font-bold text-slate-700 dark:text-slate-300 p-4">
            Discover new facts about
            <FlipWords words={words} /> <br />
            through web diving
          </div>
          <div className="text-gray-300 font-semibold text-3xl text-center p-6">
            The better Wikipedia search engine
          </div>

          <div className="text-center">
            <a
              href="/search"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-6 text-white  text-xl font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 transition-all duration-500 ease-in-out delay-150"
            >
              Go to Playground
            </a>
          </div>
        </WavyBackground>
      </div>
    </div>
  );
}
