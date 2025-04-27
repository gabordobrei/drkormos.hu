import Header from '@/app/(components)/Header';
import Footer from '@/app/(components)/Footer';
import { ContactForm } from '@/app/kapcsolat/(components)/ContactForm';
import { BuildingOffice2Icon, ClockIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <>
      <Header />

      <main className="isolate">
        <ContactForm />

        <Map />

        <Footer />
      </main>
    </>
  );
}

function Map() {
  return (
    <section className="relative isolate bg-white">
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
                    <BuildingOffice2Icon className="h-7 w-6 text-cyan-600" aria-hidden="true" />
                  </dt>
                  <dd>
                    Váci út 28. félem. 2.,
                    <br />
                    Budapest, 1132
                  </dd>
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <ClockIcon className="h-7 w-6 text-cyan-600" aria-hidden="true" />
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
                  <PhoneIcon className="h-7 w-6 text-cyan-600" aria-hidden="true" />
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
                  <EnvelopeIcon className="h-7 w-6 text-cyan-600" aria-hidden="true" />
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

        <div className="mx-auto w-full lg:mr-0">
          <iframe
            className="aspect-[4/3] h-full w-full border-0 px-6 sm:pt-32 lg:px-8"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAuwJk64hqOKNbVjf2Zx7AbPiEMofqUAuY&q=Dr.+Kormos+Zsuzsanna"
          />
        </div>
      </div>
    </section>
  );
}
