const { createContext, useContext,useState   } = require("react");

const DataContext = createContext();

const Store = ({children}) => {
    const [cart , setCart] = useState([{title : "Air Jordan"}])
    
    return (
        <DataContext.Provider value={{cart ,setCart}}>
            {children}
        </DataContext.Provider>
    )
}

export default Store;

export const useDataContext = () => useContext(DataContext)

