import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const products = [
  {
    value: 'data',
    label: 'Hunch Data 구매',
  },
  {
    value: 'data_analy',
    label: 'Hunch Data 분석 구매',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const MultilineTextFields = ({ product, setProduct }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="구매항목"
          value={product}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="구매항목을 선택하세요."
          variant="outlined"
        >
          {products.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}

export default MultilineTextFields;