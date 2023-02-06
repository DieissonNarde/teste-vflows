interface TextProps {
  text: string | undefined;
  bold?: boolean;
}

export function Text({ text = '', bold = false }: TextProps) {
  return <span className={`text-2xl ${bold && 'font-bold'}`}>{text}</span>;
}
