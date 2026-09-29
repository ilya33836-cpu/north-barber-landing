import { photoLqip, photoSrcSet, photoUrl, type Photo } from '../../lib/images'

type PhotoProps = {
  photo: Photo
  alt: string
  sizes: string
  priority?: boolean
  className?: string
  wrapperClassName?: string
  ratioClass?: string
  position?: string
}

export default function Photo({
  photo: p,
  alt,
  sizes,
  priority = false,
  className = 'h-full w-full object-cover',
  wrapperClassName = '',
  ratioClass,
  position,
}: PhotoProps) {
  const width = p.widths[0]
  const height = Math.round(width / p.ratio)

  return (
    <span
      className={`relative block overflow-hidden ${wrapperClassName}`}
      style={ratioClass ? undefined : { aspectRatio: `${p.ratio}` }}
    >
      {!priority ? (
        <img
          src={photoLqip(p)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-lg"
        />
      ) : null}

      <img
        src={photoUrl(p, width)}
        srcSet={photoSrcSet(p)}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={`relative h-full w-full ${className}`}
        style={position ? { objectPosition: position } : undefined}
      />
    </span>
  )
}
