import Header from '@/app/(components)/Header';
import Footer from '@/app/(components)/Footer';
import Image from 'next/image';

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

function Testimonies() {
  const testimonials = [
    {
      body: (
        <p>
          „Zsuzsanna segített már több ingatlan adásvételünknél is, nagyon meg vagyunk vele elégedve. Mindig gyorsan és
          precízen dolgozik, több rizikós helyzetet kerültünk már el amiatt, mert körültekintően és alaposan dolgozott.
          Azoknak ajánlom, akiknek nincs idejük odafigyelni minden apróságra, Zsuzsanna segít mindenben.”
        </p>
      ),
      author: {
        name: 'D. Gábor'
      }
    },
    {
      body: (
        <>
          <p>
            „A saját társasházi lakásunk vásárlásakor találkoztunk, mint az eladó által delegált ügyvéd. Annak ellenére,
            hogy az egyszerű adásvétel helyett egy hitellel és CSOK-kal támogatott, az egyszerű lakásvásárló által
            nehezen vehető akadályokat kellett leküzdeni a pénzintézetekkel. Mindez Önnel sikerült!
          </p>
          <br />
          <p>
            Az Ön által írt szerződéseket a pénzintézetek is elfogadták, és a több fizetési ütemet és feltételt
            tartalmazó ügylet sikeresen lezárult mindenki megelégedettségére. A társasházi jogi útvesztőkben is gondosan
            és hozzáértéssel járt el.”
          </p>
        </>
      ),
      author: {
        name: 'R. Gábor'
      }
    },
    {
      body: (
        <>
          <p>
            „Nagyon meg vagyok elégedve munkájával, minden jogi kérdésben teljeskörű választ kaptam. Az adott ügy minden
            részletére odafigyelt, és maximálisan az érdekeinket képviselte. Ezek a tulajdonságok rendkívül fontosak, ha
            egy perben azt szeretnénk, hogy pontosan és korrekten legyen az érdekünk képviselve.
          </p>
          <p>Csak ajánlani tudom a munkáját!”</p>
        </>
      ),
      author: {
        name: 'V. Attila'
      }
    },
    {
      body: (
        <>
          <p>„Zsuzsannával két alkalommal is szerencsém volt együtt dolgozni, lakásvásárlás okán.</p>
          <p>
            Nagyon meg voltam elégedve, mert bármi jogi bizonytalanság esetén nyugodt szívvel fordulhattam Hozzá, aki
            mindig alaposan, érthetően és türelmesen elmagyarázta a helyzetet, felhívva a figyelmem az esetleges
            rizikókra, ugyanakkor biztos megoldása is volt a kérdéses jogi helyzetekre.”
          </p>
        </>
      ),
      author: {
        name: 'V. Virág'
      }
    },
    {
      body: (
        <p>
          „Kiváló felkészültség és precizitás jellemzi az Ügyvédnő munkáját. Bátran ajánlom mindenkinek, aki biztos
          kezekben akarja tudni a saját ügyét!”
        </p>
      ),
      author: {
        name: 'B. Petra'
      }
    },
    {
      body: (
        <>
          <p>
            „Régóta ismerem Zsuzsannát, így nem volt kérdés, hogy Őt kérjük fel ügyvédünknek ingatlan vétel okán. Kb. 3
            évig tartott, míg megtaláltuk az igazit és ez idő alatt sok-sok alkalommal rugalmasan, türelmesen, profi
            szakértelemmel állt rendelkezésünkre. Végül 2021 nyarán sikerült beleszeretnünk a létező legproblémásabb
            &quot;családi házba&quot;.
          </p>
          <p>
            Tájékoztatott minket, hogy hosszú, bonyolult, de nem lehetetlen menet lesz. Mindig minden lépést alaposan
            átbeszéltünk, de sokszor kemény és határozott fellépésre volt szükség. Zsuzsannának hála 1 évvel később
            rendezett okiratokkal, tehermentes ház adásvételi szerződését írtuk alá és vehettük át a kulcsokat.
          </p>
          <p>
            Szívből ajánljuk Zsuzsanna munkáját férjemmel azóta is minden rokonunknak, ismerősünknek, kollégánknak!
            Ezúton is köszönjük megbízható, becsületes, profi munkádat!”
          </p>
        </>
      ),
      author: {
        name: 'F-Sz. Noémi'
      }
    }
  ];
  return (
    <div className="bg-white pt-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Rólam mondták</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rengeteg elégedett ügyféllel dolgoztam együtt
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map(testimonial => (
              <div key={testimonial.author.name} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">{testimonial.body}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
