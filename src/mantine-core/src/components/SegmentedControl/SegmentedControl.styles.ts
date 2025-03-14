import { createStyles, MantineNumberSize, MantineSize, MantineColor } from '@mantine/styles';

export const WRAPPER_PADDING = 4;

interface SegmentedControlStyles {
  fullWidth: boolean;
  color: MantineColor;
  radius: MantineNumberSize;
  shouldAnimate: boolean;
  transitionDuration: number;
  transitionTimingFunction: string;
  size: MantineSize;
}

const sizes = {
  xs: '3px 6px',
  sm: '5px 10px',
  md: '7px 14px',
  lg: '9px 16px',
  xl: '12px 20px',
};

export default createStyles(
  (
    theme,
    {
      fullWidth,
      color,
      radius,
      shouldAnimate,
      transitionDuration,
      transitionTimingFunction,
      size,
    }: SegmentedControlStyles,
    getRef
  ) => {
    const label = getRef('label');
    const control = getRef('control');

    return {
      label: {
        ref: label,
        ...theme.fn.focusStyles(),
        ...theme.fn.fontStyles(),
        WebkitTapHighlightColor: 'transparent',
        borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
        fontWeight: 500,
        fontSize: size in theme.fontSizes ? theme.fontSizes[size] : theme.fontSizes.sm,
        cursor: 'pointer',
        display: 'block',
        textAlign: 'center',
        padding: sizes[size in sizes ? size : 'sm'],
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        userSelect: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        transition: `color ${shouldAnimate ? 0 : transitionDuration}ms ${
          transitionTimingFunction || theme.transitionTimingFunction
        }`,

        '&:hover': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        },
      },

      control: {
        ref: control,
        position: 'relative',
        boxSizing: 'border-box',
        flex: 1,
        zIndex: 2,
        transition: `border-left-color ${shouldAnimate ? 0 : transitionDuration}ms ${
          transitionTimingFunction || theme.transitionTimingFunction
        }`,

        '&:not(:first-of-type)': {
          borderLeft: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
        },
      },

      input: {
        height: 0,
        width: 0,
        position: 'absolute',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        opacity: 0,

        // input is hidden by default, these styles add focus to label when user navigates with keyboard
        '&:focus': {
          outline: 'none',

          [`& + .${label}`]: {
            outline: 'none',
            boxShadow: `0 0 0 2px ${
              theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
            }, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`,
          },

          '&:focus:not(:focus-visible)': {
            [`& + .${label}`]: {
              boxShadow: 'none',
            },
          },
        },
      },

      root: {
        position: 'relative',
        display: fullWidth ? 'flex' : 'inline-flex',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
        borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
        overflow: 'hidden',
        padding: WRAPPER_PADDING,
      },

      controlActive: {
        borderLeftColor: 'transparent !important',

        [`& + .${control}`]: {
          borderLeftColor: 'transparent !important',
        },
      },

      labelActive: {
        '&, &:hover': {
          color: color in theme.colors || theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },

      active: {
        boxSizing: 'border-box',
        borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
        position: 'absolute',
        top: 4,
        bottom: 4,
        zIndex: 1,
        boxShadow: color || theme.colorScheme === 'dark' ? 'none' : theme.shadows.xs,
        transition: `transform ${shouldAnimate ? 0 : transitionDuration}ms ${
          theme.transitionTimingFunction
        }, width ${shouldAnimate ? 0 : transitionDuration / 2}ms ${
          transitionTimingFunction || theme.transitionTimingFunction
        }`,
        backgroundColor:
          color in theme.colors
            ? theme.fn.themeColor(color, 6)
            : theme.colorScheme === 'dark'
            ? theme.colors.dark[5]
            : theme.white,
      },
    };
  }
);
