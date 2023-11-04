import React, { useEffect, useState } from "react";
import axios from "axios";

import ImportPlanSheet from "./ImportPlan";
import PlanForm from "./PlanForm";

function PlanManagement() {
  const [plans, setPlans] = useState([]);

  // Function to make the API request

  // useEffect hook to fetch plans when the component mounts
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get("http://localhost:3000/MealPlan");
        // Assuming the response contains an array of plans
        setPlans(response.data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    // Call the fetchPlans function here
    fetchPlans();
  }, []);

  return (
    <>
      <div class="courses-container">
        <div className="row mt-5">
          <ImportPlanSheet />
          <PlanForm />
        </div>
        {/* <div className="row mt-5">
          {plans.map((plan) => (
            <li class="cards_item" key={plan?.id}>
              <div class="plan_card ">
                <div class="card_image">
                  <img
                    src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg"
                    alt="a Reuben sandwich on wax paper."
                  />
                  <span class="card_price">
                    <span></span>
                    {plan?.id}
                  </span>
                </div>
                <div class="card_content">
                  <h2 class="card_title">{plan?.mealPlanName}</h2>
                  <div class="card_text">
                    <strong>Plan Description</strong>,{" "}
                    <p>{plan?.mealPlanDesc}</p>
                    <strong>Plan Benifits</strong>,{" "}
                    <p>{plan?.mealplanBenefit}</p>
                    <strong>Dietary Info </strong> <p>{plan?.dietaryInfo}</p>
                    <span>
                      {" "}
                      <strong>Kitchen Id</strong> <p>{plan?.kitchenId}</p>
                    </span>{" "}
                    <hr />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default PlanManagement;
