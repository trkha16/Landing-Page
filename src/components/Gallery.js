import { Grid, makeStyles } from "@material-ui/core";

import img1 from "../img/gallery1.jpg";
import img2 from "../img/gallery2.jpg";
import img3 from "../img/gallery3.jpg";
import img4 from "../img/gallery4.jpg";
import img5 from "../img/gallery5.jpg";
import img6 from "../img/gallery6.jpg";
import img7 from "../img/gallery7.jpg";
import img8 from "../img/gallery8.jpg";
import img9 from "../img/gallery9.jpg";

const useStyles = makeStyles({
    root: {
        width: "100%",
        background: "#fff",
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
        "& p": {
            color: "#777",
            fontSize: "16px",
        },
    },
    imagesContainer: {
        position: "relative",
        cursor: "pointer",
        "& img": {
            width: "99.9%",
            height: "99.9%",
        },
    },
    textHover: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        background:
            "linear-gradient(to right, rgba(99,114,255,0.8) 0%, rgba(92,169,251,0.8) 100%)",
        opacity: 0,
        transition: "all 0.5s",
        "& h4": {
            color: "#fff",
            fontSize: "18px",
            letterSpacing: "1px",
            fontWeight: 500,
            textTransform: "uppercase",
        },
        "&:hover": {
            opacity: 1,
        },
    },
});

export default function Gallery() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.titleContainer}>
                    <h2>gallery</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        duis sed dapibus leonec.
                    </p>
                </div>
                <Grid container>
                    {images.map((item) => (
                        <Grid
                            item
                            md={4}
                            key={item.id}
                            className={classes.imagesContainer}
                        >
                            <div className={classes.textHover}>
                                <h4>{item.title}</h4>
                            </div>
                            <img src={item.url} alt={item.alt} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

const images = [
    {
        id: 1,
        title: "Image 1",
        alt: "Image 1",
        url: img1,
    },
    {
        id: 2,
        title: "Image 2",
        alt: "Image 2",
        url: img2,
    },
    {
        id: 3,
        title: "Image 3",
        alt: "Image 3",
        url: img3,
    },
    {
        id: 4,
        title: "Image 4",
        alt: "Image 4",
        url: img4,
    },
    {
        id: 5,
        title: "Image 5",
        alt: "Image 5",
        url: img5,
    },
    {
        id: 6,
        title: "Image 6",
        alt: "Image 6",
        url: img6,
    },
    {
        id: 7,
        title: "Image 7",
        alt: "Image 7",
        url: img7,
    },
    {
        id: 8,
        title: "Image 8",
        alt: "Image 8",
        url: img8,
    },
    {
        id: 9,
        title: "Image 9",
        alt: "Image 9",
        url: img9,
    },
];
