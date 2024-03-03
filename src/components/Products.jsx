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
                          <ActionCard url = {'/mcpcashews/assets/items/'+element+'.jpeg'} name={element}></ActionCard>
                    </Grid>
                )}
                
            </Grid>
            
        </div>
          
        </>
    )
}

const itemNames = [
    "BAM",
    "BP.",
    "JB.",
    "JH.",
    "K.",
    "KJH.",
    "KP.",
    "MCP W240(18KG)",
    "MCP",
    "S240.",
    "SBM",
    "UNIVERSAL(2KG)",
    "UNIVERSAL(18KG)",
    "VIKASH-2KG",
    "VIKASH",
    "BALTI"
]
export default Products