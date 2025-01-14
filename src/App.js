import { useState } from "react";
import {
  Button,
  Card,
  Container,
  List,
  makeStyles,
  TextField,
} from "@material-ui/core";
import Item from "./Item";
import CustomAppBar from "./CustomAppBar";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#F5FAFA",
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  textInput: {
    marginRight: 15,
    marginBottom: 15,
  },
  numberInput: {
    width: 80,
    marginRight: 15,
    marginBottom: 15,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  card: {
    padding: 15,
    margin: 15,
  },
});

function App() {
  const classes = useStyles();

  const [shoppingList, setShoppingList] = useState([
    { title: "bananas", quantity: 2 },
    { title: "cherries", quantity: 5 },
  ]);

  const [currentItem, setCurrentItem] = useState("");
  const [currentNumber, setCurrentNumber] = useState(0);

  const addItem = (e) => {
    e.preventDefault();

    // code here
    // don't forget to clear the input values after adding an item to the list
    if(currentItem==="" || currentNumber<1){
      console.log("Mettre un nom de produit et le quantite à 1 au minimum");
    }
    else{
      const newShoppingList=[...shoppingList];
      newShoppingList.push({title:currentItem,quantity:currentNumber});
      
      setShoppingList(newShoppingList);
      
      console.log("A new item is added");
  
      //After adding:
      setCurrentNumber(0);
      setCurrentItem("");
    }
  };

  const removeItem = (title) => {
    // code here
    const newShoppingList = [...shoppingList];
    const index = newShoppingList.findIndex(shoppingList => shoppingList.title ===title);

    newShoppingList.splice(index,1);
    
    setShoppingList(newShoppingList);
  };

  const onTextChanged = (e) => {
    // code here
    // oups, nothing happens when you type in the input, change this part to fix that
    setCurrentItem(e.target.value);
  };

  const onNumberChanged = (e) => {
    // code here
    // oups, nothing happens when you type in the input, change this part to fix that
    setCurrentNumber(e.target.value);
  };

  return (
    <div className={classes.root}>
      <CustomAppBar />
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Card className={classes.card}>
            <form onSubmit={addItem}>
              <div className={classes.form}>
                <div>
                  <TextField
                    className={classes.textInput}
                    label="Item"
                    value={currentItem}
                    onChange={onTextChanged}
                  />
                </div>
                <div>
                  <TextField
                    type="number"
                    className={classes.numberInput}
                    label="Quantity"
                    value={currentNumber}
                    onChange={onNumberChanged}
                  />
                </div>
                <div>
                  <Button type="submit" variant="contained" color="primary">
                    Add
                  </Button>
                </div>
              </div>
            </form>
          </Card>
          <Card className={classes.card}>
            <List>
              {shoppingList.map((item, key) => {
                return (
                  <Item item={item} key={key} index={key} removeCallback={removeItem} />
                );
              })}
            </List>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default App;
