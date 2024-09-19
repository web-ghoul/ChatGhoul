import { format } from "date-fns";

export const handleMessageTime = (dateObj) => {
  if (!dateObj) {
    return "";
  }

  let timestamp;
  if (typeof dateObj === "string") {
    timestamp = new Date(dateObj);
  } else if (dateObj.seconds && dateObj.nanoseconds) {
    timestamp = new Date(
      dateObj.seconds * 1000 + dateObj.nanoseconds / 1000000
    );
  } else {
    return "";
  }

  return format(timestamp, "h:mm a");
};