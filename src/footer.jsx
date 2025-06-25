const Footer = () => (
  <footer
    style={{
      display: "flex",
      justifyContent: "space-around",
      background: "#222",
      color: "green",
      textAlign: "center",
      padding: "1.5rem 0",
      marginTop: "2rem",
    }}
  >
    <p>
      &copy; {new Date().getFullYear()} Foodies Delight. All rights reserved.
    </p>
    <p>
      Follow us:
      <a href="https://facebook.com" style={{ color: "#fff", margin: "0 8px" }}>
        Facebook
      </a>
      |
      <a
        href="https://instagram.com"
        style={{ color: "#fff", margin: "0 8px" }}
      >
        Instagram
      </a>
      |
      <a href="https://twitter.com" style={{ color: "#fff", margin: "0 8px" }}>
        Twitter
      </a>
    </p>
    <p>92309-4530527</p>
  </footer>
);

export default Footer;
