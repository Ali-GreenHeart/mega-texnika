import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material"
import PageContainer from "../../components/PageContainer"

const HomePage = ({ }) => {
    return (
        <PageContainer>
            <Container>
                <Grid container my={7}>
                    <Grid item xs={12} md={6}>
                        <Typography component="h1" fontWeight="bold" variant="h3">Ağır texnikanızı bizdən satın alın</Typography>
                        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Typography>
                        <Button>ətraflı</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 1, height: '100%' }} elevation={5}>
                            <img src="/buldozer.png" alt="" />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </PageContainer >
    )
}
export default HomePage
