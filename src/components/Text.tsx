interface TextProps {
  text: string;
  bold: boolean;
}

export function Text({ text, bold }: TextProps) {
  return <span className={`text-2xl ${bold && 'font-bold'}`}>{text}</span>;
}
