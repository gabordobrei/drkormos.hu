import Footer from '@/app/(components)/Footer';
import Header from '@/app/(components)/Header';
import Image from 'next/image';
import Link from 'next/link';

export const runtime = 'edge';

export default function About() {
  return (
    <>
      <Header />

      <main className="isolate">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 hidden w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50 sm:-mr-80 sm:block lg:-mr-96"
          aria-hidden="true"
        />

        <div className="my-20">
          <Ingatlanjog />
          <Oroklesijog />
          <Csaladijog />
        </div>

        <Footer />
      </main>
    </>
  );
}

function Ingatlanjog() {
  return (
    <div id="ingatlan-jog" className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="/keys.jpg"
                alt="Kulcsok"
                width={1000}
                height={2000}
                quality={100}
              />
            </div>
          </div>
          <div>
            <div className="prose lg:max-w-lg">
              <p className="font-semibold text-cyan-600">Ingatlanjog</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Mindenhol jó, de a legjobb a földhivatalnál
              </h1>
              <div className="max-w-xl text-gray-500">
                <p className="prose-lg">Miben segíthetek, ha ingatlanról van szó?</p>
                <ul role="list">
                  <li>jogi tanácsadás</li>
                  <li>az ingatlan tulajdoni lapjának, térképmásolatának beszerzése</li>
                  <li>
                    az ingatlan jogi helyzetének és a jogszerzés esetleges akadályainak, illetve feltételeinek előzetes
                    vizsgálata
                  </li>
                  <li>
                    ingatlanra vonatkozó okiratok (szerződések és egyéb nyilatkozatok) szerkesztése és ellenjegyzése –
                    hitel- és/vagy CSOK-igénylés esetén a folyósító bankkal együttműködve
                  </li>
                  <li>
                    jogi képviselet a földhivatal és egyéb hatóságok előtt (pl. tulajdonjog-bejegyzés,
                    épületfeltüntetés, -kiemelés, telekalakítás)
                  </li>
                  <li>
                    más által készített okiratok véleményezése – az okiratszerkesztő kollégával együttműködve a
                    szerződés tartalmának kialakítása
                  </li>
                  <li>
                    ingatlan tehermentesítésében történő közreműködés (jelzálogjog, végrehajtási jog, vételi jog
                    törlése)
                  </li>
                  <li>társasház alapítása és már működő társasház alapító okiratának módosítása</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 flex">
              <Link href="/kapcsolat" className="text-base font-semibold leading-7 text-cyan-600 hover:text-cyan-700">
                Vegye fel velem a kapcsolatot<span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Oroklesijog() {
  return (
    <div id="oroklesi-jog" className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-cyan-600">Öröklési jog</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Mert mindig van egy „kedvenc” gyerek
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/dandelion.jpg"
                    alt="Pitypang a reggeli harmatban"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
                A Polgári Törvénykönyv részletesen leírja, hogy ki, mit, milyen arányban örökölhet az örökhagyó után. Ha
                valaki halála esetére ettől eltérően szeretne rendelkezni, vagyis meghatározná, hogy hagyatékából ki és
                milyen feltételekkel vagy éppen ki ne részesüljön, úgy azt megteheti pl. végrendelet formájában. A
                részesedés tartási kötelezettség teljesítéséhez is köthető (öröklési szerződés), azonban az örökhagyó és
                a leendő örökösök egymással is megállapodhatnak előre (lemondás). A törvény a végintézkedések tartalmára
                és formájára nézve rendkívül szigorú szabályokat ír elő, melyek megsértése a végintézkedés
                érvénytelenségét eredményezheti, mely esetben szintén a törvényes öröklés rendje érvényesül, érdemes
                ezért előzetesen ügyvéddel konzultálni, illetve az okirat megszerkesztését ügyvédre bízni. Emellett egy
                örökösödési vita nagyon hosszúra nyúlhat. Ha lehetőség van rá, jobb megelőzni.
              </p>
            </div>
            <div className="prose prose-cyan mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p className="prose-lg">Öröklési és hagyatéki ügyekben az alábbi feladatokat látom el különösen:</p>

              <ul role="list">
                <li>
                  jogi tanácsadás a törvényes öröklés rendjéről, a várható örökösök köréről, az örökrész mértékéről, az
                  örökösöket illető jogokról és kötelezettségekről
                </li>
                <li>jogi tanácsadás a végintézkedések formáiról</li>
                <li>végrendelet készítése, módosítása, letétbe helyezése</li>
                <li>öröklési szerződés készítése</li>
                <li>öröklésről lemondás, öröklést visszautasító nyilatkozat szerkesztése</li>
                <li>hagyatéki eljárásban történő jogi képviselet ellátása.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Csaladijog() {
  return (
    <div id="csaladi-jog" className="bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="/ring.jpg"
                alt="Visszaadott gyűrű"
                width={1000}
                height={2000}
                quality={100}
              />
            </div>
          </div>
          <div>
            <div className="prose lg:max-w-lg">
              <p className="font-semibold text-cyan-600">Családi jog</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Mert jobb kapni, mint adni
              </h1>
              <div className="max-w-xl text-gray-500">
                <p className="prose-lg mt-6">
                  A családi jog területén fokozottan érvényesül az az alapelv, hogy a legjobb megoldás a felek
                  kompromisszumon alapuló megállapodása, mely elsődlegesen hivatott szabályozni a felek kapcsolatát,
                  illetve rendezni az ún. járulékos kérdéseket (szülői felügyelet, gyermektartás, kapcsolattartás,
                  lakáshasználat, házastársi tartás).
                </p>
                <p className="prose-lg mt-8">Miben segíthetek?</p>
                <ul role="list">
                  <li>járulékos kérdésekről szóló megállapodás,</li>
                  <li>házassági vagyonjogi szerződés,</li>
                  <li>házastársi közös vagyon megosztásáról szóló szerződés,</li>
                  <li>élettársi közös vagyon megosztásáról szóló szerződés szerkesztése, ellenjegyzése</li>
                  <li>megegyezésen alapuló bontóperekben,</li>
                  <li>az Állam által megelőlegezett gyermektartásdíj iránti eljárásban jogi képviselet ellátása,</li>
                  <li>
                    tartásdíjra vonatkozó végrehajtási eljárás kezdeményezése, illetve abban jogi képviselet ellátása.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 flex">
              <Link href="/kapcsolat" className="text-base font-semibold leading-7 text-cyan-600 hover:text-cyan-700">
                Vegye fel velem a kapcsolatot<span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
