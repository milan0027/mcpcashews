import React from "react";
import Grid from '@mui/material/Grid';
import ActionCard from "./ActionCard";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
const Products = () => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');

    const handleClickOpen = (element) => {
        setTitle(element);
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
        <div className="div-item" id="products">
            <h1>Our Products</h1>

            <Grid id="product-grid" container spacing={3}>
                {itemNames.map(element => 
                    <Grid item xs={12} sm={6} md={4} xl={3} key={element}>
                          <ActionCard url = {'/mcpcashews/assets/items/'+element+'.jpeg'} name={element} 
                          handleClick={handleClickOpen}></ActionCard>
                    </Grid>
                )}
                <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={open}
        onClose={handleClose}
      >
        <DialogTitle><span id="modal-title">{title}</span></DialogTitle>
        <DialogContent>
          <img src={'/mcpcashews/assets/items/'+title+'.jpeg'} alt={title} id="modal-img"></img>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
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
    "MCP POUCH",
    "MCP W320",
    "VIKASH POUCH",
    "VIKASH W240",
    "VIKASH W320",
    "VIKASH W400",
    "UNIVERSAL(2KG)",
    "UNIVERSAL(18KG)",
    "VIKASH-2KG",
    "VIKASH",
    "BALTI"
]
export default Products