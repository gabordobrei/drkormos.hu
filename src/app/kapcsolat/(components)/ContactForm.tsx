'use client';

import { ContactFormAction } from '@/actions/ContactFormAction';
import { useRef } from 'react';

export function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="relative isolate mt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 sm:pt-32 lg:static lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kapcsolat</h2>

            <div className="mt-6 space-y-8 text-lg leading-8 text-gray-600">
              <p>
                Jogi tanácsot adni, illetve az ügyben felelősséggel nyilatkozni kizárólag az eset összes körülményének
                megismerését követően lehet. Erre tekintettel telefonon nem áll módomban teljes körű jogi tanácsadást
                nyújtani. Tisztelettel várom azonban irodámban, ahol nyugodt körülmények között beszélhetjük át a jogi
                probléma és a megoldás részleteit.
              </p>

              <p>Személyes – akár online – konzultációhoz telefonon vagy e-mail útján tud időpontot kérni.</p>

              <p>
                A szerződéskötés ma már online is lehetséges ún. távazonosítás és távellenjegyzés útján. Jelezze előre,
                ha valamelyik szerződő fél akadályoztatva van a személyes megjelenésben, és megtaláljuk a megoldást!
              </p>
            </div>
          </div>
        </div>

        <form
          ref={ref}
          action={async formData => {
            await ContactFormAction(formData);
            ref.current?.reset();
          }}
          className="bg-white/60 px-6 sm:pt-32 lg:px-8"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Vezetéknév
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Keresztnév
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Telefonszám
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    placeholder="+36 30 123 4567"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Üzenet
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    placeholder="A jogi probléma rövid leírása"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Küldés
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
