import React from "react";
import { Box, FormControl } from "@material-ui/core";

function FiltersForm({children, classes}) {
  return (
    <section className={classes.featuredSection}>
      <Box className={classes.featuredContainer}>
        <Box className={classes.featuredContainerVertical}>
          <FormControl className={classes.formControl}>
            {children}
          </FormControl>
        </Box>
      </Box>
    </section>
  );
}

export default FiltersForm;
