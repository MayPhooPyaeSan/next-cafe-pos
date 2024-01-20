import { useAppDispatch } from "@/store/hook";
import { fetchAppData } from "@/store/slices/appSlice";
import { Box, Button } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BackofficeApp = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!data && status !== "loading") {
      router.push("auth/signin");
    }
  }, [data, router]);

  return (
    // <Layout>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: 200,
        margin: "0 auto",
        mt: 3,
      }}
    >
      welcome to back office
      <Button
        color="inherit"
        sx={{
          background: "#040303",
          marginRight: "10px",
          borderRadius: "10px",
          p: "10px",
          "&:hover": {
            backgroundColor: "#161616",
          },
        }}
        onClick={() => signOut({ callbackUrl: "/auth/signin" })}
      >
        Sign out
      </Button>
    </Box>
    // </Layout>
  );
};

export default BackofficeApp;
