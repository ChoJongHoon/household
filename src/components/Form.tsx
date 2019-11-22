import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import koLocale from "date-fns/locale/ko";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      maxWidth: 300
    },
    button: {
      marginTop: theme.spacing(3),
      maxWidth: 300
    }
  })
);

type Data = {
  date: string;
  income: number;
  expenses: {
    id: number;
    name: string;
    price: number;
    place: string;
  }[];
}[];

type FormProps = {
  data: Data;
  setData: (data: Data) => void;
};

export default function Form({ data, setData }: FormProps) {
  const [date, setDate] = useState<Date | null>(new Date());
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [place, setPlace] = useState("");
  const classes = useStyles();

  const handleAdd = (): void => {
    if (!date) {
      // 오류
      return;
    }
    if (isNaN(Number(price))) {
      // 오류
      return;
    }

    const year = date.getFullYear().toString();
    const month = String(date.getMonth() + 1);
    const day = date.getDate().toString();

    const strDate =
      year + (month[1] ? month : "0" + month) + (day[1] ? day : "0" + day);

    const selectDataIndex = data.findIndex(daily => daily.date === strDate);

    const maxId = data.reduce((acc, daily) => {
      const maxDailyId = daily.expenses.reduce(
        (acc, expense) => (expense.id > acc ? expense.id : acc),
        0
      );
      return acc > maxDailyId ? acc : maxDailyId;
    }, 0);

    if (selectDataIndex === -1) {
      const addedData = [
        ...data,
        {
          date: strDate,
          income: 0,
          expenses: [
            {
              id: maxId + 1,
              name,
              price: Number(price),
              place
            }
          ]
        }
      ];
      localStorage.setItem("data", JSON.stringify(addedData));
      setData(addedData);
    } else {
      const filteredData = data.filter(daily => daily.date !== strDate);
      const selectData = data[selectDataIndex];
      selectData.expenses.push({
        id: maxId + 1,
        name,
        price: Number(price),
        place
      });
      localStorage.setItem(
        "data",
        JSON.stringify([...filteredData, selectData])
      );
      setData([...filteredData, selectData]);
    }
    setName("");
    setPrice("");
    setPlace("");
  };

  return (
    <Wrapper>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          margin="normal"
          fullWidth
          className={classes.textField}
          format="yyyy/MM/dd"
          label="날짜"
          value={date}
          onChange={(date: Date | null) => setDate(date)}
        />
      </MuiPickersUtilsProvider>
      <br />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        className={classes.textField}
        label="품목"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        className={classes.textField}
        label="가격"
        value={price}
        onChange={e => setPrice(e.target.value)}
        InputProps={{
          endAdornment: <InputAdornment position="end">원</InputAdornment>
        }}
      />
      <br />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        className={classes.textField}
        label="구입처"
        value={place}
        onChange={e => setPlace(e.target.value)}
      />
      <br />
      <Button
        onClick={() => handleAdd()}
        variant="contained"
        color="primary"
        fullWidth
        className={classes.button}
      >
        추가
      </Button>
    </Wrapper>
  );
}
