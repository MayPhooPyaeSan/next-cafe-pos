import { GiCoffeeMug } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";
import { LuCroissant } from "react-icons/lu";
import { BsQrCodeScan } from "react-icons/bs";
import { FaKitchenSet } from "react-icons/fa6";
import { Button } from "@mui/material";
import Link from "next/link";

const LandingService = () => {
  return (
    <>
      <h1 className="h1">Our Services</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
          flexWrap: "wrap",
          marginTop: "5%",
          background: "#1F1F1F",
          padding: "40px",
        }}
      >
        <div
          className="service-card"
          style={{
            padding: "40px 40px",
            width: "80px",
            height: "80px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <GiCoffeeMug fontSize={50} color="white" />
          <p
            style={{
              color: "white",
              fontFamily: "Poppins",
              letterSpacing: "1px",
            }}
          >
            Coffee
          </p>
        </div>
        <div
          className="service-card"
          style={{
            padding: "40px 40px",
            width: "80px",
            height: "80px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <BiCoffeeTogo fontSize={50} color="white" />
          <p
            style={{
              color: "white",
              fontFamily: "Poppins",
              letterSpacing: "1px",
            }}
          >
            Take out
          </p>
        </div>
        <div
          className="service-card"
          style={{
            padding: "40px 40px",
            width: "80px",
            height: "80px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <LuCroissant fontSize={50} color="white" />
          <p
            style={{
              color: "white",
              fontFamily: "Poppins",
              letterSpacing: "1px",
            }}
          >
            Croissant
          </p>
        </div>
        <div
          className="service-card"
          style={{
            padding: "40px 40px",
            width: "80px",
            height: "80px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <BsQrCodeScan fontSize={50} color="white" />
          <p
            style={{
              color: "white",
              fontFamily: "Poppins",
              letterSpacing: "1px",
            }}
          >
            QR code
          </p>
        </div>
        <div
          className="service-card"
          style={{
            padding: "40px 40px",
            width: "80px",
            height: "80px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <FaKitchenSet fontSize={50} color="white" />
          <Link href={"/backoffice"} style={{ textDecoration: "none" }}>
            <p
              style={{
                color: "white",
                fontFamily: "Poppins",
                letterSpacing: "1px",
              }}
            >
              backoffice
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingService;
