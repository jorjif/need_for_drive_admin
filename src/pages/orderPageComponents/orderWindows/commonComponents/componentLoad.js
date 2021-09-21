/**
 *
 * @returns анимированный спинер загрузки
 */
function PageLoading() {
  return (
    <div className="loading_page">
      <div className="loading_page_lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default PageLoading;
