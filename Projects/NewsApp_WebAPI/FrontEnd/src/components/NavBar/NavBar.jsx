import { Link, NavLink } from "react-router";
import {useEffect, useState} from "react";
import {FetchCategories} from "../../api/get.jsx";

export default function NavBar ()
{
    const [categories,setCategories]=useState([]);
    useEffect(() => {

        // fetch categories from the api, if not found, set them manually
        FetchCategories().
        then(response=>{
            if(response.status!=200)
            {
                throw new Error("Failed to fetch categories") ;
            }
            if(!Array.isArray(response.data))
            {
                throw new Error("Invalid categories data");
            }

            setCategories(response.data)
        }).
        catch(error=>{
            setCategories(["World","Business","Entertainment","Health","Science","Sports","Technology"])
            console.log(error)
        });


        },categories
    )
    return (
        <nav aria-label="Main navigation" className="navbar justify-center">
            <Link to="/news">NewsWebApp</Link>

            <ul className={ "flex flex-row  justify-center list-none gap-15"}>

                {categories.map((category,index)=>
                    <li key={index} className={"flex-row"}>
                        <NavLink to={`/news/${category}`}>
                            {category}
                        </NavLink>
                    </li>)
                }

            </ul>
        </nav>
    )
}
