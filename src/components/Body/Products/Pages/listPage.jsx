import React from 'react';
import {Box, Container, Grid, makeStyles} from '@mui/material';

const useStyles = makeStyles(theme => ({
    root:{

    },
    left:{
        width:'250px'
    },
    right:{
        flex:'1 1 auto'
    }
}))

function listPage(props) {

    const classes = useStyles();

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        Kim Taehyung
                    </Grid>

                    <Grid item className={classes.right}>
                       jk
                    </Grid>
                    
                </Grid>
            </Container>
        </Box>

    );
}

export default listPage;