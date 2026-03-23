export interface IInputGridProps {
  children: React.ReactNode;
  className?: string;
}

export const InputGrid = ({ children, className = "" }: IInputGridProps) => {
  return (
    <>
      <div className={`w-3/4 ${className}`}>{children}</div>
    </>
  );
};

export interface ILabelComponentProps {
  htmlfor: string;
  label: string;
  classname?: string | null;
}

export const LabelComponent = ({
  htmlfor,
  label,
  classname = "",
}: ILabelComponentProps) => {
  return (
    <>
      <label htmlFor={htmlfor} className={`${classname}`}>
        {label}:
      </label>
    </>
  );
};

export interface ILabelGridProps {
  children: React.ReactNode;
  className?: string;
}
export const LabelGrid = ({ children, className = "" }: ILabelGridProps) => {
  return <div className={`w-1/4 ${className}`}>{children}</div>;
};
