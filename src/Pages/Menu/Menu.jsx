import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import banner3 from '../../assets/menu/banner3.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import MenuCategory from './MenuCategory/MenuCategory';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import useCategory from '../../hooks/useCategory';

const Menu = () => {
    const [offers, desserts, pizzas, salads, soups] = useCategory();
    return (
        <div>
            <Helmet>
                <title>Foods Corner | Menu</title>

            </Helmet>
            <Cover coverBg={banner3} coverTitle="Our Menu"></Cover>
            {/* offer menu items */}
            <SectionTitle subHeader="Don't Miss" header="Today's Offer"></SectionTitle>
            <MenuCategory items={offers} ></MenuCategory>
            {/* Dessert Menu items */}
            <MenuCategory items={desserts} title="desserts" imgBg={dessertImg}></MenuCategory>
            {/* Pizza Menu items */}
            <MenuCategory items={pizzas} title="pizzas" imgBg={pizzaImg}></MenuCategory>
            {/* salads Menu items */}
            <MenuCategory items={salads} title="salads" imgBg={saladImg}></MenuCategory>
            {/* Soups Menu items */}
            <MenuCategory items={soups} title="soups" imgBg={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;