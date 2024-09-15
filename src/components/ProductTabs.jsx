import React from 'react'
import './components.css'
import 'primereact/resources/themes/saga-blue/theme.css';   // PrimeReact tema CSS
import 'primereact/resources/primereact.min.css';           // PrimeReact bileşen CSS
import 'primeicons/primeicons.css';                         // PrimeReact ikonlar
import { TabView, TabPanel } from 'primereact/tabview';
import ProductSlider from './ProductSlider';

const ProductTabs = () => {
  return (
    <div className="card">
    <TabView>
        <TabPanel header="Yeni Gelenler">
            <ProductSlider></ProductSlider>
        </TabPanel>
        <TabPanel header="Popüler Ürünler">
        <ProductSlider></ProductSlider>
        </TabPanel>
        <TabPanel header="İndirimdeki Ürünler">
        <ProductSlider></ProductSlider>
        </TabPanel>
        <TabPanel header="Fırsat Ürünler">
        <ProductSlider></ProductSlider>
        </TabPanel>
        <TabPanel header="Editörün Seçimi">
        <ProductSlider></ProductSlider>
        </TabPanel>
        <TabPanel header="Ücretsiz Kargo">
        <ProductSlider></ProductSlider>
        </TabPanel>
        <TabPanel header="Hızlı Gönderim">
        <ProductSlider></ProductSlider>
        </TabPanel>
        
    </TabView>
</div>
  )
}

export default ProductTabs