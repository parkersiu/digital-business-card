'use client'

import { PhoneIcon, EnvelopeIcon, GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const contacts = [
  { name: 'Phone Number', icon: PhoneIcon, description: '(123) 456-7890' },
  { name: 'Email', icon: EnvelopeIcon, description: 'name@email.com' },
  { name: 'Website', icon: GlobeAltIcon, description: 'www.example.com' },
];

const solutions = [
  { name: 'iPhone', href: '#' },
  { name: 'Android', href: '#' }
];

export default function Home() {

  const [cardFront, setCardFront] = useState(true);

  const iphoneHandler = () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = '/iphone.vcf';
      downloadLink.download = 'iphone-contact.vcf';
      downloadLink.click();
  }

  const androidHandler = () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = '/android.vcf';
      downloadLink.download = 'android-contact.vcf';
      downloadLink.click();
  }

  const cardFlip = (e) => {
    e.preventDefault();
    setCardFront(!cardFront);
  }

  return (
    <main>
      <div className='container m-auto'>
        {cardFront ? (
          <div className="flex justify-center m-5">
            <a onClick={cardFlip} className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Image className="object-cover w-full h-96 md:h-auto md:w-48" src="/profile-placeholder.png" alt="headshot image" width={100} height={100} priority={true} />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John Doe</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Title</p>
                {contacts.map((item) => (
                  <div key={item.name} className='text-white my-1'>
                    <item.icon className='w-5 h-5 inline' />
                    <p className='inline p-2'>{item.description}</p>
                  </div>
                ))}
              </div>
            </a>
          </div>
          ) : (
            <div className="flex justify-center m-5">
              <a onClick={cardFlip} className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John Doe</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Title</p>
                </div>
              </a>
            </div>
          )}
        <div className='flex justify-center'>
          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <span>Add Contact</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
            <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
              <div className="w-auto flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {solutions.map((item) => (
                    <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-3 hover:bg-gray-50">
                      <div>
                        <a href={item.href} onClick={item.name === 'iPhone' ? iphoneHandler : androidHandler} className="font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </main>
  );
}
