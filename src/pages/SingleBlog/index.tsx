import { Container, Grid, Typography, Paper } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { useParams } from "react-router";


const SingleBlog = () => {
    const { id } = useParams()
    return (
        <PageContainer>
            <Container>
                <Grid color="#596C72" container my={8} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography my={3} fontWeight="bold" component="h1" variant="h3">Xəbərin adı No: {id}</Typography>
                        <Typography fontSize="14px" lineHeight="21px"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                        </Typography>
                        <Typography fontSize="14px" lineHeight="21px" my={3}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Typography>
                    </Grid>
                    <Grid my={6} item xs={12} md={6}>
                        <Paper sx={{ p: 1, pb: 0 }} elevation={10}>
                            <img src="/blog/blogimg2.png" alt="" />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </PageContainer>
    )
}

export default SingleBlog;
