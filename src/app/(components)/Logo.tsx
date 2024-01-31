import Image from 'next/image';

export default function Logo({ className }: { className?: string }) {
  return <Image className={className ?? ''} src="/logo.svg" alt="Dr. Kormos Zsuzsanna" width={32} height={32} />;
}

export function LogoWithTextHorizontal({ className }: { className?: string }) {
  return (
    <Image
      className={className ?? ''}
      src="/logo-text--horizontal.svg"
      alt="Dr. Kormos Zsuzsanna"
      width={32}
      height={32}
    />
  );
}
