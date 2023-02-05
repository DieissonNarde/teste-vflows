import { Logo } from './Logo';

export function Footer() {
  return (
    <div className="pt-6 flex items-center justify-start gap-48">
      <Logo />
      <span className="text-xl text-gray">&copy; 2022-2022 Construindo Patrimônios</span>
    </div>
  );
}
