import { CategoryCard } from '../components/CategoryCard';
import { ExploreText } from '../components/HeadingText';
import ProductCard from '../components/ProductItems';

function Home() {
  return (
    <div className=" bg-green-100  h-auto ">
     
       <ExploreText/>
       <CategoryCard/>
         
        <ProductCard/>  
        <div className='h-20 bg-green-100'></div>
       
    </div>
  );
}

export default Home;
