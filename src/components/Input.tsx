interface InputProps {
  label: string;
  type: string;
  value: string;
}

export function Input({ label, type, value }: InputProps) {
  return (
    <>
      <label className="mb-2 text-xl font-semibold uppercase" htmlFor={label}>
        {label}
      </label>
      <input
        className="border border-gray p-3 rounded-md font-bold"
        type={type}
        name={label}
        id={label}
        value={value}
      />
    </>
  );
}
