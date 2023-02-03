import React from 'react'
import { Avatar } from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export const SidebarData = [

    {
        title: "Profile",
        icon: <Avatar />,
        link: "/Profile"
    },
    {
        title: "Blog",
        icon: <DescriptionOutlinedIcon />,
        link: "/Blog"
    },
    {
        title: "Contact Us",
        icon: <ContactPhoneOutlinedIcon />,
        link: "/Contact Us"

    },
    {
        title: "Student Review",
        icon: <PersonOutlineOutlinedIcon />,
        link: "/StudentReview"
    },
    {
        title: "Book Review",
        icon: <MenuBookOutlinedIcon />,
        link: "/BookReview"
    },
    {
        title: "College Review",
        icon: <SchoolOutlinedIcon />,
        link: "/CollegeReview"
    },



]



