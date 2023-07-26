import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  MenuItemOption,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState, memo } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToplaylist, getCourses } from '../../redux/actions/courseAction';
import Course from './Course';

// const Course = React.lazy()
import './courses.css';

const Courses = () => {
  const [keyword, setkeyword] = useState('');
  const [category, setcategory] = useState('');
  const dispatch = useDispatch();
  const { courses } = useSelector(state => state.courses);

  const { addToCartMessage, addToCartError } = useSelector(
    state => state.addToCartReducer
  );

  const [categories, setCategories] = useState([
    'WEB DEVELOPEMENT',
    'UI/UX',
    'APP DEVELOPEMENT',
    'DATA STRUCTURE',
    'INTERVIEW PREPEARATION',
    'MACHINE LEARNING',
    'BLOCKCHAIN DEVELOPEMENT',
    'DEVOPS',
  ]);
  useEffect(() => {
    dispatch(getCourses(keyword, category));
  }, [keyword, category, dispatch]);

  useEffect(() => {
    if (addToCartMessage) {
      toast.success(addToCartMessage);
      dispatch({ type: 'clearmessage' });
    }
    if (addToCartError) {
      toast.error(addToCartError);
      dispatch({ type: 'clearerror' });
    }
  }, [addToCartMessage, addToCartError, dispatch]);

  const addtocarthandler = useCallback(id => {
    dispatch(addToplaylist(id));
  }, []);

  return (
    <Container minH={'95vh'} maxW="container.lg" padding={['3', '2']}>
      <Heading children="ALL COURSE" m={'2'} textAlign={'center'} />

      <Input
        value={keyword}
        placeholder="SEARCH COURSE"
        type={'text'}
        onChange={e => setkeyword(e.target.value)}
      />
      <HStack
        overflowX={'auto'}
        padding="2"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Select
          value={category}
          onChange={e => setcategory(e.target.value)}
          placeholder={'SELECT CATEGORY'}
          color={'blackAlpha.700'}
        >
          {categories.map((category, index) => {
            return <option value={`${category}`}>{category}</option>;
          })}
        </Select>

        {/* {categories.map((item, index) => {
            return (
              <Button  onClick={() => setcategory(item)} key={index} maxW='max-content' minW="56">
                <Text children={item} />
              </Button>
            );
          })} */}
      </HStack>

      <div className="courses">
        {Array.isArray(courses) && courses ? (
          courses.map((item, index) => {
            return (
              <Course
                key={item._id}
                item={item}
                addtocarthandler={addtocarthandler}
              />
            );
          })
        ) : (
          <Heading children="Sorry , Course Not Found" />
        )}
      </div>
    </Container>
  );
};

export default Courses;
