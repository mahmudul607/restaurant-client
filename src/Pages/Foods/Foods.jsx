import Cover from "../Shared/Cover/Cover";
import foodsImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import FoodTab from "./FoodTab/FoodTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const Foods = () => {
    
    // const categories = useCategory();
    // const [offers, desserts, pizzas, salads, soups, drinks] = categories;
    const allCategories = ['offers', 'desserts', 'pizzas', 'salads', 'soups', 'drinks'];
    const {category} = useParams()
    let initialIndex = allCategories.indexOf(category);
    if(initialIndex === -1) {
        initialIndex = 0
    }
    const [tabIndex, setTabIndex] = useState(initialIndex);
   
   
    return (
        <div>
             <Helmet>
            <title>Foods Corner | Our Foods</title>
            </Helmet>
            
            <Cover coverBg={foodsImg} coverTitle="Our Foods"></Cover>
          

            <div className="py-16 text-center">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className={'capitalize max-md:text-xs'}>
                        <Tab>offers</Tab>
                        <Tab>desserts</Tab>
                        <Tab>pizzas</Tab>
                        <Tab>salads</Tab>
                        <Tab>soups</Tab>
                        <Tab>drinks</Tab>

                    </TabList>
                    <TabPanel>
                        <FoodTab items={'offered'} ></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={'dessert'} ></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={'pizza'} ></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={'salad'} ></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={'soup'} ></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={'drinks'} ></FoodTab>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Foods;