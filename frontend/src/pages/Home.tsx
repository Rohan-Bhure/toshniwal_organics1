import { CategoryCard } from '../components/CategoryCard';
import { ExploreText } from '../components/HeadingText';
import ProductCard from '../components/ProductItems';

function Home() {
  return (
    <div className=" bg-green-100  mt-20">
     
       <ExploreText/>
       <CategoryCard/>
        <ProductCard/>    
        <ProductCard/>  
       
    </div>
  );
}

export default Home;
