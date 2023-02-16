import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';
import { Home,List, Login ,Profile, RecipeDetail, ShoppingList, SocialPage, Statistic, UploadForm } from './Pages/index';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Layout/>}>

       <Route path="/" element={<Home/>}/>
       <Route path="/List" element={<List/>}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Profile" element={<Profile/>}/>
       <Route path="/RecipeDetail" element={<RecipeDetail/>}/>
       <Route path="/ShoppingList" element={<ShoppingList/>}/>
       <Route path="/Statistic" element={<Statistic/>}/>
       <Route path="/SocialPage" element={<SocialPage/>}/>
       <Route path="/UploadRecipe" element={<UploadForm/>}/>
       
      <h1>Hola recetas</h1>
      </Route>
      </Routes>

    </div>
  );
}

export default App;
