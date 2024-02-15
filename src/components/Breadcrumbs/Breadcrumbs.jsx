import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const BreadcrumbsMui = ({ path, title, prev, secondTitle }) => {
  const navigate = useNavigate();

  return (
    <div role="presentation" style={{ cursor: "pointer" }}>
      <Breadcrumbs sx={{ fontSize: "14px" }} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" onClick={() => navigate(path)}>
          {prev}
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
      <h3 style={{ margin: "0px", color: "#384764" }}>
        {secondTitle ? secondTitle : title}
      </h3>
    </div>
  );
};

export default BreadcrumbsMui;
