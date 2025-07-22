export interface Testimonial {
  name: string
  title: string
  company: string
  logo: string
  text: string
  link?: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ivo Georgiev',
    title: 'CEO',
    company: 'Ambire Wallet',
    logo: '/logos/ambire.png',
    text: `Goodmorning is the ultimate web3 development studio. Our work with them has been seamless and we've been mightily impressed by their knowledge, expertise and deep understanding of all things blockchain.`,
    link: '#',
  },
  {
    name: 'Velislav Ivanov',
    title: 'Head of Planning & PMO',
    company: 'LimeChain',
    logo: '/logos/limechain.png',
    text: `We've been partners with goodmorning for more than 4 years now and have worked with a few talents from their team. They’ve shown professionalism, good work ethic and understanding of the technology stack we've been working with.`,
    link: '#',
  },
  {
    name: 'Dimo Stoyanov',
    title: 'Partner',
    company: 'AdEx',
    logo: '/logos/adex.png',
    text: `We knew exactly what we wanted AURA to become, but to get there fast - and get it right - we needed a partner who could push the limits and still deliver something real, not just another prototype. We knew the guys from goodmorning had a good track record of shipping, so we chose them to build our MVP and we weren’t wrong.`,
    link: '#',
  },
]
