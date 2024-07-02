import React,{useState} from 'react'
import Form from './Components/Form'
import Card from './Components/Card'

const App = () => {
  const[userEmail,setUserEmail]=useState('');
  return (
    <div>
      <Form setUserEmail={setUserEmail}/>

      <Card
      imagesrc="https://www.shutterstock.com/image-illustration/modern-side-by-stainless-steel-260nw-1080200909.jpg"
      content="This is lg refrigirator our most selling product"
      productId="123"
      userEmail={userEmail}
     />
     <Card
      imagesrc="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/television_Gyq-zIOu_thumb.jpg"
      content="This is lg TV best TV collection available"
      productId="124"
      userEmail={userEmail}
     />
     <Card
      imagesrc="https://img.freepik.com/free-vector/air-conditioner-with-cold-wind-remote-control_107791-2881.jpg"
      content="This is lg AC best AC in the world"
      productId="125"
      userEmail={userEmail}
     />

    </div>
  )
}

export default App
