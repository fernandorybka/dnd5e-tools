import React, { useState } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { Colors } from '../assets/themes/Colors';


const useStyles = props => makeStyles((theme) => ({
    featuredSection: {
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        //backgroundImage: 'url(https://www.dndbeyond.com/attachments/thumbnails/8/374/850/568/creation-1.png)'
        backgroundImage: `url(${props.featuredImage})`
    },
    featuredContainer: {
        height: '100vh',
        width: '100vw',
        //background: 'linear-gradient(to right, ' + theme.themeColors.darkLiver + ' 30%, ' + theme.themeColors.atomicTangerine + ' 60%, transparent 100%)'
        background: `linear-gradient(90deg, #000 20%, transparent 80%)`,
                                                // theme.themeColors.laserLemon + ' 30%, ' + 
                                                //theme.themeColors.atomicTangerine + ' 30%, ' + 
                                                // theme.themeColors.cambridgeBlue + ' 50%, ' + 
                                                // theme.themeColors.lightGoldenrodYellow + ' 60%,' +
                                                
    },
    featuredContainerVertical: {
        height: '100%',
        width: '100%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: theme.spacing(8),
        paddingBottom: '200px',
        background: `linear-gradient(to top, ${Colors.pastelGray} 10%, transparent 50%)`,

        //background: 'linear-gradient(to top, ' + Colors.pastelGray + ' 0%, transparent 70%)',
        //background: 'linear-gradient(321deg, rgba(247,255,88,1) 0%, rgba(243,246,144,1) 5%, rgba(239,236,202,1) 60%, rgba(197,216,190,1) 76%, rgba(169,203,183,1) 100%)',
    },
    title: {
        fontWeight: 'bold',
    },
    subTitle: {
        color: Colors.pastelYellow, //atomicTangerine, //lightGoldenrodYellow,
        fontWeight: 'bold',
        fontSize: '16px'
    },
    info: {
        color: Colors.pastelGray,
        fontWeight: 'bold',
        fontSize: '13px',
        marginBottom: theme.spacing(1)
    },
    content: {
        maxWidth: '500px',
        fontSize: '14px'
    },
  }));


function FeaturedCard(props) {
    const classes = useStyles({featuredImage: 'https://www.dndbeyond.com/attachments/thumbnails/8/374/850/568/creation-1.png' })();
    //const classes = useStyles();

    return (
        <section className={classes.featuredSection}>
            <Box className={classes.featuredContainer}>
                <Box className={classes.featuredContainerVertical}>
                    <Typography variant="h2" className={classes.title}>
                    Earth Tremor
                    </Typography>
                    <Typography className={classes.subTitle}>
                    1st-level evocation
                    </Typography>
                    <Typography className={classes.info}>
                    Casting Time: 1 action <br/>
                    Range: 10 feet <br/>
                    Components: V, S <br/>
                    Duration: Instantaneous
                    </Typography>
                    <Typography className={classes.content}>
                    You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand.

                    At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
                    </Typography>
                </Box>
            </Box>
        </section>
    )
}

FeaturedCard.propTypes = {
}

export default FeaturedCard
