import AdminButton from "../mainComponents/adminButton";
import AdminPassword from "../mainComponents/adminPassword";
import PaperCard from "../mainComponents/card";
import AdminBackground from "../mainComponents/pageBackground";
import AdminInput from "../mainComponents/textInput";
import "../mainComponents/adminTypography.scss";
import "./login.scss";

function Login() {
  return (
    <AdminBackground>
      <div className="admin_login_page">
        <PaperCard>
          <h2 className="admin_h2 admin_login_header">Вход</h2>
          <AdminInput className>Почта</AdminInput>
          <AdminPassword>Пароль</AdminPassword>
          <div className="admin_login_buttons">
            <div className="admin_a">Запросить доступ</div>
            <AdminButton>Войти</AdminButton>
          </div>
        </PaperCard>
      </div>
    </AdminBackground>
  );
}
export default Login;
