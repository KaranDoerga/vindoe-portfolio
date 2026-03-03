import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto h-30 w-30">
            <Image
              src="/vindoe-logo.png"
              alt="Karan's Logo"
              width={5000}
              height={5000}
              className="mx-auto h-full w-full object-contain scale-250"
            />
          </div>
          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Software Developer • Beat Producer
          </p>
        </div>
      </div>
    </header>
  )
}
