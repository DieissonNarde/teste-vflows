import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface InputProps {
  label: string;
  type: string;
  width: string;
  name: string;
}

export function Input({ label, type, width, name }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className={`${width}`}>
      <label className="text-xl font-semibold uppercase" htmlFor={label}>
        {label}
      </label>
      <input
        className="mt-2 w-full border border-gray p-3 text-lg	rounded-md font-bold"
        ref={inputRef}
        type={type}
      />
    </div>
  );
}
