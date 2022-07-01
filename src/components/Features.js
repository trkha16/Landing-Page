import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles({
    features: {
        backgroundColor: "#f6f6f6",
        marginTop: "64px",
    },
    container: {},
    title: {
        "& h2": {
            position: "relative",
            textTransform: "uppercase",
            fontWeight: "800",
            fontSize: "36px",
            color: "#333",
            textAlign: "center",
            paddingBottom: "10px",
            marginTop: "100px",
            marginBottom: "70px",
            "&::after": {
                position: "absolute",
                content: "''",
                background:
                    "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
                height: "4px",
                width: "60px",
                bottom: "0",
                marginLeft: "-30px",
                left: "50%",
            },
        },
    },
    contentContainer: {
        width: "1170px",
        margin: "0 auto",
        paddingBottom: "50px",
    },
    content: {
        "& h3": {
            fontSize: "20px",
            fontWeight: 600,
            color: "#333",
        },
        "& p": {
            color: "#777777",
            fontSize: "15px",
        },
    },
    icon: {
        fontSize: 40,
        background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
        borderRadius: 999,
        padding: 20,
        color: "#fff",
        textAlign: "center",
    },
});

function Features() {
    const classes = useStyles();

    return (
        <div id="features" className={classes.features}>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.title}>
                    <h2>features</h2>
                </Grid>
                <Grid
                    container
                    spacing={6}
                    className={classes.contentContainer}
                >
                    <Grid item xs={12} md={3} className={classes.content}>
                        <PeopleIcon className={classes.icon} fontSize="small" />
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet placerat facilisis felis
                            mi in tempus eleifend pellentesque natoque etiam.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.content}>
                        <PeopleIcon className={classes.icon} />
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet placerat facilisis felis
                            mi in tempus eleifend pellentesque natoque etiam.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.content}>
                        <PeopleIcon className={classes.icon} />
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet placerat facilisis felis
                            mi in tempus eleifend pellentesque natoque etiam.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.content}>
                        <PeopleIcon className={classes.icon} />
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet placerat facilisis felis
                            mi in tempus eleifend pellentesque natoque etiam.
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Features;
