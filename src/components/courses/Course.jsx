import { Button } from '@chakra-ui/react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Course = ({ item, addtocarthandler }) => {
  console.log(item);

  return (
    <div className="course">
      <div className="imgbx">
        <img src={item.poster.url} />
      </div>

      <div className="content">
        <div className="details">
          <div className="headDesc">
          <div className="viewCreator">
            <div className="displayFlexAndRow">
              <span>{item.noOfVideos}</span>
              <span>Lectures</span>
            </div>

            <div className="displayFlexAndRow">
              <span>{item.views}</span>
              <span>Impressions</span>
            </div>
          </div>
            <h3>{item.title}</h3>
            <span>creator : </span>
            <span className="creator">{item.createdby.toUpperCase()}</span>
          </div>

          

          <div className="courseButton">
            <NavLink to={`/course/${item._id}`}>
              <Button
                fontSize={["13","16"]} 
                className="courseButtonReal"
                colorScheme={'blue'}
              >
                WATCH NOW
              </Button>
            </NavLink>
            <Button
              className="courseButtonReal"
           fontSize={["13","16"]} 
          
              colorScheme={'blue'}
              variant="ghost"
              onClick={() => addtocarthandler(item._id)}
            >
              ADD TO PLAYLIST
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Course);
