import React from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default function Newsletter({ email, setEmail, handleSubmit }: any) {
  return (
    <div
      className="rounded-2xl bg-gray p-6"
      style={{
        clipPath:
          'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
        WebkitClipPath:
          'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
      }}
    >
      <h3 className="header-3 mb-3 lg:text-[32px]">Subscribe to newsletter</h3>
      <p className="paragraph mb-10 text-white/80 lg:text-[18px]">
        Subscribe to receive the latest blog posts to your inbox every week.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email address"
          name="email"
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="mt-6">Subscribe</Button>
      </form>
      <p className="paragraph mt-5 !text-[16px] italic text-white/50">
        By subscribing you agree to our
        <br />
        <a href="#" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  )
}
