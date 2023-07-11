import { PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const contacts = [
  { name: 'Phone Number', icon: PhoneIcon, description: '(760) 473-2099' },
  { name: 'Email', icon: EnvelopeIcon, description: 'parker.siu@gmail.com' },
  { name: 'Website', icon: GlobeAltIcon, description: 'www.parkersiu.com' },
]

export default function Home() {
  return (
    <main>
      <div className="container flex justify-center mt-5">
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/profile-placeholder.png" alt="headshot image" width={100} height={100} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Parker Siu</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Software Engineer</p>
            {contacts.map((item) => (
              <div key={item.name} className='text-white'>
                <item.icon className='w-5 h-5 inline' />
                <p className='inline p-2'>{item.description}</p>
              </div>
            ))}
          </div>
        </a>
      </div>
    </main>
  );
}
