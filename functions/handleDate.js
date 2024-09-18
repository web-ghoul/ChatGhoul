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
  const now = new Date();
  const isToday = format(now, "yyyy-MM-dd") === format(timestamp, "yyyy-MM-dd");
  const isYesterday =
    format(now.setDate(now.getDate() - 1), "yyyy-MM-dd") ===
    format(timestamp, "yyyy-MM-dd");

  if (isToday) {
    return format(timestamp, "HH:mm");
  } else if (isYesterday) {
    return "Yesterday";
  } else if (now.getTime() - timestamp.getTime() < 7 * 24 * 60 * 60 * 1000) {
    return format(timestamp, "EEEE");
  } else {
    return format(timestamp, "dd/MM/yyyy");
  }
};
