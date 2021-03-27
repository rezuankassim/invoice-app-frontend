export default function Status({ status }) {
  let theme =
    status === "paid"
      ? " bg-theme-green text-theme-green"
      : status === "pending"
      ? " bg-theme-orange text-theme-orange"
      : " bg-theme-darker-gray text-theme-darker-gray dark:bg-theme-light-blue dark:text-theme-light-blue";

  return (
    <span
      className={
        "pl-4.5 pr-[17px] pt-[13px] pb-3 w-full flex items-center justify-center space-x-2 rounded-md bg-opacity-[0.0571] dark:bg-opacity-[0.0571]" +
        theme
      }
    >
      <div className={"w-2 h-2 rounded-full" + theme}></div>

      <span className="font-bold">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </span>
  );
}
