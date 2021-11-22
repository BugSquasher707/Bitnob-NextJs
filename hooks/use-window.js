const { useState, useEffect } = require("react");
import { isBrowser } from '../utils/index'

/** Allows for a reactive update of UI */
const useWindow = () => {
  const [obj, setObj] = useState({});

  useEffect(() => {
    setObj(isBrowser());
  }, []);

  return { ...obj };
};

export default useWindow;
