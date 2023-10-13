import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowText } from "./RainbowText";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowText color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer
            </h1>
          </RainbowText>
          <RainbowText color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Designer.
            </h1>
          </RainbowText>
          <RainbowText color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer.
            </h1>
          </RainbowText>
          <RainbowText color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Youtuber.
            </h1>
          </RainbowText>
        </RoughNotationGroup>
      </div>

      {/* Image container */}
    </div>
  );
}
