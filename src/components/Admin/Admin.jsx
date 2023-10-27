import React from 'react'
import Header from '../Header/Header.jsx'
import { Box, useTheme } from "@mui/material"
import { useGetAdminsQuery } from '../../state/api.js'
import { DataGrid } from '@mui/x-data-grid'

export default function Admin() {
    const theme = useTheme()

    const { data, isLoading } = useGetAdminsQuery()

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1
        },
        {
            field: "name",
            headerName: "Name",
            flex: .5
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: .5,
            renderCell: (params) => {
                return params.value.replace(/^(\d{3})(\d{3})(\d{3})/, "($1)$2-$3")
            }
        },
        {
            field: "country",
            headerName: "Country",
            flex: .4
        },
        {
            field: "occupation",
            headerName: "Occupation",
            flex: 1
        },
        {
            field: "role",
            headerName: "Role",
            flex: .5
        },
    ]
    return (
        <Box m="1.5rem 2.5rem" >
            <Header title="ADMINS" subTitle="Managing admins and list of admins" />
            <Box height="75vh" mt="40px"  width="97%"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: theme.palette.primary.light,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderTop: "none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${theme.palette.secondary[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={data || []}
                    columns={columns}

                />
            </Box>
        </Box>
    )
}
