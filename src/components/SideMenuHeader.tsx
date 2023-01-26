import React from "react";
import {
  makeStyles,
  createStyles,
  IconButton,
  Typography,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import OpenIcon from "@material-ui/icons/Menu";

import CreateNoteIcon from "@material-ui/icons/NoteAdd";


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: theme.spacing(2),
      flexDirection: (expanded: boolean) =>
        expanded ? "row" : "column-reverse",
    },
    header: {
      marginRight: "auto",
      "& h6": {
        fontFamily: "'McLaren', cursive;",
      },
      "& h5": {
        fontFamily: "'McLaren', cursive;",
      },
    },
  })
);

interface Props {
  onClose(): void;
  onOpen(): void;
  expanded: boolean;
}

export const SideMenuHeader: React.FC<Props> = ({
  onClose,
  onOpen,
  expanded,
}) => {
  const classes = useStyles(expanded);
  

  return (
    <div className={classes.root}>
      {!expanded && (
        <Hidden smDown>
          <IconButton component={Link} to="/create">
            <CreateNoteIcon />
          </IconButton>
        </Hidden>
      )}
      {expanded && (
        <div className={classes.header}>
          <Typography variant="h5">
            Iftiin-Notes
            <small>
              <em>s</em>
            </small>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Offline note taking App
          </Typography>
        </div>
      )}
      
    
      {expanded ? (
        <IconButton onClick={() => onClose()}>
          <CloseIcon titleAccess="close menu" />
        </IconButton>
      ) : (
        <IconButton onClick={() => onOpen()}>
          <OpenIcon titleAccess="open menu" />
        </IconButton>
      )}
    </div>
  );
};
