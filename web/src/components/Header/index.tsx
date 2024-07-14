import Image from 'next/image';
import logo from '@images/coopers-logo.png';

export function Header() {
  return (
    <header className="flex flex-col p-12 sm:flex-row sm:justify-between">
      <Image src={logo} alt="Logo Coopers Digital Production" />
      <button className="mt-4 bg-black px-6 py-0 sm:mt-0">
        <p className="text-white">entrar</p>
      </button>
    </header>
  );
}
