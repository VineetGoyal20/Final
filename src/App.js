import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import ThanksPage from "./components/ThanksPage";
import { useLocation } from 'react-router-dom'

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const location = useLocation().pathname;
  console.log(location);

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <>
        {
          location == "/thankyou" ? "" : <Header />
        }
        </>

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path = "/contactus" element={<ContactUs/>} />
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/thankyou" element={<ThanksPage/>}/>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
