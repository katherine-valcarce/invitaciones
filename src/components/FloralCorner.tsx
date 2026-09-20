type FloralCornerProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
};

function Flower({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g className="botanical-flower" transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse rx="10" ry="23" transform="rotate(0) translate(0 -16)" />
      <ellipse rx="10" ry="23" transform="rotate(60) translate(0 -16)" />
      <ellipse rx="10" ry="23" transform="rotate(120) translate(0 -16)" />
      <ellipse rx="10" ry="23" transform="rotate(180) translate(0 -16)" />
      <ellipse rx="10" ry="23" transform="rotate(240) translate(0 -16)" />
      <ellipse rx="10" ry="23" transform="rotate(300) translate(0 -16)" />
      <circle className="botanical-flower__center" r="8" />
      <circle className="botanical-flower__dot" cx="-3" cy="-2" r="1.2" />
      <circle className="botanical-flower__dot" cx="3" cy="-1" r="1.2" />
      <circle className="botanical-flower__dot" cx="0" cy="3" r="1.2" />
    </g>
  );
}

export default function FloralCorner({
  position = "top-left",
  className = "",
}: FloralCornerProps) {
  return (
    <svg
      className={`floral-corner floral-corner--${position} ${className}`}
      viewBox="0 0 240 240"
      aria-hidden="true"
      focusable="false"
    >
      <g className="botanical-stems">
        <path d="M20 220C64 181 104 144 142 103C166 77 188 53 220 24" />
        <path d="M45 205C84 171 121 151 164 135" />
        <path d="M78 177C108 146 139 121 182 97" />
      </g>

      <g className="botanical-leaves">
        <ellipse cx="49" cy="190" rx="13" ry="31" transform="rotate(-50 49 190)" />
        <ellipse cx="69" cy="169" rx="12" ry="29" transform="rotate(-40 69 169)" />
        <ellipse cx="91" cy="150" rx="12" ry="29" transform="rotate(-31 91 150)" />
        <ellipse cx="114" cy="128" rx="12" ry="30" transform="rotate(-24 114 128)" />
        <ellipse cx="138" cy="106" rx="11" ry="27" transform="rotate(-18 138 106)" />
        <ellipse cx="162" cy="84" rx="10" ry="25" transform="rotate(-14 162 84)" />
        <ellipse cx="187" cy="61" rx="10" ry="24" transform="rotate(-10 187 61)" />
        <ellipse cx="205" cy="45" rx="9" ry="22" transform="rotate(-4 205 45)" />

        <ellipse cx="89" cy="188" rx="11" ry="27" transform="rotate(34 89 188)" />
        <ellipse cx="119" cy="166" rx="10" ry="25" transform="rotate(42 119 166)" />
        <ellipse cx="150" cy="146" rx="10" ry="24" transform="rotate(49 150 146)" />
        <ellipse cx="177" cy="122" rx="9" ry="23" transform="rotate(55 177 122)" />
      </g>

      <g className="botanical-leaves botanical-leaves--light">
        <ellipse cx="31" cy="210" rx="9" ry="22" transform="rotate(-62 31 210)" />
        <ellipse cx="103" cy="115" rx="8" ry="20" transform="rotate(62 103 115)" />
        <ellipse cx="151" cy="72" rx="8" ry="18" transform="rotate(66 151 72)" />
      </g>

      <Flower x={52} y={185} scale={0.95} />
      <Flower x={109} y={137} scale={0.72} />
      <Flower x={163} y={91} scale={0.62} />
      <Flower x={204} y={47} scale={0.48} />

      <g className="botanical-buds">
        <circle cx="75" cy="159" r="4" />
        <circle cx="83" cy="153" r="3.5" />
        <circle cx="129" cy="115" r="4" />
        <circle cx="137" cy="108" r="3.5" />
        <circle cx="177" cy="73" r="3.8" />
        <circle cx="186" cy="67" r="3.2" />
      </g>
    </svg>
  );
}
