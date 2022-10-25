import {React, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const {userAuth} = useSelector((state) => state?.users);
  const admin = userAuth?.isAdmin
  useEffect(() => {
    if(!admin) navigate('/')
    
  }, )
  
  return (
 <>



 </>
 )
}

export default Dashboard
