const ContactUs = () => {
  return (
    <div style={{ background: "#1F1F1F" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "5%",
          color: "white",
        }}
      >
        <div>
          <h3 style={{ fontSize: "1.8rem" }}>LOCATION</h3>
          <p style={{ fontSize: "1.5rem" }}>31 street</p>
          <p style={{ fontSize: "1.5rem" }}>Chan Aye Thar Zan, Mandalay</p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.8rem" }}>CONTACT</h3>
          <p style={{ fontSize: "1.5rem" }}>09-965158633</p>
          <p style={{ fontSize: "1.5rem" }}>cappuccinoanytime@gmail.com</p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.8rem" }}>HOURS</h3>
          <p style={{ fontSize: "1.5rem" }}>Mon-Fri: 7am - 5pm</p>
          <p style={{ fontSize: "1.5rem" }}>Special Sunday Day: 9am - 4pm</p>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: "5%",
          color: "white",
          marginBottom: "0px",
        }}
      >
        © 2023 Cappuccino-Anytime Cafe.All Rights Reserved.
      </p>
    </div>
  );
};

export default ContactUs;
