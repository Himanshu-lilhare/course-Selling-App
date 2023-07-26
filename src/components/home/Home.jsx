import {
  Box,
 
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { firstRowAndLasrRow, middleRow } from '../../utils/courseImages';



const Home = () => {


  return (
    <section className="home">
      <div className="container">
   
        <div className="bannerdiv">
          <div className="logodiv">
            <Image height={'90%'} className="logoimg" src="/banner2,svg.svg" />
          </div>

          <VStack
            className="bannerDetail"
            height={['full', '50%']}
            width={['full', 'full']}
            alignItems={['center', 'center']}
            spacing="6"
          >
            <Heading
              color={'whiteAlpha.900'}
              children="BEST COURSES"
              size={['xl', '2xl']}
            />
            <Text
            fontWeight={500}
              color={'whiteAlpha.900'}
              textAlign={['center', 'center']}
              paddingRight={'1'}
              children="YOU CAN'T FIND BEST COURSE THEN THIS I GUARENTEE YOU "
            />
            <Link to="/courses">
              <button className="findCourse" color={'white'}>
                FIND your course
              </button>
            </Link>
          </VStack>
        </div>
        {/* </Stack> */}
      </div>

{/* 
      let content = document.querySelector('.content');

      content.addEventListener('animationend',function(content){animate(content)}); */}

      <Box className="brandbox">
        <div className="brandsbanner forodd">
          {firstRowAndLasrRow.map((image, index) => {
           return <div className="OneBrand" key={index}>
            <img src={image.path} alt="" />
              </div> 
          })}
           
              
        </div>

        <div className="brandsbanner foreven">
          {middleRow.map((image, index) => {
            return <div className="OneBrand">
    <img src={image.path} alt="" />
            </div>;
          })}
        </div>
        <div className="brandsbanner forodd">
          {firstRowAndLasrRow.reverse().map((image, index) => {
            return <div className="OneBrand">
    <img src={image.path} alt="" />
            </div>;
          })}
        </div>
      </Box>

      <div className="container2">
        <video
          src="/intro.mp4"
          controls
          autoPlay
          controlsList="nodownload  nofullscreen"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default Home;
