import { Box, Container, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ReactComponent as MegaLogo } from "../../assets/logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useNavigate } from "react-router";

const navlinks = [
    {
        to: "/",
        title: "Əsas səhifə"
    },
    {
        to: "/about",
        title: "Haqqımızda"
    },
    {
        to: "/texnikalar",
        title: "Texnikalar"
    },
    {
        to: "/icare",
        title: "İcarə şərtləri"
    },
    {
        to: "/blog",
        title: "Blog"
    },
    {
        to: "/contact",
        title: "Əlaqə"
    },
]

const languages = [
    'AZ', 'EN', 'RU'
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ backgroundColor: 'orange' }}>
                <Container>
                    <Stack py={1} flexDirection="row" justifyContent="space-between">
                        <Typography>+994(12) 123 45 67  |  Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
                        <Stack flexDirection="row" gap={1}>
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
                </Container>
            </Box>
            <Box sx={{ boxShadow: "0 2px 10px gray" }}>
                <Container sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
                    <MegaLogo />
                    <Stack justifyContent={{ xs: 'flex-end', md: 'center' }} flexDirection="row" flexGrow={1}>
                        <Box sx={{
                            display: { xs: 'block', md: 'none' },
                        }}>
                            <IconButton
                                size="large"
                                onClick={() => setMenuOpen(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            {
                                menuOpen && <Menu
                                    open={menuOpen}
                                    onClose={() => setMenuOpen(false)}
                                >
                                    {navlinks.map(({ title, to }) => (
                                        <MenuItem key={to} onClick={() => navigate(to)}>
                                            <Typography textAlign="center">{title}</Typography>
                                        </MenuItem>
                                    ))}
                                    {
                                        languages.map((lang) => {
                                            return (
                                                <MenuItem key={lang} onClick={() => { }}>
                                                    <Typography textAlign="center">{lang}</Typography>
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Menu>
                            }
                        </Box>
                        <Stack flexDirection="row" gap={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {
                                navlinks.map(({ title, to }) => {
                                    return (
                                        <a key={to} href={to}>
                                            {title}
                                        </a>
                                    )
                                })
                            }
                        </Stack >
                    </Stack>
                    <Stack sx={{ display: { xs: 'none', md: 'flex' } }} flexDirection="row" gap={1}>
                        {
                            languages.map((lang) => {
                                return (
                                    <Typography fontWeight="bold">{lang}</Typography>
                                )
                            })
                        }
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
export default Header
