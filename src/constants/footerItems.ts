interface FooterCategory {
  title: string
  items: {
    label: string
    href: string
  }[]
}

const footerItems: FooterCategory[] = [
  {
    title: 'Services',
    items: [
      { label: 'Tech co-founder', href: '/services/technical-co-founder' },
      { label: 'Web3 consulting', href: '/services/expert-web3-consultancy' },
      { label: 'MVP development', href: '/services/mvp-development' },
      { label: 'Staff augmentation', href: '/services/team-augmentation' },
      {
        label: 'Web3 technical auditing',
        href: '/services/web3-technical-auditing',
      },
      { label: 'All services', href: '/services' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About us', href: '/about-us' },
      { label: 'Team', href: '/team' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Get in touch', href: '/contact' },
    ],
  },
]

export default footerItems
