import React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function DrawerList({ categories }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    function handleClick({url,event}) {

      event.preventDefault();
      debugger

  

      document.location.href=url
  }
    return <List >{categories.map((m,i) => {
        const {groupName,images,totalGroup} = m
        const urlGroupName =groupName.replace(' ','-').toLowerCase()
        return  <Accordion  elevation={0}    key={groupName} expanded={expanded === groupName} onChange={handleChange(groupName)}>
                <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={groupName}
        >
          <Typography sx={{textTransform:'uppercase'}}>{groupName}</Typography>
        </AccordionSummary> <AccordionDetails>
            <List>
           
            { images.map(d=>{
              const url =`/${urlGroupName}/${d.title}/?page=1`
            
            return <ListItem key={d.title} disablePadding           secondaryAction={
               <span style={{color:'#bdbdbd'}}>{new Intl.NumberFormat().format(d.count)}</span>
              }>
            <ListItemButton component={Link} href={url} onClick={(e)=>handleClick({event:e,index:d.index,url})}>
             
                <ListItemText primary={d.title} />
            </ListItemButton>
        </ListItem>
        })}</List> </AccordionDetails></Accordion>
       
    })}</List>
}