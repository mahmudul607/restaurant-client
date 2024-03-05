import useMenu from "./useMenu";

const useCategory = () =>{
    const [menu] = useMenu();

    const offers = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    const popularMenu = menu.filter(item => item.category === 'popular')

    return [offers, desserts, pizzas, salads, soups, drinks, popularMenu];


}

export default useCategory;