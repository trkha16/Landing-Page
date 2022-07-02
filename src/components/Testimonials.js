import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import img1 from "../img/client1.jpg";
import img2 from "../img/client2.jpg";
import img3 from "../img/client3.jpg";
import img4 from "../img/client4.jpg";
import img5 from "../img/client5.jpg";
import img6 from "../img/client6.jpg";

const useStyles = makeStyles({
    root: {
        width: "100%",
        background: "#f6f6f6",
    },
    container: {
        padding: "5% 10%",
    },
    titleContainer: {
        marginBottom: "7%",
        "& h2": {
            position: "relative",
            fontSize: "36px",
            fontWeight: 800,
            color: "#333",
            textTransform: "uppercase",
            "&::after": {
                position: "absolute",
                content: "''",
                background:
                    "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
                height: "4px",
                width: "60px",
                bottom: "-0.7rem",
                left: "50%",
                marginLeft: "-30px",
            },
        },
    },
    imgContainer: {
        display: "block",
        float: "left",
        marginRight: "15px",
        "& img": {
            borderRadius: 999,
        },
    },
    clientContainer: {
        padding: "2%",
    },
    clientContents: {
        overflow: "hidden",
        marginTop: "-10%",
        "& h6": {
            fontSize: "14px",
            color: "grey",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "1.5",
            textAlign: "left !important",
            overflow: "hidden",
            marginBottom: "0px",
        },
        "& p": {
            color: "#666666",
            fontSize: "15px",
            fontWeight: 600,
            textAlign: "left !important",
        },
    },
});

export default function Testimonials() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.titleContainer}>
                    <h2>what our clients say</h2>
                </div>
                <Grid container>
                    {clients.map((item) => (
                        <Grid item md={4} className={classes.clientContainer}>
                            <div className={classes.imgContainer}>
                                <img src={item.url} alt="Img" />
                            </div>
                            <div className={classes.clientContents}>
                                <h6>{item.statement}</h6>
                                <p>- {item.name}</p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

const clients = [
    {
        id: 1,
        statement:
            '""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""',
        name: "John Doe",
        url: img1,
    },
    {
        id: 2,
        statement:
            '""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""',
        name: "Johnathan Doe",
        url: img2,
    },
    {
        id: 3,
        statement:
            '""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""',
        name: "John Doe",
        url: img3,
    },
    {
        id: 4,
        statement:
            '""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""',
        name: "Johnathan Doe",
        url: img4,
    },
    {
        id: 5,
        statement:
            '""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""',
        name: "John Doe",
        url: img5,
    },
    {
        id: 6,
        statement:
            '""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""',
        name: "Johnathan Doe",
        url: img6,
    },
];
