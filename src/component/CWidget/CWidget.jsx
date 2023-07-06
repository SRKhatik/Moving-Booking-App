import { CWidgetStatsC } from "@coreui/react";
import { WidgetContext } from "../../pages/Admin/Admin";
import { useContext } from "react";

const CWidget = ({ value, icon, title, text, id }) => {
  const { onWidgetClick, show } = useContext(WidgetContext);
  return(
  <CWidgetStatsC
    onClick={() => onWidgetClick(id)}
    style={{ cursor: "pointer" }}
    color={show[id] ? "success" : "danger"}
    progress={{ value }}
    icon={icon}
    text={text}
    value={value}
    title={title}
    inverse={true}
  />
  )
}
export default CWidget;
