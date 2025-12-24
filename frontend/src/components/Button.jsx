function Button({ variant = 'primary', children, className = '', ...props }) {
  const base = 'btn';
  const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';
  const classes = `${base} ${variantClass} ${className}`.trim();

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
