import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@material-ui/core";
import SpellCardDetails from "./SpellCardDetails";
import Emitter from "../../services/Emitter";

import FavoriteIcon from "@material-ui/icons/Favorite";
import SpellHeaderInfo from "./SpellHeaderInfo";


function SpellCard({item, classes}) {
  const openSpellModal = () => {
    console.log('entrou');
    Emitter.emit('OPEN_MODAL_SIGNAL', {customClass: `card${item.school}`, content: <SpellCardDetails spell={item} />});
  }

  if (!item) {
    return (
      <div></div>
    )
  }
  return (
    <Card className={`${classes.card} ${classes[`card${item.school}`]}`} elevation={20} onClick={openSpellModal}>
      <CardHeader
        className={classes.cardTitle}
        title={item.name}
      />
      <Divider className={classes.smallDivider} />
      <Box className={classes.bottom}>
        <CardContent className={classes.cardInfo}>
          <SpellHeaderInfo spell={item} />
        </CardContent>

        {/* <CardActions className={classes.cardActions}>
          <IconButton aria-label="Add to Favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions> */}
      </Box>
    </Card>
  );
}


export default SpellCard;