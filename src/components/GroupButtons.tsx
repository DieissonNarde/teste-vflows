import { Button } from './Button';

interface GroupButtonsProps {
  firstText: string;
  secondText: string;
  firstColor: string;
  secondColor: string;
}

export function GroupButtons({
  firstText = 'Anterior',
  secondText = 'Próximo',
  firstColor = 'bg-yellow',
  secondColor = 'bg-blue',
}: GroupButtonsProps) {
  return (
    <div className="w-full flex justify-end gap-6">
      <Button text={firstText} bgColor={firstColor} />
      <Button text={secondText} bgColor={secondColor} />
    </div>
  );
}
