import Header from '@/app/(components)/Header';
import Footer from '@/app/(components)/Footer';
import Image from 'next/image';
import { ContactForm } from '@/app/kapcsolat/(components)/ContactForm';
import { ClockIcon, BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const runtime = 'edge';

export default function About() {
  return (
    <>
      <Header />

      <main className="isolate">
        <Hero />

        <Map />

        <ContactForm />

        <Footer />
      </main>
    </>
  );
}

function Map() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 py-20 lg:grid-cols-2">
        <div className="relative px-6 sm:pt-32 lg:static lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Elérhetőségek</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Amennyiben jogi segítségre van szüksége, várom mielőbbi megkeresését a megadott elérhetőségeken!
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    Váci út 28. félem. 2.,
                    <br />
                    Budapest, 1132
                  </dd>
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <ClockIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    H-P: 8-16
                    <br />
                    Sz-V: zárva
                  </dd>
                </div>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Mobil</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+36 30 830 6832">
                    +36 30 830 6832
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="mailto:info@drkormos.hu">
                    info@drkormos.hu
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <iframe
          width="600"
          height="450"
          className="border-0 px-6 sm:pt-32 lg:px-8"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAuwJk64hqOKNbVjf2Zx7AbPiEMofqUAuY&q=Dr.+Kormos+Zsuzsanna"
        ></iframe>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            Dr. Kormos Zsuzsanna ügyvéd
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-gray-600">
              2012-ben szereztem meg diplomámat a Pázmány Péter Katolikus Egyetem Jog- és Államtudományi Karán. Több,
              mint tíz éve dolgozom ügyvédi irodában, illetve 2017. óta egyéni ügyvédként.
              <br />
              Ha hozzáértő, lelkiismeretes, megbízható és munkájára is igényes ügyvédre van szüksége, forduljon hozzám
              bizalommal!
            </p>
          </div>
          <Image
            src="/profile-square.jpg"
            alt="Dr. Kormos Zsuzsanna"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover brightness-125 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            width={1363}
            height={1365}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </section>
  );
}
