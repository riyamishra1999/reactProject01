import Styles from "../styles/form.module.css";

const LoginForm = () => {
  return (
    <form className={Styles.form_container}>
      <h2 className={Styles.form_header}>Login Form</h2>
      <input
        type="email"
        placeholder="Enter email"
        required
        className={Styles.text_input}
      />
      <input
        type="password"
        placeholder="Enter password"
        required
        className={Styles.text_input}
      />
      <button type="submit" className={Styles.submit_button}>
        Login
      </button>
      <div className={Styles.check_btn}>
        <span>
          <input type="checkbox" />
          Remember me
        </span>
        <div>Forgot your password?</div>
      </div>
    </form>
  );
};

export default LoginForm;
