import { useFormik } from "formik"
import { Button, Grid } from "@mui/material"
import { contactHomeValidation } from "../../validation/contactHome"
import FormikTextField from "../FormikTextField"
import axios from "axios"

const HomeContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '', surname: '', email: '', phone: '',
        },
        validationSchema: contactHomeValidation,
        onSubmit: (values) => {
            axios.post("http://localhost:5000/contact", values).then(() => {
                alert('tesekkurler, sizinle elaqe saxlayacagiq')
            })
        }
    })


    return (
        <>
            <Grid mb={1} mt={3} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <FormikTextField
                        label="Ad"
                        name="name"
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormikTextField
                        label="Soyad"
                        name="surname"
                        formik={formik}
                    />
                </Grid>
            </Grid>

            <Grid mb={1} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <FormikTextField
                        label="E-mail"
                        name="email"
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormikTextField
                        label="Telefon"
                        name="phone"
                        formik={formik}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} mb={2}>
                <Button fullWidth onClick={formik.handleSubmit}>Göndər</Button>
            </Grid>
        </>
    )
}
export default HomeContactForm
