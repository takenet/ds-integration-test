import React from 'react';
import { BdsGrid, BdsImage, BdsPaper, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

const Image = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Image
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Um componente para exibir imagens com suporte a carregamento assíncrono e tratamento de erros.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsImage
                id="6578-image"
                src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
                alt="Example of a image"
                width="300px"
                height="200px"
                objectFit="cover"
                dataTest="should-image"
              ></BdsImage>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Image;
