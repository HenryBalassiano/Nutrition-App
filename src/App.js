import React, { useState,useCallback,useRef, useEffect } from 'react';
import './App.css';

function App() {
    const [foodData, setFoodData] = useState({
commonFoodName1:'',
commonFoodName2:'',
commonFoodName3:'',
commonFoodName4:'',
commonFoodName5:'',

brandFoodName1:'',
brandFoodName2:'',
brandFoodName3:'',
brandFoodName4:'',
brandFoodName5:'',

commonImage1:'',
commonImage2:'',
commonImage3:'',
commonImage4:'',
commonImage5:'',


brandedImage1:'',
brandedImage2:'',
brandedImage3:'',
brandedImage4:'',
brandedImage5:'',

commonImage1:'',
commonImage2:'',
commonImage3:'',
commonImage4:'',
commonImage5:'',

id1:'',
id2:'',
id3:'',
id4:'',
id5:'',

brandCompanyName1:'',
brandCompanyName2:'',
brandCompanyName3:'',
brandCompanyName4:'',
brandCompanyName5:'',
    });



    const [input, setInput] = useState('');
    const [nameForCommon, setNameforCommon] = useState('');
    const [nameForBrand, setNameforBrand] = useState('');



    


 

    const [commonCalories, setCommonCalories] = useState({
      commonCalories1:'',
      commonCalories2:'',
      commonCalories3:'',
      commonCalories4:'',
      commonCalories5:'',


      commonGrams1:'',
      commonGrams2:'',
      commonGrams3:'',
      commonGrams4:'',
      commonGrams5:'',


    });



    const [brandedCalories, setBrandedCalories] = useState({

brandedCalories:'',

brandedGrams:''

    })
 








    const [inputCalories, setInputCalories] = useState(0);
    const [inputGrams, setInputGrams] = useState(0);
    const [foodImg, setFoodImg] = useState();
    const [displayName, setDisplayName] = useState();
    const [Calories, setCalories] = useState(0);

  const selection = useRef();



      
  


            function useLocalState(localItem) {
        let vals = JSON.parse(localStorage.getItem(localItem))
        if (vals === null) vals = []
        const [loc,setState] = useState(vals)

        function setLoc(newItem) {
          localStorage.setItem(localItem, JSON.stringify(newItem))
          setState(newItem)
        }

        return [loc,setLoc]
      }
              const [list, setlist] = useLocalState()  
            const deleteItem = (id)=>{
              const lists = [...list]
            const newList = lists.filter(item => item.id !== id)
            setlist(newList)
            }

          
    
useEffect(()=>{
if(list.length > 0){
  document.getElementById('food-message').style.display='none'

}
else{
  document.getElementById('food-message').style.display='block'

}


})

    
const commonCalorieFunc1= async function fetchCommonNutritionData1() {
  document.getElementById('selection-box').style.display='block'
setNameforCommon(foodData.commonFoodName1)

setFoodImg(foodData.commonImage1)

setDisplayName(foodData.commonFoodName1)

        try {
          const response = await fetch(
            "https://trackapi.nutritionix.com/v2/natural/nutrients",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-app-id": "d789d836",
                "x-app-key": "03bef8e166de6dd2f1e9434b2b785e65"
              },
              body: JSON.stringify({ query: foodData.commonFoodName1})
            }
          );

          const data = await response.json();
setCommonCalories({

  commonCalories1:data.foods[0].nf_calories,
  commonGrams1:data.foods[0].serving_weight_grams
})

        } catch (err) {
          console.log(err);
        }
      }
    


      const commonCalorieFunc2= async function fetchCommonNutritionData2() {
        document.getElementById('selection-box').style.display='block'
      setNameforCommon(foodData.commonFoodName2)
      setFoodImg(foodData.commonImage2)
      setDisplayName(foodData.commonFoodName2)

              try {
                const response = await fetch(
                  "https://trackapi.nutritionix.com/v2/natural/nutrients",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "x-app-id": "d789d836",
                      "x-app-key": "03bef8e166de6dd2f1e9434b2b785e65"
                    },
                    body: JSON.stringify({ query: foodData.commonFoodName2})
                  }
                );
      
                const data = await response.json();
      setCommonCalories({
      
        commonCalories1:data.foods[0].nf_calories,
        commonGrams1:data.foods[0].serving_weight_grams
      })

                
              } catch (err) {
                console.log(err);
              }
            }
          
            
                
                  const commonCalorieFunc3= async function fetchCommonNutritionData3() {
                    document.getElementById('selection-box').style.display='block'
                  setNameforCommon(foodData.commonFoodName3)
                  setFoodImg(foodData.commonImage3)
                  setDisplayName(foodData.commonFoodName3)


                  
                          try {
                            const response = await fetch(
                              "https://trackapi.nutritionix.com/v2/natural/nutrients",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  "x-app-id": "d789d836",
                                  "x-app-key": "03bef8e166de6dd2f1e9434b2b785e65"
                                },
                                body: JSON.stringify({ query: foodData.commonFoodName3})
                              }
                            );
                  
                            const data = await response.json();
                  setCommonCalories({
                  
                    commonCalories1:data.foods[0].nf_calories,
                    commonGrams1:data.foods[0].serving_weight_grams
                  })
                  
                            
                          } catch (err) {
                            console.log(err);
                          }
                        }
                      
                        const commonCalorieFunc4= async function fetchCommonNutritionDat4() {
                          document.getElementById('selection-box').style.display='block'
                        setNameforCommon(foodData.commonFoodName4)
                        
                        setFoodImg(foodData.commonImage4)
                        setDisplayName(foodData.commonFoodName4)


                                try {
                                  const response = await fetch(
                                    "https://trackapi.nutritionix.com/v2/natural/nutrients",
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                        "x-app-id": "d789d836",
                                        "x-app-key": "03bef8e166de6dd2f1e9434b2b785e65"
                                      },
                                      body: JSON.stringify({ query: foodData.commonFoodName4})
                                    }
                                  );
                        
                                  const data = await response.json();
                        setCommonCalories({
                        
                          commonCalories1:data.foods[0].nf_calories,
                          commonGrams1:data.foods[0].serving_weight_grams
                        })
                        
                                  
                                } catch (err) {
                                  console.log(err);
                                }
                              }
                            
                                             
                              const commonCalorieFunc5= async function fetchCommonNutritionData5() {
                                document.getElementById('selection-box').style.display='block'
                              setNameforCommon(foodData.commonFoodName5)
                              
                              setFoodImg(foodData.commonImage5)
                              setDisplayName(foodData.commonFoodName5)


                                      try {
                                        const response = await fetch(
                                          "https://trackapi.nutritionix.com/v2/natural/nutrients",
                                          {
                                            method: "POST",
                                            headers: {
                                              "Content-Type": "application/json",
                                              "x-app-id": "d789d836",
                                              "x-app-key": "2ac8dc6a346c6eaf0097f7e0cad930c3"
                                            },
                                            body: JSON.stringify({ query: foodData.commonFoodName5})
                                          }
                                        );
                              
                                        const data = await response.json();
                              setCommonCalories({
                              
                                commonCalories1:data.foods[0].nf_calories,
                                commonGrams1:data.foods[0].serving_weight_grams
                              })
                              
                                        
                                      } catch (err) {
                                        console.log(err);
                                      }
                                    }

   
       const brandedCalorieFunc1=  async function fetchBrandedNutritionData1() {
        document.getElementById('selection-box').style.display='block'
        setNameforCommon(foodData.brandFoodName1)
        setFoodImg(foodData.brandedImage1)
        setDisplayName(foodData.brandFoodName1)


        try {
          const response = await fetch(
            "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=" + foodData.id1 +
              "",
            {
              headers: {
                "x-app-id": "d789d836",
                "x-app-key": "03bef8e166de6dd2f1e9434b2b785e65"
              }
            }
          );

          const data = await response.json();
          setCommonCalories({
                              
            commonCalories1:data.foods[0].nf_calories,
            commonGrams1:data.foods[0].serving_weight_grams
          })
          
        } catch (err) {
          console.log(err);
        }
      }
    

   
    
      const brandedCalorieFunc2=  async function fetchBrandedNutritionData2() {
        document.getElementById('selection-box').style.display='block'
        setNameforCommon(foodData.brandFoodName2)
        setFoodImg(foodData.brandedImage2)
        setDisplayName(foodData.brandFoodName2)


        try {
          const response = await fetch(
            "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=" + foodData.id2 +
              "",
            {
              headers: {
                "x-app-id": "d789d836",
                "x-app-key": "03bef8e166de6dd2f1e9434b2b785e65"
              }
            }
          );

          const data = await response.json();
          setCommonCalories({
                              
            commonCalories1:data.foods[0].nf_calories,
            commonGrams1:data.foods[0].serving_weight_grams
          })
          
        } catch (err) {
          console.log(err);
        }
      }
    
      const brandedCalorieFunc3=  async function fetchBrandedNutritionData3() {
        document.getElementById('selection-box').style.display='block'
        setNameforCommon(foodData.brandFoodName3)
        setFoodImg(foodData.brandedImage3)
        setDisplayName(foodData.brandFoodName3)


        try {
          const response = await fetch(
            "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=" + foodData.id3 +
              "",
            {
              headers: {
                "x-app-id": "d789d836",
                "x-app-key": "03bef8e166de6dd2f1e9434b2b785e65"
              }
            }
          );

          const data = await response.json();
          setCommonCalories({
                              
            commonCalories1:data.foods[0].nf_calories,
            commonGrams1:data.foods[0].serving_weight_grams
          })
          
        } catch (err) {
          console.log(err);
        }
      }
    
      const brandedCalorieFunc4=  async function fetchBrandedNutritionData4() {
        document.getElementById('selection-box').style.display='block'
        setNameforCommon(foodData.brandFoodName4)
        setFoodImg(foodData.brandedImage4)
        setDisplayName(foodData.brandFoodName4)


        try {
          const response = await fetch(
            "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=" + foodData.id4 +
              "",
            {
              headers: {
                "x-app-id": "d789d836",
                "x-app-key": "03bef8e166de6dd2f1e9434b2b785e65"
              }
            }
          );

          const data = await response.json();
          setCommonCalories({
                              
            commonCalories1:data.foods[0].nf_calories,
            commonGrams1:data.foods[0].serving_weight_grams
          })
          
        } catch (err) {
          console.log(err);
        }
      }
    
      const brandedCalorieFunc5=   async function fetchBrandedNutritionData5() {
        document.getElementById('selection-box').style.display='block'
        setNameforCommon(foodData.brandFoodName5)
        setFoodImg(foodData.brandedImage5)
        setDisplayName(foodData.brandFoodName5)


        try {
          const response = await fetch(
            "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=" + foodData.id5 +
              "",
            {
              headers: {
                "x-app-id": "d789d836",
                "x-app-key": "03bef8e166de6dd2f1e9434b2b785e65"
              }
            }
          );

          const data = await response.json();
          setCommonCalories({
                              
            commonCalories1:data.foods[0].nf_calories,
            commonGrams1:data.foods[0].serving_weight_grams
          })
          
        } catch (err) {
          console.log(err);
        }
      }
    


const debounce = (delay, fn) => {
  let inDebounce = null;
  return args => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => fn(args), delay);
  };
};

  const ref = useRef(null);
  const [requestCount, setRequestCount] = useState(0);

  const send = async value => {
    try {
      const response = await fetch(
        "https://trackapi.nutritionix.com/v2/search/instant?query=" +
          value +
          "",
        {
          headers: {
            "x-app-id": "d789d836",
            "x-app-key": "03bef8e166de6dd2f1e9434b2b785e65"
          }
        }
      );
      document.getElementById("common").style.display = "block";
if(value === ''){

  document.getElementById("common").style.display = "none";
}

      const data = await response.json();

      setFoodData({
        commonFoodName1:data.common[0].food_name,
        commonFoodName2:data.common[1].food_name,
        commonFoodName3:data.common[2].food_name,
        commonFoodName4:data.common[3].food_name,
        commonFoodName5:data.common[4].food_name,

         brandFoodName1:data.branded[0].food_name,
         brandFoodName2:data.branded[1].food_name,
         brandFoodName3:data.branded[2].food_name,
         brandFoodName4:data.branded[3].food_name,
         brandFoodName5:data.branded[4].food_name,

          brandedImage1:data.branded[0].photo.thumb,
          brandedImage2:data.branded[1].photo.thumb,
          brandedImage3:data.branded[2].photo.thumb,
          brandedImage4:data.branded[3].photo.thumb,
          brandedImage5:data.branded[4].photo.thumb,

          commonImage1:data.common[0].photo.thumb,
          commonImage2:data.common[1].photo.thumb,
          commonImage3:data.common[2].photo.thumb,
          commonImage4:data.common[3].photo.thumb,
          commonImage5:data.common[4].photo.thumb,
          
          id1: data.branded[0].nix_item_id,
          id2: data.branded[1].nix_item_id,
          id3: data.branded[2].nix_item_id,
          id4: data.branded[3].nix_item_id,
          id5: data.branded[4].nix_item_id,
          
          brandCompanyName1:data.branded[0].brand_name,
          brandCompanyName2:data.branded[1].brand_name,
          brandCompanyName3:data.branded[2].brand_name,
          brandCompanyName4:data.branded[3].brand_name,
          brandCompanyName5:data.branded[4].brand_name,



      });
   
     } catch {
    } finally {
      setRequestCount(requestCount + 1);
    }

  }
  const onLoadCitiesThrottle = useCallback(debounce(500, send), []);
    
    




  return (
    <div >
      <div id='dim'>
      <div id='input' >
   <input placeholder = 'Search For Food..' type='text' onChange={(event)=>{

  
        const input = event.target.value;
        onLoadCitiesThrottle(input);
        
 }} /></div></div>
 <div id='calorie-track'>
 <p>You have consumed {Calories} calories</p></div>

 <p id='food-message'> You have not logged anything yet..</p>
 <div id='diary'>
   
 {list.map(item => {
        return(
          <div>
          <div  id ='parents'>         
           <button id='deleteFood' onClick={() => deleteItem(item.id)  }> X </button>
    
              <img id='imgForList' src = {item.img}/>
<div id='food-parent'>
  
      <h3 id='nameForFood'
       key={item.id}> {item.name} </h3> 
       <p id='food-weight'>({item.weight} g) </p>    
       
        <p id='calories-diary'>{item.calories} cal</p>
</div>          

       </div>
<hr id='hr'/></div>


        )
      })}</div><div id="dimmer"></div>

  <div id='common-parent'>
<div id='common'> 
<ul>

<h4>Common</h4>
 <p id='button1'onClick={commonCalorieFunc1} >{foodData.commonFoodName1}</p> <img id='img'src={foodData.commonImage1}/>
  <p id='button2'onClick={commonCalorieFunc2}  >{foodData.commonFoodName2}</p><img id='img' src={foodData.commonImage2}/>
  <p id='button3' onClick={commonCalorieFunc3}>{foodData.commonFoodName3}</p><img id='img'src={foodData.commonImage3}/>
  <p id='button4'onClick={commonCalorieFunc4}>{foodData.commonFoodName4}</p><img id='img'src={foodData.commonImage4}/>
  <p id='button5'onClick={commonCalorieFunc5}>{foodData.commonFoodName5}</p><img id='img'src={foodData.commonImage5}/>
  <h4>Branded</h4>

  <p id='button6' onClick={brandedCalorieFunc1}>{foodData.brandFoodName1} 
    </p> <img id='img' src={foodData.brandedImage1}/><p id='brand-company1'>{foodData.brandCompanyName1}</p>
  <p id='button7' onClick={brandedCalorieFunc2}>{foodData.brandFoodName2}</p><img id='img' src={foodData.brandedImage2}/><p id='brand-company1'>{foodData.brandCompanyName2}</p>
  <p id='button8' onClick={brandedCalorieFunc3}>{foodData.brandFoodName3}</p><img id='img'src={foodData.brandedImage3}/><p id='brand-company1'>{foodData.brandCompanyName3}</p>
  <p id='button9'onClick={brandedCalorieFunc4}>{foodData.brandFoodName4}</p><img id='img' src={foodData.brandedImage4}/><p id='brand-company1'>{foodData.brandCompanyName4}</p>
  <p id='button10'onClick={brandedCalorieFunc5}>{foodData.brandFoodName5}</p><img id='img'src={foodData.brandedImage5}/><p id='brand-company1'>{foodData.brandCompanyName5}</p>

</ul></div>
<div id='selection-box' ref={selection}>
  <div id='img-name'>
  <img id ='display-img'src ={foodImg}/>
  <h4 id='item-name'>
    {nameForCommon}
  </h4></div>
  <hr id='line-break'/>
  <div id='food-measurments'>  <span>Calories</span>

  <h4 id='calories'>{Math.floor(inputCalories*  commonCalories.commonCalories1)}</h4>
  <span id='span-gram'>Grams</span>
   <h4 id='grams'> 
    {Math.floor(inputGrams * commonCalories.commonGrams1)}
  </h4></div>
  <button id='selection-button'onClick={()=>{
    document.getElementById('selection-box').style.display='none'

  }}>X</button>
<div>
  <input placeholder='quanity'id ='quanity-box'type ='number'onChange={ (e)=>{
var input = e.target.value
setInputGrams((input ))

setInputCalories((input ))
  }
  }></input>
  <button id='add' onClick={ ()=>{
        const newItem={
                id: 1 + Math.random(),
                name: displayName.slice(),
                img:foodImg,
                weight:Math.floor(inputCalories *commonCalories.commonGrams1),
                calories: Math.floor(commonCalories.commonCalories1 * inputCalories)

        }
        setCalories(newItem.calories + Calories)
     
        

        const lists = [...list]
       
        lists.push(newItem)
        setlist(lists)
        document.getElementById('selection-box').style.display='none'
        document.getElementById('common').style.display='none'

      
    }}>add</button></div>
  </div>   
</div>
    </div>
  );
}

export default App;
