import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsSlider } from 'blip-ds/dist/blip-ds-react/components';

const Slider = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Slider
              </BdsTypo>
              <BdsTypo variant="fs-16">
                O componente slider permite que o usuário faça seleções a partir de um intervalo de valores.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsSlider
                id="1964-slider"
                value={50}
                min={0}
                max={100}
                step={10}
                markers
                label
                type="fill"
                dataTest="should-slider"
              ></BdsSlider>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Slider;
