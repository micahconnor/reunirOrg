import { Link } from 'react-router-dom';

const Button = ({ children, href, to, className = '', ...props }) => {
  const baseStyles = 'relative inline-flex items-center justify-center gap-1.5 rounded-[30px] bg-white/10 px-8 py-3.5 text-center text-base font-normal leading-[107%] text-white shadow-[0_-4.25px_12px_0_rgba(255,255,255,0.10),inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_-1px_0_0_rgba(255,255,255,0.05)] transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 [text-shadow:0_0_12px_rgba(255,255,255,0.80)]';
  
  const combinedStyles = `${baseStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
