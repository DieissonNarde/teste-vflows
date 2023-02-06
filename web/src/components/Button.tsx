import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  bgColor: string;
  type: string;
  toLink?: string;
  handleAction?: (ev: React.MouseEvent<HTMLInputElement, MouseEvent>) => void | undefined;
}

export function Button({ text, bgColor, handleAction, type, toLink }: ButtonProps) {
  return (
    <>
      {toLink ? (
        <Link to={toLink}>
          <input
            className={`${bgColor} py-4 px-28 mt-8 text-white text-xl font-semibold uppercase hover:brightness-110 cursor-pointer`}
            type={type}
            value={text}
          />
        </Link>
      ) : (
        <input
          className={`${bgColor} py-4 px-28 mt-8 text-white text-xl font-semibold uppercase hover:brightness-110 cursor-pointer`}
          type={type}
          value={text}
          onClick={handleAction}
        />
      )}
    </>
  );
}
