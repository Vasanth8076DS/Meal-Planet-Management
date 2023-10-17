import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuTable from "./MenuList";
import ImportMenuSheet from "./ImportMenu";

function MenuManagement() {
  const [menuList, setMenuList] = useState([]);
  const [menuRefresh, setMenuRefresh] = useState();

  const handleMenuRefresh = (data) => {
    setMenuRefresh(data);
  };

  // Function to make the API request

  // useEffect hook to fetch plans when the component mounts
  useEffect(() => {
    const fetchMenuList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/MealPlanMenuList"
        );
        // Assuming the response contains an array of plans
        setMenuList(response.data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    // Call the fetchPlans function here
    fetchMenuList();
  }, [menuRefresh]);

  return (
    <>
      <div class="courses-container">
        <MenuTable menuList={menuList} />
        <ImportMenuSheet handleMenuRefresh={handleMenuRefresh} />
      </div>
    </>
  );
}

export default MenuManagement;
