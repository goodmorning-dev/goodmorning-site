import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export default function TermsPage() {
  const filePath = path.join(process.cwd(), 'src/app/terms/terms.md')
  const content = fs.readFileSync(filePath, 'utf8')

  return (
    <main>
      {/* Hero section */}
      <section
        className="relative pb-64 pt-24 lg:pt-48"
        style={{
          backgroundImage: "url('/images/team-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-8xl text-center lg:text-left">
          <h1 className="header-1 mb-8">Terms of Services</h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* Markdown content */}
      <section className="prose prose-invert mx-auto max-w-8xl px-4 pb-16">
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
    </main>
  )
}
