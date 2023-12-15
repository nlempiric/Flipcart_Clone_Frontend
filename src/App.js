import './App.css';
import AllRoouter from './Routes/AllRoouter';
import Layout from './Layout';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { categoryReducer } from './Redux/reducers/category';

function App() {
  const dispatch = useDispatch();
  const {categoryData}=useSelector((state)=>state.root.categorydata)

  useEffect(() => {
    const getCategory=async()=>
    {
      try{
        const response=await axios.get("http://localhost:2000/api/category/getcat")
        // console.log("respionsese",response.data.category)
        if(response.data.category)
        {
          const data=response.data.category;
          dispatch(categoryReducer(data))

        }
      }
      catch(err)
      {
        console.log("error",err)
      }

    }
    getCategory()
  },[])
  // console.log("category",categoryData)
  return (
    <>
     <Layout>
      <AllRoouter/>
     </Layout>
    </>
  );
}

export default App;
