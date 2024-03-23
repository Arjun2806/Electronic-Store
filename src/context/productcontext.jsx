import { useEffect } from "react";
import { createContext, useContext,} from "react";
import { productsData } from "../components/productsData"; // Change import to named import

const AppContext = createContext();

const DATA = productsData;

const AppProvider = ({ children }) => {
//   const [data, setData] = useState([]);

const getProducts = async ()=>{

}

  useEffect(() => {
    
    getProducts();
    // setData(DATA);
    // console.log(setData(DATA))
  }, []);

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
