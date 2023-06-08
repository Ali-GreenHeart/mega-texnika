import { Container } from "@mui/system";
import PageContainer from "../../components/PageContainer";
import { Grid, Pagination, Paper, Stack, Typography } from "@mui/material";
import "../../index.css";

const news = [
  {
    img: "blogimg1.png",
    title: "Xəbərin adı",
    date: "12.04.2022",
  },
  {
    img: "blogimg2.png",
    title: "Xəbərin adı",
    date: "12.04.2022",
  },
  {
    img: "blogimg3.png",
    title: "Xəbərin adı",
    date: "12.04.2022",
  },
  {
    img: "blogimg4.png",
    title: "Xəbərin adı",
    date: "12.04.2022",
  },
  {
    img: "blogimg1.png",
    title: "Xəbərin adı",
    date: "12.04.2022",
  },
  {
    img: "blogimg2.png",
    title: "Xəbərin adı",
    date: "12.04.2022",
  },
  {
    img: "blogimg3.png",
    title: "Xəbərin adı",
    date: "12.04.2022",
  },
  {
    img: "blogimg4.png",
    title: "Xəbərin adı",
    date: "12.04.2022",
  },
];

const BlogPage = ({}) => {
  return (
    <PageContainer>
      <Container>
        <Grid container my={7} spacing={2}>
          <Grid item sx={{ marginTop: 10 }} xs={10} md={5}>
            <Typography component="h1" fontWeight="bold" variant="h3">
              Yeniliklər
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </Typography>
          </Grid>
          <Grid item xs={14} md={7}>
            <Paper sx={{ p: 1, height: "100%" }} elevation={5}>
              <img src="/smallbuldozer.png" alt="" />
            </Paper>
          </Grid>
        </Grid>
        <Grid
          my={8}
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            flexWrap: "wrap",
            "& img": {
              display: { xs: "none", sm: "inline" },
            },
          }}
        >
          {news.map(({ img, title, date }) => {
            return (
              <Grid
                sx={{ minWidth: 250 }}
                key={title}
                item
                xs={6}
                md={4}
                lg={3}
              >
                <Paper elevation={10}>
                  <img src={`/blog/${img}`} alt="" />
                  <Grid py={2} pl={3}>
                    <Typography pt={1} fontWeight="bold">
                      {title}
                    </Typography>
                    <Typography fontSize={14}>{date}</Typography>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Stack alignItems="center" py={3}>
          <Pagination count={4} shape="circular" size="small" />
        </Stack>
      </Container>
    </PageContainer>
  );
};

export default BlogPage;
