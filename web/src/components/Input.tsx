import { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  type: string;
  width: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function Input({ label, type, width, value, setValue }: InputProps) {
  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setValue(value);
  }

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
        onChange={handleChange}
      />
    </div>
  );
}
