export default function Text(props) {
  return (
    <input
      type="text"
      {...props}
      className="w-full pl-[18px] pr-[18px] pt-[17px] pb-4 rounded border border-theme-light-blue bg-white font-bold text-xs focus:outline-none focus:border-theme-light-blue focus:ring-1 focus:ring-inset focus:ring-theme-primary"
    />
  );
}
