import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

export default function GridList() {
  const [quantity, setQuantity] = useState(30);
  const lists = [
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
    {
      id: 1,
      imgUrl:
        'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
    },
    {
      id: 2,
      imgUrl:
        'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
    },
    {
      id: 3,
      imgUrl:
        'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
    },
    {
      id: 4,
      imgUrl:
        'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
    },
    {
      id: 5,
      imgUrl:
        'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
    },
    {
      id: 6,
      imgUrl:
        'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
    },
  ];
  const showLists = lists.slice(0, quantity);

  const handleScroll = () => {
    document.addEventListener(
      'scroll',
      _.throttle(() => {
        let scrollTop = document.documentElement.scrollTop,
          windowHeight = window.innerHeight,
          height = document.body.scrollHeight - windowHeight,
          scrollPercentage = scrollTop / height;
        let newQuantity = quantity + 1;
        if (scrollPercentage > 0.9 && newQuantity < lists.length) {
          console.log(newQuantity);
          console.log('length', lists.length);
          setQuantity(newQuantity);
        }
      }, 500),
    );
    // let scrollTop = document.documentElement.scrollTop,
    //   windowHeight = window.innerHeight,
    //   height = document.body.scrollHeight - windowHeight,
    //   scrollPercentage = scrollTop / height;
    // console.log(scrollTop);
    // console.log(windowHeight);
    // console.log(scrollPercentage);
  };
  // console.log('render');
  handleScroll();

  const imgClickHandler = (e) => {
    console.log(e.target.lat);
  };
  return (
    <Container>
      {showLists.map((list, idx) => (
        <Img
          key={idx}
          src={list.imgUrl}
          alt={list.id}
          onClick={imgClickHandler}
        ></Img>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;
`;

const Img = styled.img`
  margin-top: 1px;
  width: 165px;
  height: 165px;
`;