import { forwardRef } from "react";

export const Input = forwardRef(({ value, onChange, ...rest }, ref) => {
  return (
    <div className="flex">
      <input
        ref={ref}
        type="text"
        className=""
        {...rest}
      />
    </div>
  );
});
