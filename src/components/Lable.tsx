interface ILabelProps {
  htmlFor: string;
  children: string;
}

export default function Lable({ htmlFor, children }: ILabelProps) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
