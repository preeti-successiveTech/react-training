"use client";

import { Margin } from "@mui/icons-material";
import { Box, colors } from "@mui/material";
import { useEffect, useState } from "react";

export default function TicToe() {
  const style = {
    card: {
      p: 2,
      border: "1px solid grey",
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto"
    },
  };
  var i = 0;
  const [win, setWin] = useState("");
  const [input, setInput] = useState("");
  const computerInput = (input==="X")? "O" : "X";
  const [turn, setTurn] = useState('user');
  const [arr, setArr] = useState([
    { id: "0", item: "", status: true},
    { id: "1", item: "", status: true },
    { id: "2", item: "", status: true },
    { id: "3", item: "", status: true },
    { id: "4", item: "", status: true },
    { id: "5", item: "", status: true },
    { id: "6", item: "", status: true },
    { id: "7", item: "", status: true },
    { id: "8", item: "", status: true },
  ]);
function randomCell(emptyCells) {
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex]?.id; // safe access
}
function winner()
{

    const list= [[0,1,2,],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0;i<list.length;i++)
    {
      const [a,b,c] = list[i];
      if(arr[a].item!="" && arr[a].item ===arr[b].item && arr[a].item === arr[c].item  ) 
      {
        if(arr[a].item === input)
        {
          setWin("User");
          alert("You Won");
          return true;
        }
        else{
          setWin("computer");
           alert("You Lose");
          return true;
        }
      }
    }
    return false;
}

  useEffect(() => {
    if(winner())
    {
      return;
    }
    if(turn==="user") return;
  const emptyCell = arr.filter((cell) => cell.status === true);

  if (emptyCell.length > 0) {
    const t = setTimeout(() => {
      const selectId = randomCell(emptyCell);
      const fillcell = arr.map((data) => {
        if (data.id === selectId && data.status === true) {
          return {
            ...data,
            status: false,
            item: computerInput
          };
        }
        return data;
      });

      setArr(fillcell);
      setTurn("user");
    }, 500);

    return () => clearTimeout(t);
  }
}, [arr]);


  function check(idto) {
    if(turn==="computer") return;
    console.log(idto, "ff");
    const newArr = arr.map((data) => {
      if (idto === data.id && data.status==true) {
        return{
        ...data,
        status :false,
        item :input,
        }
      }
      return data;
    });
  setArr(newArr);
  setTurn("computer");
  }

  return (
    <div> 
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div style={style.row}>
        <Box component="section" sx={style.card}>
          <button
            id="0"
            onClick={() => check("0")}
            style={{ width: 30, height: 30 }}
          >{arr[0].item}</button>
        </Box>
        <Box component="section" sx={style.card}>
          <button
            id="1"
            onClick={() => check("1")}
            style={{ width: 30, height: 30 }}
          >{arr[1].item}</button>
        </Box>
        <Box component="section" sx={style.card}>
          <button
            id="2"
            onClick={() => check("2")}
            style={{ width: 30, height: 30 }}
          >{arr[2].item}</button>
        </Box>
      </div>
      <div style={style.row}>
        <Box component="section" sx={style.card}>
          <button
            id="3"
            onClick={() => check("3")}
            style={{ width: 30, height: 30 }}
          >{arr[3].item}</button>
        </Box>
        <Box component="section" sx={style.card}>
          <button
            id="4"
            onClick={() => check("4")}
            style={{ width: 30, height: 30 }}
          >{arr[4].item}</button>
        </Box>
        <Box component="section" sx={style.card}>
          <button
            id="5"
            onClick={() => check("5")}
            style={{ width: 30, height: 30 }}
          >{arr[5].item}</button>
        </Box>
      </div>
      <div style={style.row}>
        <Box component="section" sx={style.card}>
          <button
            id="6"
            onClick={() => check("6")}
            style={{ width: 30, height: 30 }}
          >{arr[6].item}</button>
        </Box>
        <Box component="section" sx={style.card}>
          <button
            id="7"
            onClick={() => check("7")}
            style={{ width: 30, height: 30 }}
          >{arr[7].item}</button>
        </Box>
        <Box component="section" sx={style.card}>
          <button
            id="8"
            onClick={() => check("8")}
            style={{ width: 30, height: 30 }}
          >{arr[8].item}</button>
        </Box>
      </div>
    </div>
  );
}
