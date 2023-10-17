/**
@CreatedBy        : Vasanth Varatharajan
@CreatedTime      : Oct 6 2023
@ModifiedBy       : Vasanth Varatharajan
@ModifiedTime     : Oct 6 2023
@Description      : This file contain Import and Inset Plan  
**/

import * as XLSX from "xlsx";
import axios from "axios";
import React from "react";

export default function ImportPlanSheet(props) {
  const handlePostRequest = (Data) => {
    // Define the data you want to send in the request body
    const requestData = Data;

    // Make the POST request
    axios
      .post(" http://localhost:3000/MealPlan", requestData)
      .then((response) => {
        // Handle the success response here
        console.log("POST request successful:", response.data);
        props.handleMenuRefresh(response);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error making POST request:", error);
      });
  };

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    const transaformToProperJson = (d) => {
      return new Promise((resolve, reject) => {
        try {
          const transformedData = d.map((obj) => {
            const keys = Object.keys(obj);
            const newObj = {};
            keys.forEach((key) => {
              const newKey = key.replace(/\s/g, "").replace("data", "");
              newObj[newKey] = obj[key];
            });
            return newObj;
          });
          resolve(transformedData);
        } catch (error) {
          reject(error);
        }
      });
    };

    promise.then((d) => {
      transaformToProperJson(d).then(async (Data) => {
        handlePostRequest(Data);
      });
    });
  };

  const handleClick = () => {
    document.getElementById("importPlanInfo").click();
  };

  return (
    <div>
      <button className="import_btn" onClick={handleClick}>
        Import Plan
        <input
          type="file"
          onChange={(e) => {
            readExcel(e.target.files[0]);
          }}
          hidden
          id="importPlanInfo"
          accept=".xls,.xlsx,.csv"
        />
      </button>
    </div>
  );
}
