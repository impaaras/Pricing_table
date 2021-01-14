import React from 'react'
import './App.css';
import Comp from './Components/Comp';
import List from './Components/List';

function App(props) {
  return (
    <div className="price_page">
   <div className="page">    
   <div className="features">
     <h1>Features</h1>
   </div>
      <div className="price_data">
          <Comp title="Starter" price="0" terms="Per user, per month" button="Go Starter"/>
          <Comp title="Professional" price="25" terms="Per user, per month" button="Go Professional"/>
          <Comp title="Organization" price="50" terms="Per user, per month" button="Go Organization" sup="Offer+"/> 
      </div>
   </div>
   <div >
       {/* <List list="Centralized teams" tag_1={"😃"} tag_2={"😃"} tag_3={"😃"}/>
      <List list="Version history" tag_1={"😃"} tag_2={"😃"} tag_3={"😃"}/>
      <List list="Plugin administration" tag_1={"😃"} tag_2={"😃"} tag_3={"😃"}/>
      <List  list="Facebook & Instagram Ads" tag_1={"😢"} tag_2={"😃"} tag_3={"😃"}/>
      <List list="Design System Analytics" tag_1={"😢"} tag_2={"😢"} tag_3={"😃"} />
      <List  list="Unlimited Cloud Storage" tag_1={"😢"} tag_2={"😢"} tag_3={"😃"}/> */}
      <List list="Centralized teams" tag_1={"✓"} tag_2={"✓"} tag_3={"✓"}/>
      <List list="Version history" tag_1={"✓"} tag_2={"✓"} tag_3={"✓"}/>
      <List list="Plugin administration" tag_1={"✓"} tag_2={"✓"} tag_3={"✓"}/>
      <List  list="Facebook & Instagram Ads" tag_1={"✕"} tag_2={"✓"} tag_3={"✓"}/>
      <List list="Design System Analytics" tag_1={"✕"} tag_2={"✕"} tag_3={"✓"}/>
      <List  list="Unlimited Cloud Storage" tag_1={"✕"} tag_2={"✕"} tag_3={"✓"}/>
   </div>

   </div>
  
  );
}

export default App;
