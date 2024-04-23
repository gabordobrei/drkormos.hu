import Header from '@/app/(components)/Header';
import Footer from '@/app/(components)/Footer';
import Image from 'next/image';
import { testimonials } from '@/Content';
import { ReactElement } from 'react';
import profileSquare from '@/../public/profile-square.jpg';

export const runtime = 'edge';

export default function About() {
  return (
    <>
      <Header />

      <main className="isolate">
        <Hero />

        <Testimonies />

        <Footer />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-cyan-100/20 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50 sm:-mr-80 lg:-mr-96"
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
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Munkám során igyekszem a lehető legnagyobb körültekintéssel eljárni. Vallom, hogy bár mindig a legjobb
              forgatókönyvre számít az ember, mégis érdemes a legrosszabbra is felkészülni, lehetőség szerint azt
              megelőzni. Ennek megfelelően feltárom az ügy releváns körülményeit, felhívom Ügyfeleim figyelmét az
              esetleges kockázatokra és tájékoztatom Őket a megoldási lehetőségekről. Ügyfeleim érdekeinek védelmében
              akár az eredeti elképzelésüktől eltérő jogi lépést is javaslok számukra.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Az érintett jogterületeken igyekszem magam folyamatosan továbbképezni, a tudásomat elmélyíteni, ezért
              rendszeresen veszek részt képzéseken, előadásokon.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Ha hozzáértő, lelkiismeretes, megbízható és munkájára is igényes ügyvédre van szüksége, forduljon hozzám
              bizalommal!
            </p>
          </div>
          <Image
            src={profileSquare}
            alt="Dr. Kormos Zsuzsanna"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover brightness-125 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </section>
  );
}

function Testimonies() {
  function content(testimonial: { body: string[]; author: string }) {
    const elements: ReactElement[] = [];
    for (let i = 0; i < testimonial.body.length; i++) {
      elements.push(<p key={`${testimonial.author}-p-${i}`}>{testimonial.body[i]}</p>);
      elements.push(<br key={i} />);
    }

    return elements.slice(0, -1);
  }

  return (
    <div className="bg-white pt-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-xl font-semibold leading-8 tracking-tight text-cyan-600">Rólam mondták</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rengeteg elégedett ügyféllel dolgoztam együtt
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map(testimonial => {
              return (
                <div key={testimonial.author} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-gradient-to-b from-cyan-100/20 to-transparent p-8 text-base leading-6">
                    <blockquote className="text-gray-900">{content(testimonial)}</blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
