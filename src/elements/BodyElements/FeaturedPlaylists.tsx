import React from 'react';
import Box from '@mui/material/Box';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import AlignItemsList from '../ListItems';

import { useMedia } from '../../hooks/ResponsiveHook';

import './index.css';

function renderRow(props: ListChildComponentProps) {
    const { index } = props;

    return (
        <ListItem key={index} component="div" disablePadding>
            <ListItemButton>
                <AlignItemsList />
            </ListItemButton>
        </ListItem>
    );
}


function FeaturedPlaylists(): JSX.Element {

    const isLargeDesktop = useMedia('(min-width: 1824px)');
    const isDesktop = useMedia('(min-width: 1024px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isMobile = useMedia('(max-width: 480px)');

    return (
        <Box
            sx={{ width: '100%', height: 400, bgcolor: 'background.paper' }}
        >
            <FixedSizeList
                height={400}
                width={
                    isLargeDesktop ? '100%' :
                        isDesktop ? '100%' :
                            isTablet ? '100%' :
                                isMobile ? '100%' :
                                    '100%'
                }
                itemSize={1}
                itemCount={50}
                overscanCount={5}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    )
}

export default FeaturedPlaylists;
