import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>

<g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M203 225 c-4 -11 -2 -20 5 -23 7 -2 12 -8 12 -13 0 -6 -4 -7 -10 -4
-5 3 -10 2 -10 -4 0 -18 17 -21 30 -6 10 12 10 18 -1 32 -8 9 -12 18 -11 20 2
3 1 7 -2 10 -3 3 -9 -2 -13 -12z"/>
<path d="M140 180 c-14 -4 -51 -13 -82 -20 -54 -11 -58 -13 -58 -40 0 -19 6
-29 19 -33 11 -3 28 -22 38 -43 10 -21 26 -40 35 -42 14 -3 16 3 13 32 -5 38
-1 41 39 26 23 -8 27 -6 42 25 15 33 15 37 0 70 -9 19 -18 35 -19 34 -1 0 -13
-4 -27 -9z m18 -88 l-4 -27 -8 28 c-5 15 -5 39 0 55 l8 27 4 -28 c2 -15 2 -39
0 -55z m-28 27 c0 -33 -3 -40 -16 -35 -9 3 -28 6 -42 7 -15 0 -22 3 -15 5 8 4
9 13 3 29 -8 22 -6 24 23 28 18 2 35 5 40 5 4 1 7 -16 7 -39z m-103 -11 c-3
-7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m155 0 c-9 -9 -12 -7 -12 12
0 19 3 21 12 12 9 -9 9 -15 0 -24z m-92 -76 c0 -7 -4 -10 -10 -7 -5 3 -10 16
-10 28 0 18 2 19 10 7 5 -8 10 -21 10 -28z"/>
</g>
    </Svg>
  );
};

export default Icon;
