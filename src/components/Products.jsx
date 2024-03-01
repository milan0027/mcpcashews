import React from "react";
import Grid from '@mui/material/Grid';
import ActionCard from "./ActionCard";
const Products = () => {
    return (
        <>
        <div className="div-item" id="products">
            <h1>Our Products</h1>

            <Grid id="product-grid" container spacing={3}>
                {itemNames.map(element => 
                    <Grid item xs={12} sm={6} md={4} xl={3} key={element}>
                          <ActionCard url = {'/assets/items/'+element+'.JPG'} name={element}></ActionCard>
                    </Grid>
                )}
                
            </Grid>
            
        </div>
          
        </>
    )
}

const itemNames = [
    "UNIVERSAL(2KG)",
    "UNIVERSAL(18KG)",
    "UNIVERSAL2(2KG)",
    "UNIVERSAL2(18KG)",
    "W240(2KG)",
    "W240(18KG)",
    "W320(2KG)",
    "W320(18KG)",
    "W400(2KG)",
    "W400(18kg)"
]
export default Products