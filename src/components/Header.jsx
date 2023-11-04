import Styles from "../styles/header.module.css";
export default function Header() {
  const NAV_ITEMS = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
    {
      title: "Blog",
      link: "#",
    },
  ];
  return (
    <div className={Styles.navbar_wrapper}>
      <div>
        <img
          src="/Logo.svg"
          height={"100%"}
          width={"100%"}
          alt="educraft-logo"
        />
      </div>
      <div className={Styles.navItems_wrapper}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>
      <button className={Styles.signup_btn}>Sign up</button>
    </div>
  );
}
