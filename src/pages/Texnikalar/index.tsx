import {
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
    title: "Məhsulun adı",
    img: "ekskavator.png",
    type: "Ekskavator",
    year: "2022",
    priceForMonth: "1000 AZN/ay",
    priceForDay: "100 AZN/gün",
  },
  {
    id: 1,
    title: "Məhsulun adı",
    img: "yukleyici.png",
    type: "Ekskavator yukleyici",
    year: "2022",
    priceForMonth: "1000 AZN/ay",
    priceForDay: "100 AZN/gün",
  },
  {
    id: 2,
    title: "Məhsulun adı",
    img: "avtokran.png",
    type: "Avtokran",
    year: "2022",
    priceForMonth: "1000 AZN/ay",
    priceForDay: "100 AZN/gün",
  },
  {
    id: 3,
    title: "Məhsulun adı",
    img: "forklift.png",
    type: "Forkliftlər",
    year: "2022",
    priceForMonth: "1000 AZN/ay",
    priceForDay: "100 AZN/gün",
  },
  {
    id: 4,
    title: "Məhsulun adı",
    img: "ekskavator.png",
    type: "Ekskavator",
    year: "2022",
    priceForMonth: "1000 AZN/ay",
    priceForDay: "100 AZN/gün",
  },
  {
    id: 5,
    title: "Məhsulun adı",
    img: "yukleyici.png",
    type: "Ekskavator yukleyici",
    year: "2022",
    priceForMonth: "1000 AZN/ay",
    priceForDay: "100 AZN/gün",
  },
  {
    id: 6,
    title: "Məhsulun adı",
    img: "avtokran.png",
    type: "Avtokran",
    year: "2022",
    priceForMonth: "1000 AZN/ay",
    priceForDay: "100 AZN/gün",
  },
  {
    id: 7,
    title: "Məhsulun adı",
    img: "forklift.png",
    type: "Forkliftlər",
    year: "2022",
    priceForMonth: "1000 AZN/ay",
    priceForDay: "100 AZN/gün",
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
            "& img": {
              display: { xs: "none", sm: "inline" },
            },
          }}
        >
          {texnikalar.map(
            ({ img, title, type, year, priceForMonth, priceForDay, id }) => {
              return (
                <Grid key={id} item xs={6} md={4} lg={3}>
                  <Paper elevation={5}>
                    <img src={`/texnikalar/${img}`} alt={type} />
                    <Stack p="2px 0 2px 20px">
                      <Typography
                        sx={{ color: "#596C72" }}
                        component="h3"
                        fontWeight="bold"
                      >
                        {title}
                      </Typography>
                      <Typography sx={{ color: "#686868" }} component="h4">
                        {type}
                      </Typography>
                      <Typography sx={{ color: "#B0ADAD" }} component="h4">
                        {year}
                      </Typography>
                    </Stack>
                    <Stack p="2px 20px 2px 0" alignItems="flex-end">
                      <Typography
                        sx={{ color: "#FFC01F", fontWeight: "bold" }}
                        component="h2"
                      >
                        {priceForMonth}
                      </Typography>
                      <Typography
                        sx={{ color: "#FFC01F", fontWeight: "bold" }}
                        component="h2"
                      >
                        {priceForDay}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Button sx={{ margin: 3 }}>İcarə et</Button>
                    </Stack>
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
