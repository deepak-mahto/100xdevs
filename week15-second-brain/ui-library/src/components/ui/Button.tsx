type Variants = "primary" | "secondry";

interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondry: "bg-purple-300 text-purple-600",
};

const sizeStyles = {
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
};

const defaultStyles = "rounded-md flex gap-3";

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        className={`${variantStyles[props.variant]} ${defaultStyles} ${
          sizeStyles[props.size]
        }`}
      >
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
        {props.text}
      </button>
    </div>
  );
};

export default Button;
