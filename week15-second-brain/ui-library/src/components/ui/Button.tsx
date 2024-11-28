interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  );
};

<Button
  variant="primary"
  size="md"
  text="Register"
  startIcon={"+"}
  endIcon={"-"}
  onClick={() => {}}
/>;

export default Button;
