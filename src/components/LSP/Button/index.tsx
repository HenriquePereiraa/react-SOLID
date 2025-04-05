import { InputHTMLAttributes } from "react";

// Nesse caso posso fazer varias variantes que são base do Input sem modificar o comportamento do
// componente principal

//Nesse caso a utilização do padrão de composition ajuda aa plicar os conceitos de LSP

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ name, type = "text", ...rest }: InputProps) => {
  return (
    <>
      <input type={type} name={name} {...rest} />
    </>
  );
};

type InputWithLabelProps = InputProps & {
  label: string;
};

export const InputWithLabel = ({
  label,
  id = "id",
  ...rest
}: InputWithLabelProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Input {...rest} />
    </>
  );
};
