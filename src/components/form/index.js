import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormGroup from "@mui/material/FormGroup";
import { FormLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import "./form.css";
import { useNavigate } from "react-router";

export default function Form() {
  const navigate = useNavigate();
  return (
    <>
      <div class="back-btn">
        <button class="back" onClick={() => navigate("/")}>
          ⬅ Back
        </button>
      </div>

      <div class="main-form-content">
        {/* <TextField id="title" label="Title" sx={{ width: 250 }} />
        <TextField id="description" label="Description" sx={{ width: 250 }} /> */}
        <div>
          <span>Title : </span>
          <input type="text" class="title"></input>
        </div>

        <div>
          <span>Description : </span>
          <input type="text" class="description"></input>
        </div>

        <div>
          <span>Start At : </span>
          <input
            type="time"
            id="startTime"
            class="startTime"
            min="09:00"
            max="18:00"
          ></input>
        </div>

        <div>
          <span>End At : </span>

          <input
            type="time"
            id="endTime"
            class="endTime"
            min="09:00"
            max="18:00"
          ></input>
        </div>

        <button class="submit"> Submit 👍</button>
      </div>
    </>
  );
}
