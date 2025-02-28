import React from 'react';

import { BdsButton, BdsGrid, BdsPaper, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

import { components } from '../../utils/components';
import { Link } from 'react-router-dom';

const BaseComponents = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Base Components
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Segue abaixo a listagem de todos os Base Components disponíveis no UAI Design System.
              </BdsTypo>
            </BdsGrid>
            {components[0].pages.map((item, index) => (
              <BdsGrid key={index} xxs="4" margin="y-2" direction="column" class="card-chatbot-body">
                <BdsPaper>
                  <BdsGrid padding="2" direction="column" gap="2">
                    <BdsTypo variant="fs-16" bold="bold">
                      {item.name}
                    </BdsTypo>
                    <BdsTypo variant="fs-12">{item.description}</BdsTypo>
                    <Link to={item.href}>
                      <BdsButton> Abrir </BdsButton>
                    </Link>
                  </BdsGrid>
                </BdsPaper>
              </BdsGrid>
            ))}
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default BaseComponents;
