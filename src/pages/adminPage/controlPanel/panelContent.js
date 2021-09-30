export default function ControlPanelContent({ header, children }) {
  return (
    <div className="admin_control_content">
      <div className="admin_control_content_wrapper">
        <header className="admin_control_content_header">
          <h1 className="admin_header">{header}</h1>
        </header>
        <main className="admin_control_content_main">{children}</main>
      </div>
    </div>
  );
}
