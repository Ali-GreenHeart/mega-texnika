import { Container, Stack, Typography, Box, Button, TextField } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PageContainer from "../../components/PageContainer";


const Elaqe = () => {
    return (
        <>
            <PageContainer>
                <Box py={5}>
                    <Container>
                        <Stack flexDirection={'row'} justifyContent={{ lg: 'space-between', xs: 'center' }} alignItems={'center'} flexWrap={'wrap'} gap={10}>
                            <Box width="100%" maxWidth={'500px'}>
                                <Typography fontWeight={'500'} color={'#596C72'} component={'h3'} variant="h4">Bizə yazın!</Typography>
                                <Stack flexDirection={{ xs: 'column', sm: 'row' }} py={2} gap={2}>
                                    <TextField type="text" label="Ad ,Soyad" />
                                    <TextField type="email" label="e-mail" />
                                </Stack>
                                <Stack flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
                                    <TextField type="text" label="Sirketin adi" />
                                    <TextField type="number" label="Telefon" />
                                </Stack>

                                <Box my={2}>
                                    <Box my={2}>
                                        <textarea rows={4} required placeholder="Mesaj" ></textarea>
                                    </Box>
                                    <Button fullWidth sx={{
                                        backgroundColor: '#FFC01F'
                                    }} variant="contained">Gonder</Button>
                                </Box>
                            </Box>

                            <Box sx={{
                                boxShadow: '0px 0px 2px',
                                borderRadius: '5px',
                            }}>
                                <Stack p={2} height={'320px'} color={'#69768B'} mb={{ xs: '50px' }} >
                                    <Box my={4}  >
                                        <Typography component={'h5'} variant="h5" textAlign={'center'}>Elaqe</Typography>
                                    </Box >
                                    <Typography>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
                                    <Stack flexDirection={'row'} gap={2} py={1}>
                                        <Typography>+994(51) 123 45 67</Typography><Typography>+994(12) 123 45 67</Typography>
                                    </Stack>
                                    <Typography>info@megatexnika.az</Typography>
                                    <Box my={3} >
                                        <Typography>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</Typography>
                                        <Stack flexDirection={'row'} gap={2} color={'black'} py={1}>
                                            <TwitterIcon />
                                            <InstagramIcon />
                                            <FacebookIcon />
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Container>
                </Box>
            </PageContainer>

        </>
    )
}
export default Elaqe
