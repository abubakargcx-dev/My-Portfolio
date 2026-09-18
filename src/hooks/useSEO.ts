import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteUrl } from '../data/personal'

interface SEOProps {
  title: string
  description: string
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export function useSEO({ title, description }: SEOProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = `${title} | AbuBakar Ghafoor`
    const url = `${siteUrl}${pathname}`

    document.title = fullTitle
    setMeta('name', 'description', description)
    setCanonical(url)

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', 'website')

    setMeta('property', 'og:image', `${siteUrl}/og-image.png`)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', `${siteUrl}/og-image.png`)
  }, [title, description, pathname])
}
