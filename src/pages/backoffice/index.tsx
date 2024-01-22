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
    </Box>
    // </Layout>
  );
};

export default BackofficeApp;
