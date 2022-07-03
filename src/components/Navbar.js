import { makeStyles } from "@material-ui/styles";

import { AppBar, Toolbar, Grid, Link } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "block",
    },
    navbar: {
        width: "100%",
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
        <div id="navbar" className={classes.root}>
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
                            {navBarItem.map((item) => (
                                <Grid item key={item.id}>
                                    <Link to={item.src} underline="none">
                                        {item.content}
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;

const navBarItem = [
    {
        id: 1,
        src: "#",
        content: "features",
    },
    {
        id: 2,
        src: "#",
        content: "about",
    },
    {
        id: 3,
        src: "#",
        content: "services",
    },
    {
        id: 4,
        src: "#",
        content: "gallery",
    },
    {
        id: 5,
        src: "#",
        content: "testimonials",
    },
];
