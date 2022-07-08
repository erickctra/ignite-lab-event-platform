import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
}
