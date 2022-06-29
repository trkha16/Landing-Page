import { makeStyles } from "@material-ui/styles";

import { AppBar, Toolbar, Grid, Link } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: "#fff",
        "& a": {
            textDecoration: "none",
            textTransform: "uppercase",
            "&:hover": {
                cursor: "pointer",
            },
        },
    },
    brand: {
        color: "#333",
        fontSize: "24px",
        fontWeight: "700",
    },
    navContent: {
        "& a": {
            color: "#555",
            fontSize: "15px",
            fontWeight: "400",
            "&:hover": {
                borderBottom: "2px solid #608dfd",
            },
        },
    },
});

function Navbar() {
    const classes = useStyles();

    return (
        <div id="navbar">
            <AppBar position="fixed" className={classes.navbar}>
                <Toolbar>
                    <Grid container>
                        <Grid item md={6}>
                            <Link
                                className={classes.brand}
                                to="#"
                                underline="none"
                            >
                                my landing page
                            </Link>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            md={6}
                            className={classes.navContent}
                            alignContent="center"
                        >
                            <Grid item>
                                <Link to="#" underline="none">
                                    features
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="#" underline="none">
                                    about
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="#" underline="none">
                                    services
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="#" underline="none">
                                    gallery
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="#" underline="none">
                                    testimonials
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
