import { Button } from './Button';

interface GroupButtonsProps {
  firstText?: string;
  secondText?: string;
  firstColor?: string;
  secondColor?: string;
  toLinkBack: string;
  handleAction: () => void;
}

export function GroupButtons({
  firstText = 'Anterior',
  secondText = 'Próximo',
  firstColor = 'bg-yellow',
  secondColor = 'bg-blue',
  toLinkBack,
  handleAction,
}: GroupButtonsProps) {
  return (
    <div className="w-full flex justify-end gap-6">
      <Button toLink={toLinkBack} type={'button'} text={firstText} bgColor={firstColor} />
      <Button handleAction={handleAction} type={'button'} text={secondText} bgColor={secondColor} />
    </div>
  );
}
