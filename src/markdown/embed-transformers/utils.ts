import { IframeHTMLAttributes } from "react"

interface IframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  name: string
  ratio?: string
}

export const isHostIncludes = (domain: string, host: string) => {
  return [domain, `www.${domain}`].includes(host)
}

export const includesSomeOfArray = (string: string, array: string[]) =>
  array.some((item) => string.includes(item))

export const generateIframeHTML = ({
  name,
  src,
  height,
  width,
  ratio,
  style,
  ...attributes
}: IframeProps) => {
  const iframeAttributes = Object.entries(attributes)
    .map(([key, value]) => {
      if (key === "allowFullScreen") return key.toLowerCase()
      return `${key.toLowerCase()}="${value}"`
    })
    .join(" ")

  return `<div class="xlog-post-content-${name} relative my-4 mx-auto" style="${
    ratio ? `aspect-ratio: ${ratio};` : `width: ${width}; height: ${height};`
  }">
  <iframe class="absolute left-0 top-0 w-full h-full" src="${src}" border="0" ${iframeAttributes}></iframe>
</div>`
}
