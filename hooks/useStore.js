import * as SecureStore from "expo-secure-store";

const useStore = () => {
  const handleStoreDate = async (key, value) => {
    console.log(key, value);
    await SecureStore.setItemAsync(key, value);
  };

  const handleGetData = async (key) => {
    const data = await SecureStore.getItemAsync(key);
    return data;
  };

  return { handleStoreDate, handleGetData };
};

export default useStore;
