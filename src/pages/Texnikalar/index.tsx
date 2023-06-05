import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PageContainer from "../../components/PageContainer";

const texnikalar = [
  {
    id: 0,
    img: "ekskavator.png",
    title: "Ekskavator",
    year: "2022",
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 1,
    img: "yukleyici.png",
    title: "Ekskavator yukleyici",
    year: "2022",
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 2,
    img: "avtokran.png",
    title: "Avtokran",
    year: "2022",
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 3,
    img: "forklift.png",
    title: "Forkliftlər",
    year: "2022",
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 4,
    img: "ekskavator.png",
    title: "Ekskavator",
    year: "2022",
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 5,
    img: "yukleyici.png",
    title: "Ekskavator yukleyici",
    year: "2022",
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 6,
    img: "avtokran.png",
    title: "Avtokran",
    year: "2022",
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 7,
    img: "forklift.png",
    title: "Forkliftlər",
    year: "2022",
    priceForMonth: 1000,
    priceForDay: 100,
  },
];

const Texnikalar = () => {
  return (
    <PageContainer>
      <Container sx={{ p: "20px 0" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            py: 2,
            color: "#596C72",
          }}
          component="h1"
          variant="h4"
        >
          Texnikalar
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
            flexWrap: "wrap",
            px: 2,
            "& img": {
              display: { xs: "none", sm: "inline" },
            },
          }}
        >
          {texnikalar.map(
            ({ img, title, year, priceForMonth, priceForDay, id }) => {
              return (
                <Grid sx={{ minWidth: 250 }} key={id} item xs={6} md={4} lg={3}>
                  <Paper elevation={5}>
                    <img src={`/texnikalar/${img}`} alt={title} />
                    <Stack px={2} py={1}>
                      <Typography
                        sx={{ color: "#596C72" }}
                        component="h3"
                        fontWeight="bold"
                      >
                        Məhsulun adı
                      </Typography>
                      <Typography sx={{ color: "#686868" }} component="h4">
                        {title}
                      </Typography>
                      <Typography sx={{ color: "#B0ADAD" }} component="h4">
                        {year}
                      </Typography>
                    </Stack>
                    <Stack px={2} alignItems="flex-end">
                      <Typography
                        sx={{ color: "#FFC01F", fontWeight: "bold" }}
                        component="h2"
                      >
                        {priceForMonth} azn/ay <br />
                        {priceForDay} azn/gun
                      </Typography>
                    </Stack>
                    <Box px={3} py={2} textAlign="center">
                      <Button fullWidth>İcarə et</Button>
                    </Box>
                  </Paper>
                </Grid>
              );
            }
          )}
        </Grid>
        <Stack alignItems="center" py={3}>
          <Pagination count={4} shape="circular" size="small" />
        </Stack>
      </Container>
    </PageContainer>
  );
};

export default Texnikalar;
