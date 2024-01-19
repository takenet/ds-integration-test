import React from 'react';
import './index.scss';
import { BdsButton, BdsPaper, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

import { components } from '../../utils/components';
import { Link } from 'react-router-dom';

const TeamComponents = () => {
  return (
    <>
      <bds-grid margin="y-4" container>
        <bds-paper class="w-100">
          <bds-grid flex-wrap="wrap" margin="y-4" padding="x-3">
            <bds-grid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Team Components
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Segue abaixo a listagem de todos os Team Components disponíveis no UAI Design System.
              </BdsTypo>
            </bds-grid>
            {components[1].pages.map((item, index) => (
              <bds-grid key={index} xxs="4" margin="y-2" direction="column" class="card-chatbot-body">
                <BdsPaper>
                  <bds-grid padding="2" direction="column" gap="2">
                    <BdsTypo variant="fs-16" bold="bold">
                      {item.name}
                    </BdsTypo>
                    <Link to={item.href}>
                      <BdsButton variant="tertiary"> Abrir </BdsButton>
                    </Link>
                  </bds-grid>
                </BdsPaper>
              </bds-grid>
            ))}
          </bds-grid>
        </bds-paper>
      </bds-grid>
    </>
  );
};
export default TeamComponents;
