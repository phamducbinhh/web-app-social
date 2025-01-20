import { Input } from "@/sections/auth/components";
import { Controller, useFormContext } from "react-hook-form";
import { Typography } from "../typography";

export const FormField = ({
  name,
  type,
  placeholder,
}: {
  name: string;
  type: string;
  placeholder: string;
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Input {...field} type={type} placeholder={placeholder} />
          {error && (
            <Typography level="captionr" className="text-red-500">
              {error.message}
            </Typography>
          )}
        </div>
      )}
    />
  );
};
