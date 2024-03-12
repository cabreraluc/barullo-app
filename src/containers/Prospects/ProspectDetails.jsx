import {
  ProspectsActionsContainer,
  FormContainertProspectsActionDiv,
  PastPageDataContainerAndTitle,
  Title,
  LeftSectionContainer,
  RightSectionContainer,
  FormSectionsContainer,
  TitleContainer,
  PastPageContainer,
  MidSection,
  FormContainertProspectsAction,
} from "./prospectsStyles";
import { TableCell } from "@mui/material";
import TextField from "@mui/material/TextField";
import BreadcrumbsMui from "../../components/Breadcrumbs/Breadcrumbs";
import EditIcon from "@mui/icons-material/Edit";
import { BreadcumsContainer } from "../../components/Global/GlobalStyles";
import { useNavigate } from "react-router-dom";
import useProspects from "./useProspects";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../Login/useAuth";
import useUsers from "../Users/useUsers";
import InputLabel from "@mui/material/InputLabel";

const ProspectDetails = () => {
  const { getUserById, user } = useUsers();
  const userLocalStorage = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const { prospect, getProspectById } = useProspects();

  useEffect(() => {
    getProspectById(id);
    getUserById(userLocalStorage.id);
  }, []);

  return (
    <ProspectsActionsContainer>
      <FormContainertProspectsAction style={{ paddingBottom: "3rem" }}>
        {" "}
        <PastPageDataContainerAndTitle>
          <PastPageContainer>
            <BreadcumsContainer>
              <BreadcrumbsMui
                title="Prospect"
                prev="Prospects"
                path={"/home/prospects"}
                secondPath={"/home/calendar"}
                secondPrev="Calendar"
              ></BreadcrumbsMui>
            </BreadcumsContainer>
          </PastPageContainer>
          <TitleContainer>
            {prospect.name ? (
              <Title>
                {prospect.name} {prospect.lastName}{" "}
                {user.role !== "Client" ? (
                  <EditIcon
                    onClick={() => navigate(`/edit-prospect/${id}`)}
                    sx={{ cursor: "pointer", marginLeft: ".3rem" }}
                  />
                ) : null}
              </Title>
            ) : null}
          </TitleContainer>
        </PastPageDataContainerAndTitle>
        <FormSectionsContainer>
          <LeftSectionContainer>
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Name
            </InputLabel>

            <TextField
              autoComplete="given-name"
              id="firstName"
              autoFocus
              name="name"
              variant="standard"
              fullWidth
              value={prospect.name}
              disabled={true}
            />
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Last name
            </InputLabel>

            <TextField
              fullWidth
              variant="standard"
              id="lastname"
              autoComplete="new-lastname"
              name="lastName"
              value={prospect.lastName}
              disabled={true}
            />
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Age
            </InputLabel>

            <TextField
              autoComplete="age"
              id="Age"
              disabled={true}
              autoFocus
              name="age"
              variant="standard"
              fullWidth
              value={prospect.age}
            />
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Email
            </InputLabel>

            <TextField
              autoComplete="given-email"
              id="email"
              disabled={true}
              autoFocus
              name="email"
              variant="standard"
              fullWidth
              value={prospect.email}
            />
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Cellphone
            </InputLabel>

            <TextField
              disabled={true}
              variant="standard"
              fullWidth
              id="cellphone"
              autoComplete="cellphone"
              name="cellphone"
              value={prospect.cellphone}
            />
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Country
            </InputLabel>

            <TextField
              fullWidth
              variant="standard"
              id="lastname"
              autoComplete="new-lastname"
              disabled={true}
              name="lastName"
              value={prospect.country}
            />
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Ocupation
            </InputLabel>

            <TextField
              variant="standard"
              fullWidth
              disabled={true}
              id="occupation"
              autoComplete="occupation"
              name="occupation"
              value={prospect.occupation}
            />
          </LeftSectionContainer>
          <MidSection>
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Gender
            </InputLabel>
            <TextField
              variant="standard"
              fullWidth
              id="gender"
              autoComplete="gender"
              disabled={true}
              name="gender"
              value={prospect.gender}
            />{" "}
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Gender comments
            </InputLabel>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={2}
              disabled={true}
              fullWidth
              name="genderComments"
              value={prospect.genderComments}
            />{" "}
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Instagram
            </InputLabel>
            <TextField
              variant="standard"
              fullWidth
              disabled={true}
              id="instagram"
              autoComplete="instagram"
              name="instagram"
              value={prospect.instagram}
            />{" "}
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Linkedin
            </InputLabel>
            <TextField
              variant="standard"
              fullWidth
              disabled={true}
              id="linkedin"
              autoComplete="linkedin"
              name="linkedin"
              value={prospect.linkedin}
            />{" "}
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Facebook
            </InputLabel>
            <TextField
              variant="standard"
              fullWidth
              id="facebook"
              disabled={true}
              autoComplete="facebook"
              name="facebook"
              value={prospect.facebook}
            />{" "}
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Tiktok
            </InputLabel>
            <TextField
              variant="standard"
              fullWidth
              id="tiktok"
              disabled={true}
              autoComplete="tiktok"
              name="tiktok"
              value={prospect.tiktok}
            />
          </MidSection>
          <RightSectionContainer>
            {/* <FormGroup>
              <Typography variant="overline" display="block" gutterBottom>
                Select services
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    name="closer"
                    checked={prospectInfo.closer}
                    onChange={(e) => onCheckChange(e)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Closer"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="setter"
                    checked={prospectInfo.setter}
                    onChange={(e) => onCheckChange(e)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Setter"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="growthPartner"
                    checked={prospectInfo.growthPartner}
                    onChange={(e) => onCheckChange(e)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Growth partner"
              />
            </FormGroup> */}
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Interest level
            </InputLabel>
            <TextField
              variant="standard"
              fullWidth
              id="tiktok"
              disabled={true}
              autoComplete="tiktok"
              name="tiktok"
              value={prospect.interestLevel}
            />
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Reason for contact
            </InputLabel>
            <TextField
              variant="standard"
              disabled={true}
              fullWidth
              id="reasonForContact"
              autoComplete="reasonForContact"
              name="reasonForContact"
              value={prospect.reasonForContact}
            />{" "}
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Client
            </InputLabel>
            <TextField
              variant="standard"
              fullWidth
              id="reasonForContact"
              disabled={true}
              autoComplete="reasonForContact"
              name="reasonForContact"
              value={prospect?.client?.bussinesName}
            />{" "}
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              User
            </InputLabel>
            <TextField
              variant="standard"
              fullWidth
              id="reasonForContact"
              disabled={true}
              autoComplete="reasonForContact"
              name="reasonForContact"
              value={prospect?.user?.name + " " + prospect?.user?.lastName}
            />{" "}
            <InputLabel id="rol-label" sx={{ marginBottom: "-1rem" }}>
              Comments
            </InputLabel>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={6}
              fullWidth
              disabled={true}
              name="comments"
              value={prospect.comments}
            />
          </RightSectionContainer>
        </FormSectionsContainer>
      </FormContainertProspectsAction>
    </ProspectsActionsContainer>
  );
};

export default ProspectDetails;
