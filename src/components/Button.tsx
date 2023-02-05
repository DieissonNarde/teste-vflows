interface ButtonProps {
  text: string;
  bgColor: string;
}

export function Button({ text, bgColor }: ButtonProps) {
  return (
    <input
      className={`bg-${bgColor} py-4 px-28 mt-8 text-white text-xl font-semibold uppercase hover:brightness-110 cursor-pointer`}
      type="submit"
      value={text}
    />
  );
}
