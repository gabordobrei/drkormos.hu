import Image from 'next/image';

export default function Logo({ className }: { className?: string }) {
  return <Image className={className ?? ''} src="/logo.png" alt="Dr. Kormos Zsuzsanna" width={32} height={32} />;
}
