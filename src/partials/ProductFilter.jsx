import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { SfRating } from "@storefront-ui/react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./partials.css";
 export default function AccordionUsage() {
  const [value, setValue] = React.useState([0, 1000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="filter-panel-main w-75">
      <h3>Filtreler</h3>
      <Accordion defaultExpanded>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          Marka
        </AccordionSummary>
        <AccordionDetails>
          <>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Apple"
              />
               <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Samsung"
              />
               <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="LG"
              />
               <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Huawie"
              />
                <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Sony"
              />
                
              
            
            
            </FormGroup>
          </>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          Fiyat
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => ''}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
    
      />
    </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          Değerlendirme
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col">
            <SfRating value={1} />
            <SfRating value={2} />
            <SfRating value={3} />
            <SfRating value={4} />
            <SfRating value={5} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
