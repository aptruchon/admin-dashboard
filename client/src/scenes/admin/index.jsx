import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetAdminsQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";

const Admin = () => {
  const { data, isLoading } = useGetAdminsQuery();

  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMIN" subtitle="" />
    </Box>
  );
};

export default Admin;
