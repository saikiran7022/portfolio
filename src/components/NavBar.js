import React from "react"
import { NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"
 
export default function NavBar(){
    return(

        <header className="bg-blue-600">

            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to ="/" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green=800 text-4xl font-bold cursive tracking-widest">
                        h0m3
                    </NavLink>
                      
                     <NavLink to="/post" className="inline-flex items-center px-3 py-3 rounded text-green-100 hover:text-red-100">
                           Blog Posts
                     </NavLink>
                        
                      <NavLink to="/project" className="inline-flex items-center px-3 py-3 rounded text-green-100 hover:text-red-100">
                          Projects
                      </NavLink>
                           
                       <NavLink to="/about" className="inline-flex items-center px-3 py-3 rounded text-green-100 hover:text-red-100">
                            About M3!!
                       </NavLink>
                </nav>
                
                <div className="inline-flex px-3 py-3 my-6" >

                    <SocialIcon url="https://twitter.com/ag3nt700" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35 , width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/lingadally-saikiran-8633b0180/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35 , width: 35}}></SocialIcon>
                    <SocialIcon url="https://www.instagram.com/saikiran_lingadally/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35 , width: 35}}></SocialIcon>
                </div>
            </div>
        </header>
    ) 
}