export const metadata = {
  title: 'Staff Augmentation Services for Web3 Projects | goodmorning',
  description:
    'Skip the hiring headaches with goodmorning’s staff augmentation services - 30+ Web3 engineers, seamless team integration, and real impact right when you need it',
    twitter: {
    card: 'summary_large_image',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/meta/service-staff-augmentation-meta-image.png`,],
  },
  openGraph: {
  title: 'Staff Augmentation Services for Web3 Projects | goodmorning',
  description:
    'Skip the hiring headaches with goodmorning’s staff augmentation services - 30+ Web3 engineers, seamless team integration, and real impact right when you need it',
    url: 'https://goodmorning.dev',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/meta/service-staff-augmentation-meta-image.png`,
        width: 1200,
        height: 630,
        alt: 'goodmorning - staff augmentation',
      },
    ],
    type: 'website',
  },
}

import StaffAugmentation from './StaffAugmentation'

export default function StaffAugmentationPage() {
  return <StaffAugmentation />
}
