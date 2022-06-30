import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import img from "../img/about.jpg";

const useStyles = makeStyles({
    container: {
        paddingTop: "100px",
        height: "600px",
        "& img": {
            width: "520px",
            height: "347px",
            marginRight: "-150px",
        },
    },
    content: {
        "& h2": {
            position: "relative",
            left: "0",
            textTransform: "uppercase",
            textAlign: "left",
            fontWeight: "800",
            fontSize: "36px",
            color: "#333",
            paddingBottom: "10px",
            marginBottom: "auto",
            marginTop: "-10px",
            "&::before": {
                position: "absolute",
                content: "''",
                background:
                    "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
                height: "4px",
                width: "60px",
                bottom: "0",
            },
        },
        "& p": {
            width: "555px",
            margin: "30px 0",
            fontSize: "15px",
            textAlign: "left",
            lineHeight: "24px",
            color: "#777777",
        },
        "& h3": {
            fontSize: "23px",
            color: "#333333",
            textAlign: "left",
        },
    },
});

function About() {
    const classes = useStyles();

    return (
        <div id="features" className={classes.features}>
            <Grid container className={classes.container}>
                <Grid item md={6}>
                    <img src={img} alt="about-img"></img>
                </Grid>
                <Grid item md={6} className={classes.content}>
                    <h2>about us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h3>Why Choose Us?</h3>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
