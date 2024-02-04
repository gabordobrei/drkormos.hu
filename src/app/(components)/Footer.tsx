import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const navigation = {
  contact: [
    { name: 'Email', link: { href: 'mailto:info@drkormos.hu', title: 'info@drkormos.hu' }, icon: EnvelopeIcon },
    { name: 'Telefonszám', link: { href: 'tel:+36308306832', title: '+36 30 830 6832' }, icon: PhoneIcon },
    {
      name: 'Cím',
      link: { href: 'https://maps.app.goo.gl/uVKeYFrp5H3b2sfLA', title: 'Váci út 28. félem. 2., Budapest, 1132' },
      icon: BuildingOffice2Icon
    },
    {
      name: 'Facebook',
      link: {
        href: 'https://www.facebook.com/people/Dr-Kormos-Zsuzsanna-ügyvéd/61553403957718',
        title: 'Dr. Kormos Zsuzsanna hivatalos oldala'
      },
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-10 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
          {navigation.contact.map(it => (
            <div key={it.name} className="flex justify-center text-center">
              <a
                title={it.name + ': ' + it.link.title}
                href={it.link.href}
                className="group flex flex-col items-center text-gray-400"
              >
                <span className="sr-only">{it.name}</span>
                <it.icon className="h-6 w-5 text-gray-400 group-hover:text-cyan-600" aria-hidden="true" />
                <span className="text-xs leading-6 text-gray-600 group-hover:text-cyan-600">{it.link.title}</span>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8">
          <p className="text-sm leading-5 text-gray-500">&copy; {new Date().getUTCFullYear()} dr. Kormos Zsuzsanna.</p>
          <p className="text-sm leading-5 text-gray-500">
            Ezt a honlapot dr. Kormos Zsuzsanna ügyvéd (székhely: 1132 Budapest, Váci út 28. félem. 2., KASZ: 36063567),
            mint a Budapesti Ügyvédi Kamarába bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és
            belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a{' '}
            <a href="https://www.mük.hu/" target="_blank" className="text-gray-600">
              www.mük.hu
            </a>{' '}
            honlapon megtalálhatóak. A honlapon információk, blogbejegyzések, cikkek nem minősülnek konkrét jogi
            tanácsadásnak, ajánlattételnek vagy erre történő felhívásnak. Célja, hogy az érdeklődő tájékozódni tudjon
            dr. Kormos Zsuzsanna ügyvéd szakterületeiről és szolgáltatásairól. A honlap tartalma szerzői jogi védelem
            alatt áll, amelynek jogosultja dr. Kormos Zsuzsanna ügyvéd.
          </p>
        </div>
      </div>
    </footer>
  );
}
