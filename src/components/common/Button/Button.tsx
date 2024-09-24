import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  buttonStyle?: 'primaryColor' | 'black';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  buttonStyle = 'primaryColor',
}) => {

  // Determina la clase de variante basada en la prop variant
  const buttonStyleClass = buttonStyle === 'primaryColor' ? styles['button--primaryColor'] : styles['button--black'];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${buttonStyleClass} ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};


export default Button;
