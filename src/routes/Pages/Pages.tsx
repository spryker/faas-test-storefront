import {Route, Routes} from 'react-router-dom';

import Box from '@mui/material/Box';

import routes from '..';
import {getPageHeight} from './utils';
import {oryxSubApp} from "@/routes/oryx-utils";

function Pages() {

  oryxSubApp('/page-3/');

  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Box>
  );
}

export default Pages;
