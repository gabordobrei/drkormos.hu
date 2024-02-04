import Header from '@/app/(components)/Header';
import Footer from '@/app/(components)/Footer';
import { HomeModernIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';

export default function Landing() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <Hero />
        <Szakteruletek />

        <Footer />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Dr. Kormos Zsuzsanna ügyvéd
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Évtizedes tapasztalattal, lelkiismeretes, megbízható és munkájára is igényes ügyvédként{' '}
                <strong className="font-semibold">ingatlan-, öröklési és családi joggal</strong> foglalkozom.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/rolam" className="text-sm font-semibold leading-6 text-gray-900">
                  Bővebben <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="/profile.jpg"
          alt=""
          width={1365}
          height={2048}
        />
      </div>
    </section>
  );
}

function Szakteruletek() {
  const features = [
    {
      name: 'Ingatlan jog',
      description:
        'Kiemelten foglalkozom ingatlanjoggal, azaz az ingatlanokhoz kapcsolódó jogi feladatok ellátásával. Ha ingatlant szerezne, vagy saját ingatlanvagyonáról rendelkezne, esetleg vitába került a tulajdonjogot vagy a használatot illetően, szüksége lesz ügyvédi segítségre.',
      href: '/szakteruletek#ingatlan-jog',
      icon: HomeModernIcon
    },
    {
      name: 'Öröklési jog',
      description:
        'Egyszer mindenki életében eljön az az idő, amikor elveszít valakit. Ilyenkor a veszteség feldolgozása is rendkívül nehéz feladat, nem, hogy az örökléssel kapcsolatos jogi kérdésekben való tisztánlátás. Amikor pedig valaki saját vagyonának sorsát szeretné meghatározni halála esetére, legjobb, ha ezt előre – ügyvédi közreműködéssel – teszi.',
      href: '/szakteruletek#oroklesi-jog',
      icon: UsersIcon
    },
    {
      name: 'Családi jog',
      description:
        'Mai világunkban sajnos egyre kevesebb esetben köttetnek „holtomiglan-holtodiglan” házasságok. Sok kapcsolat vélt vagy valós sérelmek miatt véglegesen és helyrehozhatatlanul megromlik (a házasság válással végződik). Ez különösen akkor nagyon megterhelő érzelmileg, ha gyermekek is érintettek az ügyben.',
      href: '/szakteruletek#csaladi-jog',
      icon: UserGroupIcon
    }
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Szakterületek</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ha hozzáértő, lelkiismeretes, megbízható és munkájára is igényes ügyvédre van szüksége, forduljon hozzám
            bizalommal!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map(feature => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-cyan-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link href={feature.href} className="text-sm font-semibold leading-6 text-cyan-600">
                      Bővebben <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
