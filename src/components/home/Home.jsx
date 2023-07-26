import {
  Box,
  Button,
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
import { RiDashboard3Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isauthenticate, user } = useSelector(state => state.user);
  console.log(isauthenticate);
  return (
    <section className="home" style={{ position: 'relative' }}>
      {isauthenticate && user && user?.role === 'testadmin' && (
        <>
          <Link to="/admin/admincourses">
            <Button
              position="absolute"
              left={'67px'}
              top={'14px'}
              colorScheme={'blue'}
            >
              ADMIN DASHBOARD
            </Button>
          </Link>
        </>
      )}
      {isauthenticate && user && user?.role === 'testadmin' && (
        <>
          <Link to="/admin/admincourses">
            <Button
              position="absolute"
              left={'67px'}
              top={'14px'}
              colorScheme={'blue'}
            >
             ADMIN DASHBOARD
            </Button>
          </Link>
        </>
      )}

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
            return (
              <div className="OneBrand" key={index}>
                <img src={image.path} alt="" />
              </div>
            );
          })}
        </div>

        <div className="brandsbanner foreven">
          {middleRow.map((image, index) => {
            return (
              <div key={index} className="OneBrand">
                <img src={image.path} alt="" />
              </div>
            );
          })}
        </div>
        <div className="brandsbanner forodd">
          {firstRowAndLasrRow.reverse().map((image, index) => {
            return (
              <div key={index} className="OneBrand">
                <img src={image.path} alt="" />
              </div>
            );
          })}
        </div>
      </Box>
    </section>
  );
};

export default Home;
