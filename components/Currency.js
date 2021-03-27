export default function Currency({ amount, className }) {
  let formatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <span className={"text-theme-black dark:text-white" + ` ${className}`}>
      {formatter.format(amount).replace(/^(\D+)/, "$1 ")}
    </span>
  );
}
