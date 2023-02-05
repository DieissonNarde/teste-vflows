interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return <h1 className="text-5xl font-bold uppercase">{title}</h1>;
}
