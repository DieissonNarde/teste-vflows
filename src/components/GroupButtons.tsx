import { Button } from './Button';

export function GroupButtons() {
  return (
    <div className="w-full flex justify-end gap-6">
      <Button text={'Anterior'} bgColor="yellow" />
      <Button text={'Próximo'} bgColor="green" />
    </div>
  );
}
