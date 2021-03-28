export default function Group({ children, forId, label, className }) {
  return (
    <div>
      <label
        htmlFor={forId}
        className="block w-full text-xs font-medium text-theme-indigo"
      >
        {label}
      </label>

      <div className={"mt-2.5 rounded" + ` ${className}`}>{children}</div>
    </div>
  );
}
