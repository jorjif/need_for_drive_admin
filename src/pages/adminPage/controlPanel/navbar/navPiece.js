import classNames from "classnames";

function NavElement({ svg, children, pressed }) {
  const elementClasses = classNames({
    admin_control_nav_element: !pressed,
    admin_control_nav_element_pressed: pressed,
  });
  const svgClasses = classNames({
    admin_control_nav_element_svg: !pressed,
    admin_control_nav_element_svg_pressed: pressed,
  });
  const textClasses = classNames({
    admin_control_nav_element_text: !pressed,
    admin_control_nav_element_text_pressed: pressed,
  });
  return (
    <li className={elementClasses}>
      <div className="admin_control_nav_element_content">
        <div className={svgClasses}>{svg}</div>
        <div className={textClasses}>{children}</div>
      </div>
    </li>
  );
}
export default NavElement;
