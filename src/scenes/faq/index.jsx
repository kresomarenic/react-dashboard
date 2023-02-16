import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme";


const Faq = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently asked questions" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question 1
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo, esse facere.
                    Id commodi libero vero adipisci obcaecati animi eligendi eius sint sequi culpa dicta distinctio aut, ab quam alias dolores?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question 2
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo, esse facere.
                    Id commodi libero vero adipisci obcaecati animi eligendi eius sint sequi culpa dicta distinctio aut, ab quam alias dolores?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question 3
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo, esse facere.
                    Id commodi libero vero adipisci obcaecati animi eligendi eius sint sequi culpa dicta distinctio aut, ab quam alias dolores?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question 4
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo, esse facere.
                    Id commodi libero vero adipisci obcaecati animi eligendi eius sint sequi culpa dicta distinctio aut, ab quam alias dolores?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question 5
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo, esse facere.
                    Id commodi libero vero adipisci obcaecati animi eligendi eius sint sequi culpa dicta distinctio aut, ab quam alias dolores?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question 6
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo, esse facere.
                    Id commodi libero vero adipisci obcaecati animi eligendi eius sint sequi culpa dicta distinctio aut, ab quam alias dolores?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question 7
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo, esse facere.
                    Id commodi libero vero adipisci obcaecati animi eligendi eius sint sequi culpa dicta distinctio aut, ab quam alias dolores?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question 8
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo, esse facere.
                    Id commodi libero vero adipisci obcaecati animi eligendi eius sint sequi culpa dicta distinctio aut, ab quam alias dolores?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question 9
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo, esse facere.
                    Id commodi libero vero adipisci obcaecati animi eligendi eius sint sequi culpa dicta distinctio aut, ab quam alias dolores?
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  );
}

export default Faq;