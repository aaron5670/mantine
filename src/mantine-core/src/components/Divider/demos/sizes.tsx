import React from 'react';
import { Divider } from '../Divider';

const code = `
<Divider size="xs" />
<Divider size="sm" />
<Divider size="md" />
<Divider size="lg" />
<Divider size="xl" />
<Divider size={10} />
`;

function Demo() {
  return (
    <>
      <Divider my="xs" size="xs" />
      <Divider my="xs" size="sm" />
      <Divider my="xs" size="md" />
      <Divider my="xs" size="lg" />
      <Divider my="xs" size="xl" />
      <Divider my="xs" size={10} />
    </>
  );
}

export const sizes: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
