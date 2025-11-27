import { useState } from "react";
import Popup from 'reactjs-popup'
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Loginpat = () => {
     
    const[pst , setToken] = useState('')
    const navigate = useNavigate()
    const userPst = (e) => {
        setToken(e.target.value)
    }
    
    const savetoken = () => {
         setToken('')
         if (pst !== '' && pst.startsWith("ghp_")){ 
             Cookies.set('pat_token', pst, { expires: 7 })
             navigate('/')
         }
            else{
                alert("Please enter valid Personal Access Token")
         }
        }

    return (
    <div className="login-container">
        <div className="why-us-pat-container">
            
            <div className="flex-container">
                      <Popup
                        modal
                        trigger={
                          <p className="features">Why(PAT)</p>
                        }
                      >
                        {() => (
                          <div className="why-pst-popup-container">
                            <div className="flex-container">
                              <FaGithub size={40} color="#000000" />
                               <h1 className="why-pst-heding">Why Personal Access Token (PAT)?</h1>
                            </div>
                           
                            <p className="content">This app asks for your Personal Access Token (PAT) to securely load your GitHub data.
                                                  Your token stays only inside your browser (saved in cookies) and is never sent to any server.
                                                  All requests go directly from your device to GitHub, keeping your account fully private.
                                                  Using your own PAT ensures complete security, privacy, and full control while using the app.
                             </p>
                          </div>
                        )}
                      </Popup>
               
              <a href="https://www.youtube.com/watch?v=0C-B6bFuQYU" target="_blank" rel="noreferrer" className="youtube-link">
                   <p className="features">How To Creating PAT</p>
              </a>
              
            </div>
            
        </div>

        
        <div className="input-flex-container">
                <div className="icon-flex-container">
                    <input type="search" className="input-container" placeholder="Enter your personal access token" value={pst} onChange={userPst} />
                    <button type="button" className="submit-button" onClick={savetoken}>
                        <FaGithub className="github-icon" />

                    </button>
                </div>
         </div>
    </div>
)
}

export default Loginpat;