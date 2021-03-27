export default function PrimaryButton({
  icon,
  children,
  className,
  padding = "pl-2 py-2 pr-[15px]",
  ...props
}) {
  return (
    <button
      className={
        "flex items-center space-x-4 rounded-3xl bg-theme-primary font-bold text-xs text-white group hover:bg-theme-secondary transition ease-in-out duration-300" +
        ` ${className} ${padding}`
      }
      {...props}
    >
      {icon && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-theme-primary group-hover:text-theme-secondary">
          {icon}
        </div>
      )}

      <span className="text-white">{children}</span>
    </button>
  );
}
