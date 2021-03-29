export default function Text({ iconRight, className, ...props }) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        {...props}
        className={`${className} w-full pl-[18px] pr-[18px] pt-[17px] pb-4 rounded border border-theme-light-blue bg-white font-bold text-xs focus:outline-none focus:border-theme-light-blue focus:ring-1 focus:ring-inset focus:ring-theme-primary`}
      />

      {iconRight && (
        <div className="absolute top-0 right-0 my-4 mr-4">
          <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z"
              fill="#7E88C3"
              opacity={0.5}
            />
          </svg>
        </div>
      )}
    </div>
  );
}
