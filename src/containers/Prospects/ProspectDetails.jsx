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
const ProspectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { prospect, getProspectById } = useProspects();

  useEffect(() => {
    getProspectById(id);
  }, []);

  useEffect(() => {
    console.log(prospect);
  }, [prospect]);

  return (
    <ProspectsActionsContainer>
      <FormContainertProspectsActionDiv>
        {" "}
        <PastPageDataContainerAndTitle>
          <PastPageContainer>
            <BreadcumsContainer>
              <BreadcrumbsMui
                title="Prospect"
                prev="Prospects"
                path={"/home/prospects"}
              ></BreadcrumbsMui>
            </BreadcumsContainer>
          </PastPageContainer>
          <TitleContainer>
            {prospect.name ? (
              <Title>
                {prospect.name} {prospect.lastName}{" "}
                <EditIcon
                  onClick={() => navigate(`/edit-prospect/${id}`)}
                  sx={{ cursor: "pointer", marginLeft: ".3rem" }}
                />
              </Title>
            ) : null}
          </TitleContainer>
        </PastPageDataContainerAndTitle>
        <FormSectionsContainer>
          <LeftSectionContainer>
            <TextField
              autoComplete="given-name"
              id="firstName"
              helperText="Name"
              autoFocus
              name="name"
              variant="standard"
              fullWidth
              value={prospect?.name}
              disabled={true}
            />

            <TextField
              autoComplete="age"
              id="Age"
              helperText="Age"
              autoFocus
              name="age"
              variant="standard"
              fullWidth
              value={prospect?.age}
              disabled={true}
            />
            <TextField
              autoComplete="given-email"
              id="email"
              helperText="Email"
              autoFocus
              name="email"
              variant="standard"
              fullWidth
              value={prospect?.email}
              disabled={true}
            />

            <TextField
              autoComplete="gender"
              id="gender"
              helperText="Gender"
              autoFocus
              name="gender"
              variant="standard"
              fullWidth
              value={prospect?.gender}
              disabled={true}
            />

            <TextField
              variant="standard"
              fullWidth
              id="occupation"
              helperText="Occupation"
              autoComplete="occupation"
              name="occupation"
              value={prospect?.occupation}
              disabled={true}
            />
            <TextField
              variant="standard"
              fullWidth
              id="instagram"
              helperText="Instagram"
              autoComplete="instagram"
              name="instagram"
              value={prospect?.instagram}
              disabled={true}
            />
            <TextField
              variant="standard"
              fullWidth
              id="linkedin"
              helperText="Linkedin"
              autoComplete="linkedin"
              name="linkedin"
              value={prospect?.linkedin}
              disabled={true}
            />
            <TextField
              variant="standard"
              fullWidth
              id="facebook"
              helperText="Facebook"
              autoComplete="facebook"
              name="facebook"
              value={prospect?.facebook}
              disabled={true}
            />
            <TextField
              variant="standard"
              fullWidth
              id="tiktok"
              helperText="Tiktok"
              autoComplete="tiktok"
              name="tiktok"
              value={prospect?.tiktok}
              disabled={true}
            />
          </LeftSectionContainer>
          <RightSectionContainer>
            <TextField
              fullWidth
              helperText="Last name"
              variant="standard"
              id="lastname"
              autoComplete="new-lastname"
              name="lastName"
              value={prospect?.lastName}
              disabled={true}
            />
            <TextField
              variant="standard"
              fullWidth
              id="cellphone"
              helperText="Cellphone"
              autoComplete="cellphone"
              name="cellphone"
              value={prospect?.cellphone}
              disabled={true}
            />
            <TextField
              variant="standard"
              fullWidth
              id="country"
              helperText="Country"
              autoComplete="country"
              name="country"
              value={prospect?.country}
              disabled={true}
            />
            <TextField
              variant="standard"
              id="outlined-multiline-static"
              helperText="Gender comments..."
              multiline
              rows={2}
              fullWidth
              name="genderComments"
              value={prospect?.genderComments}
              disabled={true}
            />

            <TextField
              variant="standard"
              fullWidth
              id="interestLevel"
              helperText="Interest level"
              autoComplete="interestLevel"
              name="interestLevel"
              disabled={true}
              value={prospect?.interestLevel}
            />

            <TextField
              variant="standard"
              fullWidth
              id="reasonForContact"
              helperText="Reason for contact"
              autoComplete="reasonForContact"
              name="reasonForContact"
              disabled={true}
              value={prospect?.reasonForContact}
            />
            <TextField
              variant="standard"
              fullWidth
              id="user"
              helperText="User"
              autoComplete="user"
              name="user"
              disabled={true}
              value={prospect?.user?.name + " " + prospect?.client?.lastName}
            />
            <TextField
              variant="standard"
              fullWidth
              id="client"
              helperText="Client"
              autoComplete="client"
              name="client"
              disabled={true}
              value={prospect?.client?.bussinesName}
            />

            <TextField
              id="outlined-multiline-static"
              helperText="Comments"
              multiline
              rows={6}
              fullWidth
              name="comments"
              variant="standard"
              disabled={true}
              value={prospect?.comments}
            />
          </RightSectionContainer>
        </FormSectionsContainer>
      </FormContainertProspectsActionDiv>
    </ProspectsActionsContainer>
  );
};

export default ProspectDetails;
