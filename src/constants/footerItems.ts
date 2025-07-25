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
      { label: 'Technical co-founder', href: '/services/web3-co-founder' },
      { label: 'Web3 consulting', href: '/services/web3-consulting' },
      { label: 'MVP development', href: '/services/web3-mvp-development' },
      { label: 'Staff augmentation', href: '/services/staff-augmentation' },
      {
        label: 'Web3 technical auditing',
        href: '/services/web3-auditing',
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
