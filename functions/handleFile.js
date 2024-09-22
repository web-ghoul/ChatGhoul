export const handleFileSize = (fileSizeInBytes) => {
  if (fileSizeInBytes === 0) return "0 Bytes";
  const units = ["Bytes", "KB", "MB", "GB", "TB"];
  const k = 1024; // 1 KB = 1024 Bytes
  const i = Math.floor(Math.log(fileSizeInBytes) / Math.log(k));
  return (
    parseFloat((fileSizeInBytes / Math.pow(k, i)).toFixed(2)) + " " + units[i]
  );
};
