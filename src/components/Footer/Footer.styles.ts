import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ palette }) =>
    createStyles({
      footer: {
        flex: '0 0 auto',
        backgroundColor: palette.background.default,
      },
    }),
  { name: 'Footer' }
);

export { useStyles };
