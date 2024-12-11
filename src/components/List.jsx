import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PropTypes from "prop-types";

export default function ListComponent({ items }) {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  );
}

ListComponent.propTypes = {
  items: PropTypes.array.isRequired,
};
