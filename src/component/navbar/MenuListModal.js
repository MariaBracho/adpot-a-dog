import React from "react";
import { List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MenuListModal({ ListOfMenu, onClick }) {
  return (
    <List spacing={10} marginTop="20px" fontSize="18px" fontWeight="bolder">
      {ListOfMenu.map((route, id) => ({
        route,
        id,
      })).map(({ route, id }) => {
        return (
          <ListItem key={id}>
            <Link onClick={onClick} to={"/" + route}>
              {route}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
