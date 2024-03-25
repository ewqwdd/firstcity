import Image from 'next/image'

export default function HeroPictureTablet() {
  return (
    <div className="relative grow max-sm:order-3">
      <Image
        src="/images/hero-masked.png"
        alt="hero-image"
        fill
        className="object-contain object-top pointer-events-none"
      />
    </div>
  )
}
