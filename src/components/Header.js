import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
        marginTop: "64px",
        backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
    },
    container: {
        height: "100%",
        padding: "12% 0px",
    },
    title: {
        paddingLeft: "22.3%",
        paddingRight: "22.3%",
        "& h1": {
            fontSize: "500%",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "0px",
        },
        "& p": {
            fontSize: "20px",
            fontWeight: 300,
            marginBottom: "8%",
            lineHeight: "30px",
        },
    },
    btn: {
        padding: "2% 5%",
        borderRadius: 999,
        color: "#fff",
        fontSize: "15px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        background: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
        "&:hover": {
            cursor: "pointer",
            background: "#6372ff",
        },
    },
});

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1>we are a landing page</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis sed dapibus leo nec ornare diam sed commodo nibh
                        ante facilisis bibendum.
                    </p>
                    <Link className={classes.btn} underline="none">
                        learn more
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
