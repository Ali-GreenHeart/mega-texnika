import { Box, Container, Stack, Typography } from "@mui/material"
import { ReactComponent as MegaLogo } from "../../assets/logo.svg"
import { navlinks } from "../Header"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'rgba(255, 192, 31, 0.4)' }}>
                <Container>
                    <Stack py={{ xs: 2, sm: 3, md: 5 }} flexDirection="row" justifyContent="space-between" flexWrap="wrap">
                        <Box my={1} width={{ xs: '100%', md: 'fit-content' }}>
                            <MegaLogo />
                        </Box>
                        <Stack my={1}>
                            {
                                navlinks.map(({ title, to }) => {
                                    return <Typography
                                        key={to}
                                        href={to}
                                        component='a'>
                                        {title}
                                    </Typography>
                                })
                            }
                        </Stack>
                        <Stack my={1}>
                            <Typography>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
                            <Typography component="a" href="tel:+994(51) 123 45 67">+994(51) 123 45 67</Typography>
                            <Typography component="a" href="tel:+994(12) 123 45 67">+994(12) 123 45 67</Typography>
                            <Typography component="a" href="mailto:info@lmegatexnika.az">info@lmegatexnika.az</Typography>
                        </Stack>
                        <Stack my={1}>
                            <Typography> Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</Typography>
                            <Stack my={2} flexDirection="row" justifyContent={{ xs: 'space-around', sm: 'flex-start' }} gap={1}>
                                <a href="https://twitter.com">
                                    <TwitterIcon />
                                </a>
                                <a href="https://facebook.com">
                                    <FacebookIcon />
                                </a>
                                <a href="https://instagram.com">
                                    <InstagramIcon />
                                </a>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box >
        </>
    )
}
export default Footer
