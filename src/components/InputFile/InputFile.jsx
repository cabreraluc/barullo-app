import { TextField } from "@mui/material";

const InputFile = ({
  autoComplete,
  required,
  id,
  autoFocus,
  name,
  variant,
  fullWidth,
  onChange,
  error,
  type,
  accept,
  label,
}) => {
  return (
    <div className="flex flex-col w-full h-full bg-[green]">
      <span className="text-[red] text-[2rem] bg-[red]">{label}</span>
      <TextField
        autoComplete={autoComplete}
        required={required}
        id={id}
        autoFocus={autoFocus}
        name={name}
        variant={variant}
        fullWidth={fullWidth}
        onChange={onChange}
        error={error}
        type={type}
        accept={accept}
      />
    </div>
  );
};

export default InputFile;
