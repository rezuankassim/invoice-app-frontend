export default function DangerButton({
  icon,
  children,
  className,
  padding = "pl-2 py-2 pr-[15px]",
}) {
  return (
    <button
      className={
        "flex items-center space-x-4 rounded-3xl bg-theme-red font-bold text-xs text-white group hover:bg-theme-pink transition ease-in-out duration-300" +
        ` ${className} ${padding}`
      }
    >
      {icon && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-theme-red group-hover:text-theme-pink">
          {icon}
        </div>
      )}

      <span className="text-white">{children}</span>
    </button>
  );
}
