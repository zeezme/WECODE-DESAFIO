import React from 'react'

import '../styles/index.css'

import productItems from "../config/products.json";

import Banners from '../components/banners/Banners'
import Header from '../components/common/header/Header'
import Departments from '../components/departments/Departments'
import Footer from '../components/common/footer/Footer'
import BestSellers from '../components/bestSellers/BestSellers'
import StaticBanner from '../components/staticBanner/StaticBanner';
import ExtraInfo from '../components/extraInfo/ExtraInfo';

export default function home() {
  return (
    <div className='home-page-container'>
      <Header/>
      <Banners/>
      <Departments/>
      <BestSellers json={productItems} title='Produtos mais vendidos'/>
      <StaticBanner image='/assets/images/Banner-home-corpo-1.png' alt='Saiba mais!' title="Saiba mais!" route="route"/>
      <StaticBanner image='/assets/images/Banner-home-corpo-2.png' alt='Aproveite agora!' title="Aproveite agora!" route="route"/>
      <BestSellers json={productItems} title='Selecionados por nós'/>
      <StaticBanner image='/assets/images/Banner-home-corpo-1.png' alt='Saiba mais!' title="Saiba mais!" route="route"/>
      <BestSellers json={productItems} title='Exclusivos da loja online'/>
      <ExtraInfo/>
      <Footer/>
    </div>
  )
}
