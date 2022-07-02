import { makeStyles } from "@material-ui/core";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    container: {
        padding: "2% 10%",
        "& p": {
            fontSize: "14px",
            color: "#888",
            display: "inline",
        },
    },
    link: {
        color: "#608dfd",
    },
});

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <p>© 2020 Issaaf Kattan React Land Page Template. Design by </p>
                <Link href="#" className={classes.link}>
                    TemplateWire
                </Link>
            </div>
        </div>
    );
}
