import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsBanner, BdsBannerLink } from 'blip-ds/dist/blip-ds-react/components';

const Banner = () => {
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
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsBanner id="1628-banner" dtButtonClose="should-button-close" variant="system" button-close="true">
                Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
                <BdsBannerLink>Acompanhe aqui</BdsBannerLink>
              </BdsBanner>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Banner;
