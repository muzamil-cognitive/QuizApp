import React, { useState } from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [langauge, setLanguage] = useState<string>("");
  const naviGate = useNavigate();
  const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
    setGender((event.target as HTMLInputElement).value)
  }
  const handleChangeName =(event: React.ChangeEvent<HTMLInputElement>)=>{
    setName((event.target as HTMLInputElement).value)
  }
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    localStorage.setItem('name',name)
    e.preventDefault();
    naviGate(`/question/${langauge}`);
  };
  return (
    <div className="form_container">
      <h3>Fill The form to start</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input_container">
          <label>Name</label>
          <TextField  data-testid ='name-input' onChange={handleChangeName} value={name} id="outlined-basic" variant="outlined" />
        </div>
        <div className="input_container">
          <label>Gender</label>
          <TextField  value={gender} onChange={handleChange} id="outlined-basic" variant="outlined" />
        </div>
        <div className="input_container">
          <label>Langauge</label>
          <Select
            onChange={(e) => setLanguage(e.target.value)}
            value={langauge}
            data-testid='option-el'
            id="outlined-basic"
            variant="outlined"
          >
            <MenuItem  role='contentinfo'  value="javascript">Javascript</MenuItem>
            <MenuItem value="html">HTML5</MenuItem>
            <MenuItem value="css">CSS3</MenuItem>
          </Select>
        </div>

        <Button type="submit" variant="contained">
          Start
        </Button>
      </form>
    </div>
  );
};

export default Form;
