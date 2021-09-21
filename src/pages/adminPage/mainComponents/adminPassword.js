function AdminPassword({ children, isError, error }) {
  return (
    <div className="admin-input_container">
      <label className="admin-input_label">{children}</label>
      <input type="password" className="admin-input_textfield" />
      <div className="admin-input_error">{isError ? error : null}</div>
    </div>
  );
}

export default AdminPassword;
