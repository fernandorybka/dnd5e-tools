import React, { useState } from "react";
import { Box, Button, FormControl, makeStyles } from "@material-ui/core";
import { Colors } from "../assets/themes/Colors";
import DnDClassFilter from "./filters/DnDClassFilter";

const useStyles = (props) =>
  makeStyles((theme) => ({
    featuredSection: {
      backgroundSize: "cover",
      backgroundPosition: "top",
      //backgroundImage: 'url(https://www.dndbeyond.com/attachments/thumbnails/8/374/850/568/creation-1.png)'
      backgroundImage: `url(${props.featuredImage})`,
    },
    featuredContainer: {
      height: "100vh",
      width: "100vw",
      //background: 'linear-gradient(to right, ' + theme.themeColors.darkLiver + ' 30%, ' + theme.themeColors.atomicTangerine + ' 60%, transparent 100%)'
      background: `linear-gradient(90deg, ${Colors.pastelBlack} 30%, transparent 80%)`,
      // theme.themeColors.laserLemon + ' 30%, ' +
      //theme.themeColors.atomicTangerine + ' 30%, ' +
      // theme.themeColors.cambridgeBlue + ' 50%, ' +
      // theme.themeColors.lightGoldenrodYellow + ' 60%,' +
    },
    featuredContainerVertical: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: theme.spacing(8),
      paddingBottom: "200px",
      background: `linear-gradient(to top, ${Colors.pastelBlack} 10%, transparent 50%)`,

      //background: 'linear-gradient(to top, ' + Colors.pastelGray + ' 0%, transparent 70%)',
      //background: 'linear-gradient(321deg, rgba(247,255,88,1) 0%, rgba(243,246,144,1) 5%, rgba(239,236,202,1) 60%, rgba(197,216,190,1) 76%, rgba(169,203,183,1) 100%)',
    },
    title: {
      fontWeight: "bold",
      fontSize: "4rem",
    },
    subTitle: {
      color: Colors.pastelYellow, //atomicTangerine, //lightGoldenrodYellow,
      fontWeight: "bold",
      fontSize: "16px",
    },
    info: {
      color: Colors.pastelGray,
      fontWeight: "bold",
      fontSize: "13px",
      marginBottom: theme.spacing(1),
    },
    content: {
      maxWidth: "500px",
      fontSize: "14px",
    },

    labelSpells: {
      fontSize: "4rem",
      fontWeight: "bold",
      paddingTop: "14px",
      paddingLeft: "8px",
    },
    doFilter: {
        marginTop: theme.spacing(4),
        width: '200px'
    }
  }));

function DndFilters({ filters, setFilters }) {
  const classes = useStyles({
    featuredImage:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/06/Dungeons-and-Dragons-Bard-Cropped.jpg",
  })();

  const [selectedFilters, setSelectedFilters] = useState(filters);

  const handleInputChange = (event) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    setFilters(selectedFilters);
  }

  return (
    <section className={classes.featuredSection}>
      <Box className={classes.featuredContainer}>
        <Box className={classes.featuredContainerVertical}>
          <FormControl className={classes.formControl}>
            <div style={{ display: "flex" }}>
              <DnDClassFilter
                selectedFilters={selectedFilters}
                handleInputChange={handleInputChange}
              />
              <div className={classes.labelSpells}>Spells</div>
            </div>

            <Button className={classes.doFilter} variant="contained" color="primary" onClick={handleClick}>
                Filter
            </Button>
          </FormControl>
        </Box>
      </Box>
    </section>
  );
}

DndFilters.propTypes = {};

export default DndFilters;
