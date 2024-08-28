import React, { useRef } from 'react';
import {
  BdsGrid,
  BdsPaper,
  BdsTypo,
  BdsBanner,
  BdsBannerLink,
  BdsCarousel,
  BdsCarouselItem,
  BdsIllustration,
  BdsButton,
} from 'blip-ds/dist/blip-ds-react/components';

const Carousel = () => {
  const carouselElement = useRef<HTMLBdsCarouselElement>(null);

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
              <BdsButton onBdsClick={() => carouselElement.current?.buildCarousel()}> buildCarousel </BdsButton>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsCarousel ref={carouselElement}>
                <BdsCarouselItem>
                  <BdsPaper bgColor="surface-0">
                    <BdsGrid align-items="center">
                      <BdsGrid xxs="3" padding="3" direction="column" margin="y-2">
                        <BdsIllustration type="spots" name="star"></BdsIllustration>
                      </BdsGrid>
                      <BdsGrid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                        <BdsTypo variant="fs-20" bold="bold" margin={false}>
                          1 - Título do Slide
                        </BdsTypo>
                        <BdsTypo variant="fs-16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit
                          amet tincidunt non.
                        </BdsTypo>
                        <BdsButton>Saiba mais</BdsButton>
                      </BdsGrid>
                    </BdsGrid>
                  </BdsPaper>
                </BdsCarouselItem>
                <BdsCarouselItem>
                  <BdsPaper bgColor="surface-0">
                    <BdsGrid align-items="center">
                      <BdsGrid xxs="3" padding="3" direction="column" margin="y-2">
                        <BdsIllustration type="spots" name="check"></BdsIllustration>
                      </BdsGrid>
                      <BdsGrid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                        <BdsTypo variant="fs-20" bold="bold" margin={false}>
                          2 - Título do Slide
                        </BdsTypo>
                        <BdsTypo variant="fs-16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit
                          amet tincidunt non.
                        </BdsTypo>
                        <BdsButton>Saiba mais</BdsButton>
                      </BdsGrid>
                    </BdsGrid>
                  </BdsPaper>
                </BdsCarouselItem>
                <BdsCarouselItem>
                  <BdsPaper bgColor="surface-0">
                    <BdsGrid align-items="center">
                      <BdsGrid xxs="3" padding="3" direction="column" margin="y-2">
                        <BdsIllustration type="spots" name="air-ballon"></BdsIllustration>
                      </BdsGrid>
                      <BdsGrid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                        <BdsTypo variant="fs-20" bold="bold" margin={false}>
                          3 - Título do Slide
                        </BdsTypo>
                        <BdsTypo variant="fs-16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit
                          amet tincidunt non.
                        </BdsTypo>
                        <BdsButton>Saiba mais</BdsButton>
                      </BdsGrid>
                    </BdsGrid>
                  </BdsPaper>
                </BdsCarouselItem>
                <BdsCarouselItem>
                  <BdsPaper bgColor="surface-0">
                    <BdsGrid align-items="center">
                      <BdsGrid xxs="3" padding="3" direction="column" margin="y-2">
                        <BdsIllustration type="spots" name="analytics-satisfaction"></BdsIllustration>
                      </BdsGrid>
                      <BdsGrid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                        <BdsTypo variant="fs-20" bold="bold" margin={false}>
                          4 - Título do Slide
                        </BdsTypo>
                        <BdsTypo variant="fs-16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit
                          amet tincidunt non.
                        </BdsTypo>
                        <BdsButton>Saiba mais</BdsButton>
                      </BdsGrid>
                    </BdsGrid>
                  </BdsPaper>
                </BdsCarouselItem>
              </BdsCarousel>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Carousel;
