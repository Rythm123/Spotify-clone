import React from 'react';
import "./Body.css"
import Header from "./Header";
import {useDataLayerValue} from "./DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./SongRow";
import { Container } from '@material-ui/core';


function Body({spotify}) {

    const [{discover_weekly},dispatch]=useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} />
                <div className="body_infotext">
                    <strong>PLAYLIST</strong>
                    <h3>Discover Weekly</h3>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffler"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>
                
                {discover_weekly?.tracks.items.map(item=>(
                    <SongRow track={item.track}/>
                )
                )}
                
                

            </div>
           
        </div>
    );
};


export default Body;
