import Image from 'next/image';
import logo from '@/../public/logo.svg';
import logoTextHorizontal from '@/../public/logo-text--horizontal.svg';

export default function Logo({ className }: { className?: string }) {
  return <Image className={className ?? ''} src={logo} alt="Dr. Kormos Zsuzsanna" />;
}

export function LogoWithTextHorizontal({ className }: { className?: string }) {
  return <Image className={className ?? ''} src={logoTextHorizontal} alt="Dr. Kormos Zsuzsanna" />;
}
