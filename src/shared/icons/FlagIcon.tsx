export function FlagIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="20" fill="black" fillOpacity="0.15" />
      <g clipPath="url(#flag_clip)">
        <mask id="flag_mask" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="8" y="8" width="24" height="24">
          <path d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32Z" fill="white" />
        </mask>
        <g mask="url(#flag_mask)">
          <path d="M8 8L8.375 9.03125L8 10.1094V11.1875L9.5 13.7188L8 16.25V17.75L9.5 20L8 22.25V23.75L9.5 26.2812L8 28.8125V32L9.03125 31.625L10.1094 32H11.1875L13.7188 30.5L16.25 32H17.75L20 30.5L22.25 32H23.75L26.2812 30.5L28.8125 32H32L31.625 30.9688L32 29.8906V28.8125L30.5 26.2812L32 23.75V22.25L30.5 20L32 17.75V16.25L30.5 13.7188L32 11.1875V8L30.9688 8.375L29.8906 8H28.8125L26.2812 9.5L23.75 8H22.25L20 9.5L17.75 8H16.25L13.7188 9.5L11.1875 8H8Z" fill="#EEEEEE" />
          <path d="M23.75 8V13.0625L28.8125 8H23.75ZM32 11.1875L26.9375 16.25H32V11.1875ZM8 16.25H13.0625L8 11.1875V16.25ZM11.1875 8L16.25 13.0625V8H11.1875ZM16.25 32V26.9375L11.1875 32H16.25ZM8 28.8125L13.0625 23.75H8V28.8125ZM32 23.75H26.9375L32 28.8125V23.75ZM28.8125 32L23.75 26.9375V32H28.8125Z" fill="#0052B4" />
          <path d="M8 8V10.1094L14.1406 16.25H16.25L8 8ZM17.75 8V17.75H8V22.25H17.75V32H22.25V22.25H32V17.75H22.25V8H17.75ZM29.8906 8L23.75 14.1406V16.25L32 8H29.8906ZM16.25 23.75L8 32H10.1094L16.25 25.8594V23.75ZM23.75 23.75L32 32V29.8906L25.8594 23.75H23.75Z" fill="#D80027" />
        </g>
      </g>
      <defs>
        <clipPath id="flag_clip">
          <rect width="24" height="24" fill="white" transform="translate(8 8)" />
        </clipPath>
      </defs>
    </svg>
  );
}
