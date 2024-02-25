import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  ProspectsActionsContainer,
  PastPageDataContainerAndTitle,
  Title,
  FormContainertProspectsAction,
  LeftSectionContainer,
  RightSectionContainer,
  FormSectionsContainer,
  TitleContainer,
  PastPageContainer,
  ActionButtonContainer,
  ButtonsContainer,
} from "./prospectsStyles";
import {
  ActionButton,
  CancelActionButton,
  BreadcumsContainer,
} from "../../components/Global/GlobalStyles";
import BreadcrumbsMui from "../../components/Breadcrumbs/Breadcrumbs";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProspects from "./useProspects";
import { prospectValidations } from "./prospectValidations";
import useNotistack from "../../components/Notistack/useNotistack";
import { Autocomplete } from "@mui/material";
import useClients from "../Clients/useClients";
import useUsers from "../Users/useUsers";
import { createFilterOptions } from "@mui/material";
import Button from "@mui/material/Button";
const AddProspect = () => {
  const filter = createFilterOptions();
  const { getUsers, allUsers } = useUsers();
  const { getClients, allClients } = useClients();
  const genderArray = ["Male", "Female", "Other"];
  const interestArray = ["1", "2", "3", "4", "5"];
  const allCountriesArray = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const { addProspect, isLoading } = useProspects();
  const [prospectInfo, setProspectInfo] = useState({
    name: "",
    lastName: "",
    age: "",
    cellphone: "",
    email: "",
    statusOfProspect: "",
    country: "",
    gender: "",
    genderComments: "",
    interestLevel: "",
    reasonForContact: "",
    occupation: "",
    instagram: "",
    linkedin: "",
    facebook: "",
    tiktok: "",
    comments: "",
    client: "",
    user: "",
  });

  const { showNotification } = useNotistack();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProspectInfo({ ...prospectInfo, [name]: value });
  };

  const onCheckChange = (e) => {
    const { name } = e.target;
    if (prospectInfo[name] !== "checked") {
      setProspectInfo({ ...prospectInfo, [name]: "checked" });
    } else {
      setProspectInfo({ ...prospectInfo, [name]: "" });
    }
  };

  const handleSetErrors = () => {
    errors[0]?.forEach((error) => {
      showNotification(error, "error");
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = prospectValidations(prospectInfo, "addProspect");

    if (response.valid) {
      addProspect(prospectInfo, setErrors);
    } else {
      setErrors(response);
    }
  };

  useEffect(() => {
    getClients();
    getUsers();
  }, []);

  useEffect(() => {
    handleSetErrors(errors);
  }, [errors]);

  const navigate = useNavigate();
  return (
    <ProspectsActionsContainer>
      <FormContainertProspectsAction
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
        <PastPageDataContainerAndTitle>
          <PastPageContainer>
            <BreadcumsContainer>
              <BreadcrumbsMui
                title="Add prospect"
                prev="Prospects"
                path={"/home/prospects"}
              ></BreadcrumbsMui>
            </BreadcumsContainer>
          </PastPageContainer>
          <TitleContainer>
            <Title>Add prospect</Title>
          </TitleContainer>
        </PastPageDataContainerAndTitle>
        <FormSectionsContainer>
          <LeftSectionContainer>
            <TextField
              autoComplete="given-name"
              id="firstName"
              label="Name"
              autoFocus
              name="name"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.name}
              value={prospectInfo.name}
            />

            <TextField
              autoComplete="age"
              id="Age"
              label="Age"
              autoFocus
              name="age"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.age}
              value={prospectInfo.age}
            />
            <TextField
              autoComplete="given-email"
              id="email"
              label="Email"
              autoFocus
              name="email"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.email}
              value={prospectInfo.email}
            />

            <FormControl
              sx={{
                width: "100%",
              }}
            >
              <InputLabel id="rol-label">Gender</InputLabel>
              <Select
                MenuProps={{ disableScrollLock: true }}
                // sx={{
                //   input: {
                //     color: `${themeMui.palette.inputText.main}`,
                //   },
                //   width: "497px",
                // }}
                // SelectDisplayProps={{
                //   style: { color: `${themeMui.palette.inputText.main}` },
                // }}
                // labelId="rol-label"
                onChange={handleChange}
                name="gender"
                error={errors[1]?.gender}
                variant="standard"
              >
                {genderArray.map((g) => {
                  return <MenuItem value={g}>{g}</MenuItem>;
                })}
              </Select>
            </FormControl>

            <TextField
              variant="standard"
              fullWidth
              id="occupation"
              label="Occupation"
              autoComplete="occupation"
              name="occupation"
              onChange={handleChange}
              error={errors[1]?.occupation}
              value={prospectInfo.occupation}
            />
            <TextField
              variant="standard"
              fullWidth
              id="instagram"
              label="Instagram"
              autoComplete="instagram"
              name="instagram"
              onChange={handleChange}
              error={errors[1]?.instagram}
              value={prospectInfo.instagram}
            />
            <TextField
              variant="standard"
              fullWidth
              id="linkedin"
              label="Linkedin"
              autoComplete="linkedin"
              name="linkedin"
              onChange={handleChange}
              error={errors[1]?.linkedin}
              value={prospectInfo.linkedin}
            />
            <TextField
              variant="standard"
              fullWidth
              id="facebook"
              label="Facebook"
              autoComplete="facebook"
              name="facebook"
              onChange={handleChange}
              error={errors[1]?.facebook}
              value={prospectInfo.facebook}
            />
            <TextField
              variant="standard"
              fullWidth
              id="tiktok"
              label="Tiktok"
              autoComplete="tiktok"
              name="tiktok"
              onChange={handleChange}
              error={errors[1]?.tiktok}
              value={prospectInfo.tiktok}
            />
          </LeftSectionContainer>
          <RightSectionContainer>
            <TextField
              fullWidth
              label="Last name"
              variant="standard"
              id="lastname"
              autoComplete="new-lastname"
              name="lastName"
              onChange={handleChange}
              error={errors[1]?.lastName}
              value={prospectInfo.lastName}
            />
            <TextField
              variant="standard"
              fullWidth
              id="cellphone"
              label="Cellphone"
              autoComplete="cellphone"
              name="cellphone"
              onChange={handleChange}
              error={errors[1]?.cellphone}
              value={prospectInfo.cellphone}
            />
            <Autocomplete
              value={prospectInfo.country}
              onChange={(event, newValue) => {
                setProspectInfo({
                  ...prospectInfo,
                  country: newValue,
                });
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={allCountriesArray}
              getOptionLabel={(option) => {
                if (typeof option === "string") {
                  return option;
                }

                if (option.inputValue) {
                  return option.inputValue;
                }

                return option;
              }}
              renderOption={(props, option) => <li {...props}>{option}</li>}
              freeSolo
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={errors.country}
                  label="Country"
                  variant="standard"
                />
              )}
            />
            <TextField
              id="outlined-multiline-static"
              label="Gender comments..."
              multiline
              rows={2}
              fullWidth
              name="genderComments"
              onChange={handleChange}
              error={errors[1]?.genderComments}
              value={prospectInfo.genderComments}
            />

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

            <FormControl
              sx={{
                width: "100%",
              }}
            >
              <InputLabel id="rol-label">Interest level</InputLabel>
              <Select
                MenuProps={{ disableScrollLock: true }}
                // sx={{
                //   input: {
                //     color: `${themeMui.palette.inputText.main}`,
                //   },
                //   width: "497px",
                // }}
                // SelectDisplayProps={{
                //   style: { color: `${themeMui.palette.inputText.main}` },
                // }}
                // labelId="rol-label"
                onChange={handleChange}
                name="interestLevel"
                error={errors[1]?.interestLevel}
                variant="standard"
              >
                {interestArray.map((il) => {
                  return <MenuItem value={il}>{il}</MenuItem>;
                })}
              </Select>
            </FormControl>

            <TextField
              variant="standard"
              fullWidth
              id="reasonForContact"
              label="Reason for contact"
              autoComplete="reasonForContact"
              name="reasonForContact"
              onChange={handleChange}
              error={errors[1]?.reasonForContact}
              value={prospectInfo.reasonForContact}
            />
            <Autocomplete
              value={prospectInfo.client}
              onChange={(event, newValue) => {
                setProspectInfo({
                  ...prospectInfo,
                  client: newValue,
                });
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={allClients}
              getOptionLabel={(option) => {
                if (typeof option === "string") {
                  return option;
                }

                if (option.inputValue) {
                  return option.inputValue;
                }

                return option.bussinesName;
              }}
              renderOption={(props, option) => (
                <li {...props}>{option.bussinesName}</li>
              )}
              freeSolo
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={errors.client}
                  label="Client"
                  variant="standard"
                />
              )}
            />
            <Autocomplete
              value={prospectInfo.user}
              onChange={(event, newValue) => {
                setProspectInfo({
                  ...prospectInfo,
                  user: newValue,
                });
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={allUsers}
              getOptionLabel={(option) => {
                if (typeof option === "string") {
                  return option;
                }

                if (option.inputValue) {
                  return option.inputValue;
                }

                return option.name + " " + option.lastName;
              }}
              renderOption={(props, option) => (
                <li {...props}>
                  {option.name} {option.lastName}
                </li>
              )}
              freeSolo
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={errors.user}
                  label="Assigned user"
                  variant="standard"
                />
              )}
            />
            <TextField
              id="outlined-multiline-static"
              label="Comments"
              multiline
              rows={6}
              fullWidth
              name="comments"
              onChange={handleChange}
              error={errors[1]?.comments}
              value={prospectInfo.comments}
            />
          </RightSectionContainer>
        </FormSectionsContainer>
        <ActionButtonContainer>
          <ButtonsContainer>
            <Button
              variant="outlined"
              type="submit"
              disabled={isLoading ? true : false}
            >
              Create
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/home/prospects")}
            >
              Cancel
            </Button>
          </ButtonsContainer>
        </ActionButtonContainer>
      </FormContainertProspectsAction>
    </ProspectsActionsContainer>
  );
};

export default AddProspect;
