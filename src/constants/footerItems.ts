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
      { label: 'Tech co-founder', href: '#' },
      { label: 'Web3 consulting', href: '#' },
      { label: 'MVP development', href: '#' },
      { label: 'Staff augmentation', href: '#' },
      { label: 'Web3 technical auditing', href: '#' },
      { label: 'All services', href: '#' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About us', href: '#' },
      { label: 'Team', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Get in touch', href: '#' },
    ],
  },
]

export default footerItems
