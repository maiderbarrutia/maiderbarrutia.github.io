import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  variant?: 'green' | 'black';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  variant = 'green',
}) => {
  const variantClass = variant === 'green' ? styles['button--green'] : styles['button--black'];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${variantClass} ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};


export default Button;
