'use client'
// import { useCookieConsentContext } from '@/context/CookieConstent'
import GTMScript from './Script'
import GTMInline from './Inline'

function GTM() {
  // Temporary until we add a cookie consent modal
  const { didConsent } = {
    didConsent: true
  }

  if (!didConsent) return null

  return (
    <>
      <GTMScript />
      <GTMInline />
    </>
  )
}

export default GTM
