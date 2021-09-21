import { Redirect } from "react-router";
import PageLoading from "./componentLoad";
import "./statusHandler.scss";
/**
 *
 * @param {*} props {isFetching, isError, error, children} получает пропсы состояния
 * загрузки данных. Первые два пропа - булеаны.
 * @returns свитч-обертка между окном подгрузки, сообщением об ошибке и контентом страницы
 */
function StatusHandler({ isFetching, isError, error, children }) {
  if (isFetching) {
    return <PageLoading />;
  }
  if (isError) {
    return (
      <div className="page_error">
        {`Упс! Произошла ошибка 
      "${error.error}", вернитесь в начало!`}
        <Redirect to="/order/adress" />
      </div>
    );
  }
  return children;
}
export default StatusHandler;
