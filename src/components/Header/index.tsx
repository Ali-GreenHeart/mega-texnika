import { Box, Container, Stack, Typography } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
    return (
        <Box sx={{ backgroundColor: 'orange' }}>
            <Container maxWidth="lg" >
                <Stack py={1} flexDirection="row" justifyContent="space-between">
                    <Typography>+994(12) 123 45 67  |  Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
                    <Stack flexDirection="row" gap={1}>
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
export default Header
