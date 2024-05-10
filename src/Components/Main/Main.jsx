import React, { useState } from 'react'
import Header from '../Header/Header'
import FlightOptions from '../FlightOptions/FlightOptions'
import FlightForm from '../FlightForm/FlightForm'
import FlightDatas from '../Datas/FlightDatas'
import ExtraOptions from '../ExtraOptions/ExtraOptions'


const Main = () => {
    let [isShowFlightDatas,setIsShowFlightDatas]=useState(false)
  return (
    <>
    <Header/>
    <FlightOptions/>
    <FlightForm/>
    <ExtraOptions setIsShowFlightDatas={setIsShowFlightDatas}/>
    <FlightDatas isShowFlightDatas={isShowFlightDatas}/>


    </>

  )
}

export default Main