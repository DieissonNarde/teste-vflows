interface InputProps {
  label: string;
  type: string;
  value: string;
  width: string;
}

export function Input({ label, type, value, width }: InputProps) {
  return (
    <div className={`${width}`}>
      <label className="text-xl font-semibold uppercase" htmlFor={label}>
        {label}
      </label>
      <input
        className="mt-2 w-full border border-gray p-3 text-lg	rounded-md font-bold"
        type={type}
        name={label}
        id={label}
        value={value}
      />
    </div>
  );
}
