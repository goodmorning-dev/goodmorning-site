'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Input from '@/components/Input'
import ReadMoreLink from '@/components/ReadMoreLink'

interface JobApplyFormProps {
  jobTitle: string
}

export default function JobApplyForm({ jobTitle }: JobApplyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = () => setIsSubmitting(true)

  return (
    <section id="apply" className="bg-black px-5 py-24 lg:px-0 lg:py-36">
      <div className="mx-auto grid max-w-8xl items-center gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <h2 className="header-2 leading-tight">
            Upload <span className="text-primary">CV</span>
          </h2>
          <p className="paragraph text-white/70 lg:text-[20px]">
            Excited about this role? Tell us more about yourself. We review every
            application carefully.
          </p>
          <form
            id="upload"
            encType="multipart/form-data"
            action="https://formsend.xyz/submit-form/gm@goodmorning.dev"
            method="POST"
            onSubmit={handleSubmit}
            className="w-full space-y-10"
          >
            <Input
              name="job-applied"
              label="Position"
              type="text"
              required
              value={jobTitle}
              onChange={() => {}}
            />
            <Input
              name="name"
              label="Your name"
              type="text"
              required
              placeholder="Enter your name"
            />
            <Input
              name="email"
              label="Your email"
              type="email"
              required
              placeholder="Enter your email"
            />
            <Input name="cv" label="Upload CV" type="upload" required />
            <Input
              name="message"
              label="Do you want to share something else with us?"
              type="textarea"
            />
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
              <Button>{isSubmitting ? 'Submitting...' : 'Apply Now'}</Button>
              <ReadMoreLink
                href="/careers"
                label="CHECK OTHER POSITIONS"
                className="ml-6 tracking-[2.3px] !text-primary hover:!text-white"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/single-job-cv.png"
            alt="Upload CV image"
            width={570}
            height={400}
            className="max-w-full rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export function ScrollButton() {
  return (
    <Button
      className="mt-6"
      variant="primary"
      onClick={() => {
        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      APPLY NOW
    </Button>
  )
}
