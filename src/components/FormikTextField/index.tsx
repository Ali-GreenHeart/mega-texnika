import { TextField } from "@mui/material"

interface Props {
    label: string;
    name: string;
    formik: any;
}
const FormikTextField = ({ label, name, formik }: Props) => {
    return (
        <TextField
            fullWidth
            label={label}
            onChange={formik.handleChange}
            value={formik.values[name]}
            name={name}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
        />
    )
}
export default FormikTextField
