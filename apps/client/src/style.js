/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {styled, createTheme} from '@mui/material/styles';

const PREFIX = 'custom';

export const classes = {
  appBar: `${PREFIX}-app-bar`,
  heading: `${PREFIX}-heading`,
  logoImage: `${PREFIX}-logo-image`,
  mainContainer: `${PREFIX}-main-container`,
  menuItem: `${PREFIX}-menu-item`,
  chip: `${PREFIX}-chip`,
  chipCaption: `${PREFIX}-chip-caption`,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e71212',
    },
  },
});

export const StyleWrapper = styled('div')(({theme}) => ({
  [`& .${classes.appBar}`]: {
    margin: '0 0 30px 0',
  },
  [`& .${classes.heading}`]: {
    color: '#ed3d48',
  },
  [`& .${classes.menuItem}`]: {
    color: '#ed3d48',
    marginRight: '20px',
  },
  [`& .${classes.chipCaption}`]: {
    marginRight: '20px',
  },
  [`& .${classes.chip}`]: {
    color: '#ffffff',
  },
  [`& .${classes.chip}.red`]: {
    backgroundColor: '#ed3d48',
  },
  [`& .${classes.chip}.silver`]: {
    backgroundColor: '#B6B6B6',
  },
  [`& .${classes.chip}.gold`]: {
    backgroundColor: '#F1F2F0',
  },
  [`& .${classes.chip}.platinum`]: {
    backgroundColor: '#060809',
  },
  [`& .${classes.chip} .icon`]: {
    fill: '#ffffff',
  },
  [`& .${classes.logoImage}`]: {
    marginLeft: '15px',
    marginTop: '25px',
    marginBottom: '23px'
  },
  [`& .${classes.mainContainer}`]: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
