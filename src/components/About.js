import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

import img from "../img/about.jpg";

const useStyles = makeStyles({
    root: {
        width: "100%",
        margin: 0,
    },
    container: {
        "& img": {
            width: "100%",
        },
        padding: "7% 12%",
        width: "100%",
    },
    content: {
        "& h2": {
            position: "relative",
            marginTop: 0,
            textTransform: "uppercase",
            textAlign: "left",
            fontWeight: 800,
            fontSize: "36px",
            color: "#333",
            "&::before": {
                position: "absolute",
                content: "''",
                background:
                    "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
                height: "4px",
                width: "60px",
                bottom: "-0.7rem",
            },
        },

        "& h3": {
            fontWeight: 600,
            fontSize: "23px",
            color: "#333333",
            textAlign: "left",
        },
    },
    paragraph: {
        margin: "30px 0",
        fontSize: "15px",
        textAlign: "left",
        lineHeight: "24px",
        color: "#777777",
    },
    leftItem: {
        paddingRight: "5%",
    },
    whyChooseText: {
        padding: "0px 2%",
        "& p": {
            margin: "0px",
            textAlign: "left",
            fontSize: "14px",
            fontWeight: 400,
            color: "#777777",
        },
        "& div": {
            display: "flex",
            alignItems: "center",
            margin: "0.6rem 0px",
            padding: "0px 15px",
        },
    },
    icon: {
        color: "#5ca9fb",
        fontSize: "16px",
        fontWeight: 500,
        paddingRight: "8px",
    },
});

function About() {
    const classes = useStyles();

    return (
        <div id="features" className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item md={6} className={classes.leftItem}>
                    <img src={img} alt="about-img"></img>
                </Grid>
                <Grid item md={6} className={classes.content}>
                    <h2>about us</h2>
                    <p className={classes.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h3>Why Choose Us?</h3>

                    <Grid container>
                        <Grid item md={6} className={classes.whyChooseText}>
                            {whyChoose1.map((item) => (
                                <div>
                                    <CheckIcon className={classes.icon} />
                                    <p key={item.id}>{item.content}</p>
                                </div>
                            ))}
                        </Grid>
                        <Grid item md={6} className={classes.whyChooseText}>
                            {whyChoose2.map((item) => (
                                <div>
                                    <CheckIcon className={classes.icon} />
                                    <p key={item.id}>{item.content}</p>
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;

const whyChoose1 = [
    {
        id: 1,
        content: "Lorem ipsum dolor",
    },
    {
        id: 2,
        content: "Tempor incididunt",
    },
    {
        id: 3,
        content: "Lorem ipsum dolor",
    },
    {
        id: 4,
        content: "Incididunt ut labore",
    },
];

const whyChoose2 = [
    {
        id: 1,
        content: "Aliquip ex ea commodo",
    },
    {
        id: 2,
        content: "Lorem ipsum dolor",
    },
    {
        id: 3,
        content: "Exercitation ullamco",
    },
    {
        id: 4,
        content: "Lorem ipsum dolor",
    },
];
