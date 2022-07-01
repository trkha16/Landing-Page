import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import {
    AirplanemodeActive,
    Cloud,
    Facebook,
    PieChart,
    ShoppingCart,
    Translate,
} from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
        width: "100%",
        background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
        color: "white",
    },
    container: {
        padding: "5% 10%",
    },
    titleContainer: {
        "& h2": {
            position: "relative",
            fontSize: "36px",
            fontWeight: 800,
            textTransform: "uppercase",
            "&::after": {
                position: "absolute",
                content: "''",
                background: "rgba(255,255,255,.5)",
                height: "4px",
                width: "60px",
                bottom: "-0.7rem",
                left: "50%",
                marginLeft: "-30px",
            },
        },
        "& p": {
            color: "rgba(255,255,255,.75)",
            fontSize: "16px",
        },
    },
    itemContainer: {
        padding: "3%",
        "& h4": {
            fontSize: "20px",
            fontWeight: 500,
        },
        "& p": {
            fontSize: "14px",
            color: "rgba(255,255,255,.75)",
            lineHeight: "1.5",
            textAlign: "center",
        },
    },
    icon: {
        "& svg": {
            fontSize: "42px",
            background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
            borderRadius: 999,
            padding: "2.2rem",
            textAlign: "center",
            boxShadow: "10px 10px 10px rgb(0 0 0 / 5%)",
        },
    },
});

export default function OurService() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.titleContainer}>
                    <h2>our services</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        duis sed dapibus leonec.
                    </p>
                </div>
                <Grid container className={classes.itemContainer} spacing={3}>
                    {ServiceItems.map((item) => (
                        <Grid item xs={12} md={4}>
                            <div className={classes.icon}>{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

const ServiceItems = [
    {
        id: 1,
        icon: <Facebook />,
        title: "Lorem ipsum dolor",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
        id: 2,
        icon: <ShoppingCart />,
        title: "Consectetur adipiscing",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
        id: 3,
        icon: <Cloud />,

        title: "Lorem ipsum dolor",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
        id: 4,
        icon: <Translate />,

        title: "Consectetur adipiscing",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
        id: 5,
        icon: <AirplanemodeActive />,

        title: "Lorem ipsum dolor",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
        id: 6,
        icon: <PieChart />,

        title: "Consectetur adipiscing",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
];
