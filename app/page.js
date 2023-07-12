'use client'

import { PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const contacts = [
  { name: 'Phone Number', icon: PhoneIcon, description: '(123) 456-7890' },
  { name: 'Email', icon: EnvelopeIcon, description: 'name@email.com' },
  { name: 'Website', icon: GlobeAltIcon, description: 'www.example.com' },
]

export default function Home() {

  const handleClick = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/contact.vcf';
    downloadLink.download = 'contact.vcf';
    downloadLink.click();
  }

  return (
    <main>
      <div className='container m-auto'>
        <div className="flex justify-center m-5">
          <a href="#" className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image className="object-cover w-full h-96 md:h-auto md:w-48" src="/profile-placeholder.png" alt="headshot image" width={100} height={100} />
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
        <div className='flex justify-center'>
          <button
            type="button"
            onClick={handleClick}
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Add Contact
          </button>
        </div>
      </div>
    </main>
  );
}
