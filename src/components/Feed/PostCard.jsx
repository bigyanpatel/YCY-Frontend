import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, Tooltip, Typography, MenuItem } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Image from "../../assets/Images/bookcupboard.jpg"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShowMoreText from "react-show-more-text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

const settings = ['Copy Link', 'Edit', 'Delete'];
 
export const PostCard = () => {
    const [expand, setExpand] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const onClick = () => {
        setExpand(!expand);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

  return (
    <Card sx={{ width: '100vw' , borderRadius: '6px', boxShadow: 'none', mx: '16px', my: '16px', width:{sm:'560px'}}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} title="Profile">
            R
          </Avatar>
        }
        action={
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <MoreVertIcon sx = {{color: '#ec6b25',
                        ':hover': {
                            bgcolor: '#F7F7F7',  
                        },}}/>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="subtitle" gutterBottom color="text.primary">
            <ShowMoreText
                lines={1}
                more={<KeyboardArrowDownIcon sx = {{color: '#ec6b25',}} />}
                less={<KeyboardArrowUpIcon sx = {{color: '#ec6b25',}}/>}
                onClick={onClick}
                expanded={expand}
                width={1400}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, exercitationem sint et cumque iusto, nisi sit iure unde inventore enim eius delectus suscipit ducimus? Dolores rerum odio, molestiae rem corrupti nesciunt fuga, velit sapiente, facere architecto debitis tenetur. Saepe necessitatibus temporibus ratione accusamus asperiores ipsam assumenda harum eum iure repudiandae inventore, maiores consectetur quam, tempora aliquam voluptas doloremque. Iure itaque atque quasi, recusandae laboriosam sed amet eum aspernatur animi eius nemo pariatur veniam consequuntur reiciendis vel dolorum earum nesciunt voluptates? Illo tempore possimus eum accusamus maiores ratione provident obcaecati sapiente ut fuga dicta quisquam, mollitia tenetur labore cupiditate eaque facilis!
            </ShowMoreText>
        </Typography>
      </CardContent>
        <CardMedia
        component="img"
        height='52'
        image={Image}
        alt="Paella dish"
        />
      <CardActions disableSpacing sx={{position:'relative'}}>
        <IconButton aria-label="add to favorites"  sx={{
            ':hover': {
                bgcolor: '#F7F7F7', 
            },
        }}>
          <ThumbUpOutlinedIcon sx = {{color: '#ec6b25',
            ':hover': {
                bgcolor: '#F7F7F7',  
            },}} />
        </IconButton>
        <IconButton aria-label="share">
          <ModeCommentOutlinedIcon sx={{
            color: '#ec6b25',
            ':hover': {
                bgcolor: '#F7F7F7',  
            },
        }}/>
        </IconButton>
        <IconButton
         aria-label="one-tw0-one"
         sx={{
            ':hover': {
                bgcolor: '#F7F7F7', 
            
            },
            position:'absolute',
            right:'8px' 
        }}
        >
            <FontAwesomeIcon icon={faChalkboardUser} className='text-[#ec6b25] w-[24px]'/>
        </IconButton>
      </CardActions>
    </Card>
  )
}
