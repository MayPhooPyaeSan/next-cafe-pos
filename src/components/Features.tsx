import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Menus as Menu } from "@prisma/client";

const Features = () => {
  return (
    <>
      <h1 className="h1">Recommended Menus</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "5%",
        }}
      >
        <Card sx={{ width: 260, height: 280, pb: 2 }} className="menu-card">
          <CardMedia
            sx={{ height: "80%", backgroundSize: "cover", width: "100%" }}
            image={
              "https://i.pinimg.com/564x/46/a2/6e/46a26e226fb6faec07cd018bc13b759c.jpg"
            }
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center", mb: 0 }}
            >
              Ice Coffee
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <PaidIcon color="success" /> */}
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: 260, height: 280, pb: 2 }} className="menu-card">
          <CardMedia
            sx={{ height: "80%", backgroundSize: "cover", width: "100%" }}
            image={
              "https://i.pinimg.com/564x/41/45/eb/4145eb4fe61ff37397a6cbf64f39ab46.jpg"
            }
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center", mb: 0 }}
            >
              Salt Bread
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <PaidIcon color="success" /> */}
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: 260, height: 280, pb: 2 }} className="menu-card">
          <CardMedia
            sx={{ height: "80%", backgroundSize: "cover", width: "100%" }}
            image={
              "https://i.pinimg.com/564x/8e/1a/82/8e1a8250496edeb71da4aa7e78e6518f.jpg"
            }
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center", mb: 0 }}
            >
              Oreo Ice-cream
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <PaidIcon color="success" /> */}
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: 260, height: 280, pb: 2 }} className="menu-card">
          <CardMedia
            sx={{ height: "80%", backgroundSize: "cover", width: "100%" }}
            image={
              "https://i.pinimg.com/564x/d2/a4/3f/d2a43f023606ea497d572ecf3ace07cb.jpg"
            }
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center", mb: 0 }}
            >
              Strawberry Soda
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <PaidIcon color="success" /> */}
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: 260, height: 280, pb: 2 }} className="menu-card">
          <CardMedia
            sx={{
              backgroundSize: "cover",
              width: "100%",
              height: "80%",
            }}
            image={
              "https://i.pinimg.com/564x/8a/41/b5/8a41b56da6d63b1de8fc4d18640d41be.jpg"
            }
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center", mb: 0 }}
            >
              Red Velvet Cake
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <PaidIcon color="success" /> */}
            </Box>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Features;
