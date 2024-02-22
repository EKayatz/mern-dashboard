import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

// import { logo, yariga } from "../../../assets";
import yariga from "../../../assets/yariga.svg";
import logo from "../../../assets/logo.svg";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Yariga" width="28px" />
        ) : (
          <img src={yariga} alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};
