import { ProductApi } from "./components/products/ProductApi"


function App() {
    const api = <ProductApi />
    return  <>
        <div>
            <pre>{api}</pre>
        </div>
    </>
}

export default App