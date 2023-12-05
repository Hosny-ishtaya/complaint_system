import React, { useState } from "react";
const Place = () => {
    const [type_company, catogrytyoechange] = useState("");

    const click=()=>{

        console.log("clickkkk")

    }


    return (
        <div className="place-container" >
            <div className="main-title">
                <h1>وين الوجه ؟</h1>
                <select className="select" value={type_company} onChange={e => catogrytyoechange(e.target.value)} >
                    <option>نابلس</option>
                    <option>اريحا</option>
                    <option>جنين</option>
                    <option>طولكرم</option>
                    <option>النصاريه</option>
                </select>
                <div className="form-button">
                        <input type="submit" name="go" id="go" classname="form-submit" value="تجول" onClick={click()} />
                    </div>
            </div>



        </div>
    )



}

export default Place;