import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import styles from './HeroPictureDesktop.module.css'

export default function HeroPictureDesktop() {
  return (
    <div className="relative lg:w-[480px] w-100% max-lg: h-full overflow-y-hidden">
      <Image
        src="/images/hero-bg.svg"
        alt="hero-bg"
        fill
        className={cn("object-contain object-top", styles.picBg)}
      />
      <svg width="0" height="0">
        <defs>
          <clipPath id="mask">
            <path
              className='lg:translate-x-[-3px] lg:translate-y-[-108px] translate-x-[108px]'
        
              d="M13.3242 97.8335C13.7176 84.5422 23.4046 73.3608 36.5042 71.0777L440.73 0.624413C457.676 -2.32917 473.254 10.5529 473.534 27.7522L482.474 576.252C482.752 593.278 467.894 606.608 450.998 604.491L25.2609 551.164C10.9379 549.37 0.326131 536.981 0.753192 522.553L13.3242 97.8335Z"
              fill="#2D5B9F"
            />
          </clipPath>
        </defs>
      </svg>
      <Image
        src="/images/hero.png"
        alt="hero-image"
        fill
        className={cn("object-cover object-top", styles.picInner)}
        style={{
          clipPath: 'url("#mask")',
        }}
      />
    </div>
  )
}
