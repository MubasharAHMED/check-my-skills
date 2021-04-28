import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

export default function Item({ item, index, removeCallback }) {
  return (
      <ListItem>
        <ListItemText primary={`${item.title} 👉 ${item.quantity}`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={() => removeCallback(index)}/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
  );
}
