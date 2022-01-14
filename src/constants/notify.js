import "antd/dist/antd.css";
import { message } from "antd";

export const notify = (type, msg) => {
  if (type === "success") {
      console.log("ae")
       message.success(msg);
  } else if (type === "error") {
        message.error(msg);
  } else if (type === "warning") {
    message.warning(msg);
  }
}