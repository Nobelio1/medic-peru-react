import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const MyDatePicker = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      dateFormat="dd/MM/yyyy"
      className="focus:outline-none"
      selected={value}
      onChange={(date) => setValue(date)}
    />
  );
};
