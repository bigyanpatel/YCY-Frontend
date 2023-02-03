import React from 'react'
import { Avatar } from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';

export const SidebarData = [

    {
        title: "Profile",
        icon: <Avatar />,
        link: "/Profile"
    },
    {
        title: "Your Payment",
        icon: <PaidOutlinedIcon />,
        link: "/YourPayment"
    },
    {
        title: "Star User(Premium)",
        icon: <WorkspacePremiumOutlinedIcon />,
        link: "/StarUser"

    },
    {
        title: "Private Tution(Book Now)",
        icon: <CastForEducationOutlinedIcon />,
        link: "/PrivateTution"
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
    {
        title: "Contact Us",
        icon: <ContactPhoneOutlinedIcon />,
        link: "/ContactUs"

    },
    {
        title: "Blog",
        icon: <DescriptionOutlinedIcon />,
        link: "/Blog"
    },

    {
        title: "logout",
        icon: <PersonOutlineOutlinedIcon />,
        link: "/logout  "
    },





]



