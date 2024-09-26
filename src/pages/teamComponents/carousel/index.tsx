import React, { useRef, useState, useEffect } from 'react';
import {
  BdsGrid,
  BdsPaper,
  BdsTypo,
  BdsCarousel,
  BdsButton,
  BdsCarouselItem,
} from 'blip-ds/dist/blip-ds-react/components';

export interface Illust {
  type?: string;
  name?: string;
}

export interface DataCarousel {
  id: string;
  title?: string;
  subTitle?: string;
  illustration?: Illust;
}

const DATACAROUSEL = [
  {
    id: '1',
    title: '1 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'star',
    },
  },
  {
    id: '2',
    title: '2 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'check',
    },
  },
  {
    id: '3',
    title: '3 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'air-ballon',
    },
  },
  {
    id: '4',
    title: '4 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'air-ballon',
    },
  },
  {
    id: '5',
    title: '5 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'air-ballon',
    },
  },
  {
    id: '6',
    title: '6 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'air-ballon',
    },
  },
  {
    id: '7',
    title: '7 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'air-ballon',
    },
  },
  {
    id: '8',
    title: '8 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'air-ballon',
    },
  },
];

const NEWDATACAROUSEL = [
  {
    id: '48',
    title: '48 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'star',
    },
  },
  {
    id: '27',
    title: '27 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'check',
    },
  },
  {
    id: '32',
    title: '32 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'air-ballon',
    },
  },
  {
    id: '46',
    title: '46 - Título do Slide',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    illustration: {
      type: 'spots',
      name: 'air-ballon',
    },
  },
];

const Carousel = () => {
  const carouselElement = useRef<HTMLBdsCarouselElement>(null);
  const [data, setData] = useState<DataCarousel[]>(DATACAROUSEL);

  useEffect(() => {
    if (carouselElement.current) {
      carouselElement.current.buildCarousel();
    }
  }, [data]);

  const removeCarousel = (id: string) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  const newSlide = () => {
    const newItem = {
      id: `${data.length + 1}`,
      title: `${data.length + 1} - Título do Slide`,
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      illustration: {
        type: 'spots',
        name: 'air-ballon',
      },
    };
    setData([...data, newItem]);
  };

  const newCarousel = () => {
    setData(NEWDATACAROUSEL);
  };

  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Banner
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
              <BdsButton onBdsClick={() => newCarousel()}> new Carousel </BdsButton>
              <BdsButton onBdsClick={() => newSlide()}> new Slide </BdsButton>
              <BdsButton onBdsClick={() => removeCarousel(data.length.toString())}> remove Slide </BdsButton>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsCarousel
                ref={carouselElement}
                slidePerPage={4}
                onBdsChangeCarousel={() => console.log('onBdsChangeCarousel')}
              >
                {data &&
                  data.length > 0 &&
                  data?.map((item) => {
                    return (
                      <BdsCarouselItem key={item.id}>
                        <BdsGrid direction="column">
                          <BdsTypo>{item.title}</BdsTypo>
                          <BdsTypo>{item.subTitle}</BdsTypo>
                        </BdsGrid>
                      </BdsCarouselItem>
                    );
                  })}
              </BdsCarousel>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Carousel;
