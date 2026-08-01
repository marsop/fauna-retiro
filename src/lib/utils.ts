import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAssetUrl(url: string | undefined | null): string | undefined {
  if (!url) return undefined
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url
  }

  const baseUrl = import.meta.env.BASE_URL
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url

  // baseUrl already includes a trailing slash (e.g. '/' or './')
  return `${baseUrl}${cleanUrl}`
}
