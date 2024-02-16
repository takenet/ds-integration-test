import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsAvatar, BdsAvatarGroup } from 'blip-ds/dist/blip-ds-react/components';

const users = [
  { id: '1', name: 'Michael Scott' },
  { id: '2', name: 'Dwight Schrute' },
  { id: '3', name: 'Jim Halpert' },
  { id: '4', name: 'Pam Beesly' },
  { id: '5', name: 'Ryan Howard' },
  { id: '6', name: 'Andy Bernard' },
];

const Avatar = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Avatar
              </BdsTypo>
              <BdsTypo variant="fs-16">São imagens circulares para representar o usuário.</BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsAvatar
                id="4697-should"
                dataTest="should-avatar"
                name="Michael Scott"
                thumbnail=""
                size="standard"
                upload={true}
              ></BdsAvatar>
              <BdsAvatarGroup can-click={true} size="standard" users={JSON.stringify(users)}></BdsAvatarGroup>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Avatar;
