import { Box, Grid, Typography } from "@mui/material";
import myImage from "../assets/ensolversIcon.png";

export interface ProfessionalExperienceCardProps {
  position: string;
  company: string;
  companyLogoURL: string;
  startDate: string;
  endDate: string;
  description: string;
}

const ProfessionalExperienceCard: React.FC<ProfessionalExperienceCardProps> = ({
  position,
  company,
  companyLogoURL,
  startDate,
  endDate,
  description,
}) => {
  return (
    <Box sx={{ padding: "1rem 5rem", width: "75%" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <img
            src={companyLogoURL}
            alt="Company logo"
            style={{
              width: "5rem",
              height: "5rem",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="h6" sx={{ color: "white" }}>
            {position}
          </Typography>
          <Typography sx={{ color: "white", marginLeft: 2, fontSize: '1rem' }}>
            {startDate} - {endDate}
          </Typography>
          <Typography sx={{ color: "white", marginLeft: 2, fontSize: '1rem' }}>
            {company}
          </Typography>
          <Typography
            sx={{ color: "white", marginLeft: 2, paddingTop: "1rem" }}
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProfessionalExperienceCard;
