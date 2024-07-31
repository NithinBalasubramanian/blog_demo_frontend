import Head from 'next/head'
import HomeMain from '../component/HomeMain'
import axios from '../component/apiInstance/Instance_API';

export default function Home(props) {


  return (
    <div>
      <HomeMain datas = { props.data } />
    </div>
  )
}



// This gets called on every request
export const getServerSideProps = async(context) => {

  // Fetch data from external API

  const res = await axios.get('/homeTopFetch')
              .then((res) => {
                  return res.data;
              })
              .catch((error) => {
                  console.log(error);
              })


  // Pass data to the page via props
  return { 
      props : { 
          data : res
      } 
  }
}