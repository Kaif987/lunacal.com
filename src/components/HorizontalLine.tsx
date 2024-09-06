export default function HorizontalLine(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="620"
      height="12"
      fill="none"
      viewBox="0 0 620 12"
    >
      <g filter="url(#filter0_bd_1_3351)" shapeRendering="crispEdges">
        <rect
          width="612"
          height="4"
          x="4"
          fill="url(#paint0_linear_1_3351)"
          fillOpacity="0.1"
          rx="2"
        ></rect>
        <rect
          width="612"
          height="4"
          x="4"
          fill="#fff"
          fillOpacity="0.05"
          rx="2"
        ></rect>
      </g>
      <defs>
        <filter
          id="filter0_bd_1_3351"
          width="631.675"
          height="23.675"
          x="-5.837"
          y="-9.837"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="4.919"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_3351"
          ></feComposite>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0"></feColorMatrix>
          <feBlend
            in2="effect1_backgroundBlur_1_3351"
            result="effect2_dropShadow_1_3351"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1_3351"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_1_3351"
          x1="310"
          x2="310"
          y1="0"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#282828"></stop>
          <stop offset="1" stopColor="#F8F8F8"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
