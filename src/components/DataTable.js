import React from "react";
import MUIDataTable from "mui-datatables";
import { useNavigate } from "react-router-dom";

const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "NY"],
  ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

export default function DataTable() {
  let navigate = useNavigate();
  const onRowClick = (rowData, rowMeta) => {
    const { dataIndex } = rowMeta;
    navigate({ pathname: `/employee/${dataIndex}` });
  };

  return (
    <>
      <MUIDataTable
        data={datatableData}
        columns={[
          {
            name: "Name",
            options: {
              setCellProps: () => {
                return {
                  style: {
                    padding: "10px 15px",
                  },
                };
              },
            },
          },
          {
            name: "Company",
            options: {
              setCellProps: () => {
                return {
                  style: {
                    padding: "10px 15px",
                  },
                };
              },
            },
          },
          {
            name: "City",
            options: {
              setCellProps: () => {
                return {
                  style: {
                    padding: "10px 15px",
                  },
                };
              },
            },
          },
          {
            name: "State",
            options: {
              setCellProps: () => {
                return {
                  style: {
                    padding: "10px 15px",
                  },
                };
              },
            },
          },
        ]}
        options={{
          filter: false,
          selectableRowsHideCheckboxes: true,
          selectableRowsHeader: false,
          selectableRows: "none",
          responsive: "simple",
          onRowClick: onRowClick,
        }}
      />
    </>
  );
}
