import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/core';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/ds/src';
import { TimeInput, TimeInputProps } from '../TimeInput';
import { TimeInput as TimeInputStylesApi } from '../styles.api';

const styles = generateBorderStyles(TimeInputStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<TimeInputProps>) {
  return <InputStylesApiWrapper component={TimeInput} {...props} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/dates/TimeInput/styles-api', module)
  .add('With sx', () => (
    <Wrapper sx={{ border: '1px solid red', maxWidth: 400 }} mx="auto" mt="xl" />
  ))
  .add('Root styles object', () => <Wrapper styles={{ root: { border: '1px solid blue' } }} />)
  .add('Root styles function', () => (
    <Wrapper styles={() => ({ root: { border: '1px solid blue' } })} />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ TimeInput: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
