import { FC, MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import { Box, ButtonBase, Grid, Typography } from '@material-ui/core';

import { getCategories, setExpenseCategory, setExpenseType, showEditDialog } from 'store/reducers/control';
import { getCategories as getCategoriesList } from 'store/reducers/control/selectors';

import { useStyles } from './ControlPanel.styles';

const ControlPanel: FC = () => {
  const classes = useStyles();
  const { container, image, focusVisible, imageSrc, imageBackdrop, imageButton, imageTitle, imageMarked } = classes;
  const categories = useSelector(getCategoriesList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleAddMoneyControl = (event: MouseEvent<HTMLElement>) => {
    const { category, fab } = event.currentTarget.dataset;

    category && dispatch(setExpenseCategory(category));
    fab && dispatch(setExpenseType(fab));
    dispatch(showEditDialog());
  };

  return (
    <Box className={container}>
      <Grid container>
        {categories.map((item) => (
          <Grid key={uniqid()} item xs={6} sm={4}>
            <ButtonBase
              focusRipple
              className={image}
              focusVisibleClassName={focusVisible}
              onClick={handleAddMoneyControl}
              data-fab={item.label}
              data-category={item.id}
            >
              <span
                className={imageSrc}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />
              <span className={imageBackdrop} />
              <span className={imageButton}>
                <Typography component="span" variant="subtitle1" color="inherit" className={imageTitle}>
                  {item.label}
                  <span className={imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { ControlPanel };