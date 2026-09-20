type FloralCornerProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
};

export default function FloralCorner({
  position = "top-left",
  className = "",
}: FloralCornerProps) {
  return (
    <svg
      className={"floral-corner floral-corner--" + position + " " + className}
      viewBox="0 0 220 220"
      aria-hidden="true"
    >
      <g className="floral-leaves">
        <ellipse cx="52" cy="169" rx="14" ry="34" transform="rotate(-44 52 169)" />
        <ellipse cx="78" cy="144" rx="13" ry="31" transform="rotate(-32 78 144)" />
        <ellipse cx="105" cy="119" rx="12" ry="29" transform="rotate(-24 105 119)" />
        <ellipse cx="137" cy="93" rx="11" ry="27" transform="rotate(-18 137 93)" />
        <ellipse cx="165" cy="67" rx="10" ry="24" transform="rotate(-14 165 67)" />
      </g>
      <g className="floral-stems">
        <path d="M24 196C70 156 118 111 190 36" />
        <path d="M44 185C82 151 119 131 165 112" />
      </g>
      <g className="floral-flowers">
        <g transform="translate(55 169)">
          <circle r="17" />
          <circle cx="-13" cy="-6" r="10" />
          <circle cx="12" cy="-7" r="10" />
          <circle cx="-7" cy="12" r="10" />
          <circle cx="8" cy="12" r="10" />
          <circle className="floral-center" r="4" />
        </g>
        <g transform="translate(118 113) scale(.72)">
          <circle r="17" />
          <circle cx="-13" cy="-6" r="10" />
          <circle cx="12" cy="-7" r="10" />
          <circle cx="-7" cy="12" r="10" />
          <circle cx="8" cy="12" r="10" />
          <circle className="floral-center" r="4" />
        </g>
        <g transform="translate(170 65) scale(.55)">
          <circle r="17" />
          <circle cx="-13" cy="-6" r="10" />
          <circle cx="12" cy="-7" r="10" />
          <circle cx="-7" cy="12" r="10" />
          <circle cx="8" cy="12" r="10" />
          <circle className="floral-center" r="4" />
        </g>
      </g>
    </svg>
  );
}
