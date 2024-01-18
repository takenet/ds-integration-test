import React, { useState } from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsSidebar, BdsButton } from 'blip-ds/dist/blip-ds-react/components';

const Sidebar = () => {
  const [openComponent, setOpenComponent] = useState(false);
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Sidebar
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsButton variant="primary" size="standard" onBdsClick={() => setOpenComponent(!openComponent)}>
                Abrir Sidebar
              </BdsButton>
              <BdsSidebar is-open={openComponent} sidebar-position="right" margin={true} type="over">
                <div slot="header">
                  <BdsTypo>Insira o header aqui</BdsTypo>
                </div>
                <div slot="body">
                  <BdsTypo>Insira o seu conteúdo aqui</BdsTypo>
                </div>
                <div slot="footer">
                  <BdsTypo>Insira o footer aqui</BdsTypo>
                </div>
              </BdsSidebar>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Sidebar;
