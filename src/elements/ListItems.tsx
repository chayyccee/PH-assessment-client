import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AddSharpIcon from '@mui/icons-material/AddSharp';

import { useGetNewReleasesQuery } from '../redux/services/newReleasesApi';
// import { useAddedToLibraryMutation } from '../redux/services/addToLibraryApi';

import { Skeleton } from 'antd';


const AlignItemsList: React.FC = () => {
    const { data, isLoading } = useGetNewReleasesQuery();
    const albums = (data as any)?.albums.items;
    console.log(albums);
    // const [addedToLibrary] = useAddedToLibraryMutation();
    // const [isAdded, setIsAdded] = React.useState<boolean>(false);


    return (
        <>
            {isLoading && <Skeleton avatar paragraph={{ rows: 5 }} />}
            <div className='w-100'>

                {albums && albums.map((album: any) => (
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={album.id}>
                        <ListItem alignItems="flex-start" secondaryAction={
                            <>
                                <IconButton
                                    edge="end"
                                    aria-label="Add"
                                    onClick={
                                        () => {}
                                    }
                                >
                                    <AddSharpIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        }>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={album.images[2].url} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={album.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {album.artists[0].name}
                                        </Typography>
                                        {` — ${album.release_date}`}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                ))}
            </div>
        </>
    );
};

export default AlignItemsList;

