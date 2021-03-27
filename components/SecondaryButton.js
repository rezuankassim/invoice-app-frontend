export default function SecondaryButton({
  icon,
  children,
  className,
  padding = "pl-2 py-2 pr-[15px]",
  ...props
}) {
  return (
    <button
      className={
        "flex items-center space-x-4 rounded-3xl bg-theme-lighter-gray font-bold text-xs text-theme-indigo group hover:bg-theme-light-blue transition ease-in-out duration-300 dark:bg-theme-light-navy-blue dark:hover:bg-white dark:hover:text-theme-indigo" +
        ` ${className} ${padding}`
      }
      {...props}
    >
      {icon && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-theme-lighter-gray group-hover:text-theme-light-blue dark:text-theme-light-blue">
          {icon}
        </div>
      )}

      <span className="text-theme-indigo">{children}</span>
    </button>
  );
}
