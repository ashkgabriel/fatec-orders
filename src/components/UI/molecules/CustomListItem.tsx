import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface CustomListItemProps {
  text: string;
  path: string;
  icon: React.ReactNode;
  beforeRedirect ?: () => void
}
const CustomListItem: React.FC<CustomListItemProps> = ({
  icon,
  path,
  text,
  beforeRedirect
}) => {
  const router = useRouter();

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          if (beforeRedirect) beforeRedirect();
          router.push(path);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
