import '../../styles/button.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  className = '',
  ...rest
}) {
  const classes = ['button', `button--${variant}`, `button--${size}`, className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  )
}
